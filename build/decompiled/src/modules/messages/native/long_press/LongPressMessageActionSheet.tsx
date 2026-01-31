// modules/messages/native/long_press/LongPressMessageActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun77824: for (var _fun77824_ip = 0;;) switch (_fun77824_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun77824_ip = 46;
                    continue _fun77824
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun77824_ip = 55;
                    continue _fun77824
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun77824_ip = 345;
                    continue _fun77824
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun77824_ip = 323;
                    continue _fun77824
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun77824_ip = 283;
                    continue _fun77824
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun77824_ip = 270;
                    continue _fun77824
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
                    _fun77824_ip = 163;
                    continue _fun77824
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun77824_ip = 179;
                    continue _fun77824
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun77824_ip = 249;
                    continue _fun77824
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun77824_ip = 249;
                    continue _fun77824
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun77824_ip = 234;
                    continue _fun77824
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun77824_ip = 247;
                    continue _fun77824
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun77824_ip = 265;
                continue _fun77824;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun77824_ip = 283;
                continue _fun77824;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun77824_ip = 323;
                    continue _fun77824
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
                    _fun77824_ip = 330;
                    continue _fun77824
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun77825: for (var _fun77825_ip = 0;;) switch (_fun77825_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun77825_ip = 56;
                                continue _fun77825
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
                            _fun77825_ip = 67;
                            continue _fun77825;
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
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun77826: for (var _fun77826_ip = 0;;) switch (_fun77826_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun77826_ip = 23;
                    continue _fun77826
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun77826_ip = 33;
                    continue _fun77826
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
                    _fun77826_ip = 70;
                    continue _fun77826
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun77826_ip = 55;
                    continue _fun77826
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var7 = var5[var8];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
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
    var3 = var3.isMessageComponentsV2;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.FileUploadErrorTypes;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot14 = var6;
    var6 = var3.ChannelTypes;
    var _closure1_slot15 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot16 = var6;
    var6 = var3.LOCAL_BOT_ID;
    var _closure1_slot17 = var6;
    var6 = var3.MessageAttachmentFlags;
    var _closure1_slot18 = var6;
    var6 = var3.MessageFlags;
    var _closure1_slot19 = var6;
    var6 = var3.MessageStates;
    var _closure1_slot20 = var6;
    var6 = var3.MessageTypes;
    var _closure1_slot21 = var6;
    var6 = var3.MessageTypesSets;
    var _closure1_slot22 = var6;
    var3 = var3.Permissions;
    var _closure1_slot23 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot24 = var3;
    var3 = {};
    var3.PRIMARY = var9;
    var6 = 'PRIMARY';
    var3[var9] = var6;
    var3.GENERAL = var8;
    var6 = 'GENERAL';
    var3[var8] = var6;
    var3.DESTRUCTIVE = var7;
    var6 = 'DESTRUCTIVE';
    var3[var7] = var6;
    var _closure1_slot25 = var3;
    var3 = 73;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/long_press/LongPressMessageActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: LongPressMessageActionSheet, environment: var1
        _fun77827: for (var _fun77827_ip = 0;;) switch (_fun77827_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var27 = 12;
                var4 = var1[var27];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var15 = 13;
                var1 = var1[var15];
                var1 = var5.bind(var2)(var1);
                var1 = var1.MESSAGE_LONG_PRESS_MENU;
                var1 = var4.bind(var2)(var1);
                var1 = var1.analyticsLocations;
                var _closure2_slot1 = var1;
                var1 = var0.analyticsLocation;
                if (!(var2 === var1)) {
                    _fun77827_ip = 79;
                    continue _fun77827
                }
            case 77:
                var1 = {};
            case 79:
                var _closure2_slot2 = var1;
                var42 = var0.user;
                var16 = var0.message;
                var _closure2_slot3 = var16;
                var47 = var0.channel;
                var _closure2_slot4 = var47;
                var4 = var0.chatInputRef;
                var _closure2_slot5 = var4;
                var21 = var0.selectedMedia;
                var _closure2_slot6 = var21;
                var4 = var0.actionSheetSource;
                var72 = undefined;
                if (!(var2 !== var4)) {
                    _fun77827_ip = 141;
                    continue _fun77827
                }
            case 138:
                var72 = var4;
            case 141:
                var _closure2_slot7 = var72;
                var5 = var0.canAddNewReactions;
                var4 = var2 !== var5;
                if (!var4) {
                    _fun77827_ip = 161;
                    continue _fun77827
                }
            case 158:
                var4 = var5;
            case 161:
                var _closure2_slot8 = var4;
                var5 = _closure1_slot4;
                var7 = var5.useEffect;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var47;
                var1 = function() { // Environment: var3
                    _fun77828: for (var _fun77828_ip = 0;;) switch (_fun77828_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot13;
                            var2 = var1.MESSAGE_ACTION_SHEET_OPENED;
                            var1 = {};
                            var5 = _closure2_slot4;
                            var5 = var5.id;
                            var1.channel_id = var5;
                            var5 = _closure2_slot4;
                            var5 = var5.guild_id;
                            var1.guild_id = var5;
                            var5 = {};
                            var9 = _closure2_slot4;
                            var7 = var9.isPrivate;
                            var7 = var7.bind(var9)();
                            var8 = _closure1_slot14;
                            if (var7) {
                                _fun77828_ip = 103;
                                continue _fun77828
                            }
                        case 95:
                            var7 = var8.GUILD_CHANNEL;
                            _fun77828_ip = 109;
                            continue _fun77828;
                        case 103:
                            var7 = var8.DM_CHANNEL;
                        case 109:
                            var5.page = var7;
                            var10 = _closure2_slot2;
                            var11 = var5;
                            var6 = copyDataProperties(var11, var10);
                            var1.location = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var7.bind(var5)(var1, var4);
                var4 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showLongPressMessageActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var0, var1);
                var _closure2_slot9 = var0;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var28 = 16;
                var0 = var5[var28];
                var1 = var9.bind(var2)(var0);
                var0 = var1.useCanReplyToMessage;
                var33 = var0.bind(var1)(var47, var16);
                var30 = 17;
                var0 = var5[var30];
                var1 = var9.bind(var2)(var0);
                var0 = var1.useCanForwardMessage;
                var25 = var0.bind(var1)(var16);
                var4 = _closure1_slot10;
                var1 = var4.getGuild;
                var0 = var47.guild_id;
                var14 = var1.bind(var4)(var0);
                var4 = _closure1_slot1;
                var0 = 18;
                var0 = var5[var0];
                var7 = var4.bind(var2)(var0);
                var1 = var7.useExperiment;
                var0 = {};
                var8 = 'LongPressMessageActionSheet';
                var0.location = var8;
                var0 = var1.bind(var7)(var0);
                var60 = var0.enabled;
                var1 = 19;
                var0 = var5[var1];
                var10 = var9.bind(var2)(var0);
                var8 = var10.useStateFromStoresArray;
                var0 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var3
                    var4 = _closure1_slot7;
                    var3 = var4.isMessageReminder;
                    var0 = _closure2_slot4;
                    var2 = var0.id;
                    var0 = _closure2_slot3;
                    var0 = var0.id;
                    var2 = var3.bind(var4)(var2, var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = var4.isMessageBookmarked;
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var1 = _closure2_slot3;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    var0[1] = var1;
                    return var0;
                };
                var8 = var8.bind(var10)(var7, var0);
                var0 = _closure1_slot3;
                var7 = 2;
                var0 = var0.bind(var2)(var8, var7);
                var8 = 0;
                var55 = var0[var8];
                var11 = 1;
                var52 = var0[var11];
                var0 = 20;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.bind(var2)();
                var58 = !var0;
                var18 = 21;
                var0 = var5[var18];
                var9 = var9.bind(var2)(var0);
                var0 = var9.useIsNonModInLockedThread;
                var49 = var0.bind(var9)(var47);
                var0 = 22;
                var0 = var5[var0];
                var5 = var4.bind(var2)(var0);
                var0 = null;
                var9 = var0 == var47;
                var4 = undefined;
                if (var9) {
                    _fun77827_ip = 486;
                    continue _fun77827
                }
            case 481:
                var4 = var47.id;
            case 486:
                var31 = var5.bind(var2)(var4);
                var9 = _closure1_slot5;
                var5 = var9.getMessage;
                var4 = var16.id;
                var4 = var5.bind(var9)(var4);
                var19 = var0 != var4;
                var13 = var16.interactionError;
                var4 = _closure1_slot12;
                var5 = var4.EXPLICIT_CONTENT;
                var10 = _closure1_slot1;
                var4 = _closure1_slot2;
                var20 = 23;
                var9 = var4[var20];
                var9 = var10.bind(var2)(var9);
                var17 = var9.bind(var2)(var16);
                var9 = _closure1_slot0;
                var4 = var4[var18];
                var9 = var9.bind(var2)(var4);
                var4 = var9.useIsActiveChannelOrUnarchivableThread;
                var10 = var4.bind(var9)(var47);
                var _closure2_slot10 = var10;
                var9 = var0 == var42;
                var4 = undefined;
                if (var9) {
                    _fun77827_ip = 603;
                    continue _fun77827
                }
            case 593:
                var9 = var42.isNonUserBot;
                var4 = var9.bind(var42)();
            case 603:
                var51 = true;
                var45 = var51 === var4;
                var9 = _closure1_slot9;
                var4 = var9.getId;
                var41 = var4.bind(var9)();
                var9 = _closure1_slot0;
                var24 = _closure1_slot2;
                var4 = 24;
                var4 = var24[var4];
                var4 = var9.bind(var2)(var4);
                var9 = var4.DeveloperMode;
                var4 = var9.getSetting;
                var66 = var4.bind(var9)();
                var12 = _closure1_slot11;
                var9 = var12.can;
                var4 = _closure1_slot23;
                var4 = var4.MANAGE_MESSAGES;
                var12 = var9.bind(var12)(var4, var47);
                var4 = var16.author;
                var4 = var4.id;
                var4 = var4 === var41;
                var22 = var16.hasFlag;
                var9 = _closure1_slot19;
                var9 = var9.CROSSPOSTED;
                var9 = var22.bind(var16)(var9);
                var23 = _closure1_slot1;
                var22 = 25;
                var22 = var24[var22];
                var22 = var23.bind(var2)(var22);
                var37 = var22.bind(var2)(var16, var47);
                var39 = !var9;
                if (!var39) {
                    _fun77827_ip = 768;
                    continue _fun77827
                }
            case 749:
                var22 = var47.type;
                var9 = _closure1_slot15;
                var9 = var9.GUILD_ANNOUNCEMENT;
                var39 = var22 === var9;
            case 768:
                if (!var39) {
                    _fun77827_ip = 809;
                    continue _fun77827
                }
            case 771:
                var22 = var0 == var14;
                var9 = undefined;
                if (var22) {
                    _fun77827_ip = 806;
                    continue _fun77827
                }
            case 780:
                var24 = var14.features;
                var23 = var24.has;
                var22 = _closure1_slot16;
                var22 = var22.NEWS;
                var9 = var23.bind(var24)(var22);
            case 806:
                var39 = var9;
            case 809:
                if (!var39) {
                    _fun77827_ip = 821;
                    continue _fun77827
                }
            case 812:
                if (var4) {
                    _fun77827_ip = 818;
                    continue _fun77827
                }
            case 815:
                var4 = var12;
            case 818:
                var39 = var4;
            case 821:
                if (!var39) {
                    _fun77827_ip = 843;
                    continue _fun77827
                }
            case 824:
                var9 = var16.type;
                var4 = _closure1_slot21;
                var4 = var4.DEFAULT;
                var39 = var9 === var4;
            case 843:
                if (!var39) {
                    _fun77827_ip = 859;
                    continue _fun77827
                }
            case 846:
                var4 = var16.isPoll;
                var4 = var4.bind(var16)();
                var39 = !var4;
            case 859:
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var18];
                var9 = var9.bind(var2)(var4);
                var4 = var9.computeCanStartPublicThread;
                var68 = var4.bind(var9)(var47, var16);
                var4 = var16.getContentMessage;
                var9 = var4.bind(var16)();
                var4 = var9.embeds;
                var18 = var4.length;
                var4 = _closure1_slot8;
                var4 = var4.bind(var2)(var9);
                if (var4) {
                    _fun77827_ip = 928;
                    continue _fun77827
                }
            case 921:
                var4 = var9.content;
                _fun77827_ip = 965;
                continue _fun77827;
            case 928:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 26;
                var22 = var24[var22];
                var23 = var23.bind(var2)(var22);
                var22 = var23.getAllTextDisplayContent;
                var9 = var9.components;
                var4 = var22.bind(var23)(var9);
            case 965:
                var46 = var12;
                if (var46) {
                    _fun77827_ip = 982;
                    continue _fun77827
                }
            case 971:
                var9 = var16.canDeleteOwnMessage;
                var46 = var9.bind(var16)(var41);
            case 982:
                if (!var46) {
                    _fun77827_ip = 989;
                    continue _fun77827
                }
            case 985:
                var46 = var18 > var8;
            case 989:
                if (!var46) {
                    _fun77827_ip = 1011;
                    continue _fun77827
                }
            case 992:
                var9 = var16.author;
                var22 = var9.id;
                var9 = _closure1_slot17;
                var46 = var22 !== var9;
            case 1011:
                if (!var46) {
                    _fun77827_ip = 1064;
                    continue _fun77827
                }
            case 1014:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 27;
                var9 = var23[var9];
                var24 = var22.bind(var2)(var9);
                var23 = var24.hasFlag;
                var22 = var16.flags;
                var9 = _closure1_slot19;
                var9 = var9.EPHEMERAL;
                var9 = var23.bind(var24)(var22, var9);
                var46 = !var9;
            case 1064:
                if (!var46) {
                    _fun77827_ip = 1096;
                    continue _fun77827
                }
            case 1067:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var9 = 28;
                var9 = var23[var9];
                var9 = var22.bind(var2)(var9);
                var9 = var9.bind(var2)(var16);
                var46 = var9 >= var11;
            case 1096:
                var9 = !var19;
                if (var19) {
                    _fun77827_ip = 1109;
                    continue _fun77827
                }
            case 1102:
                var5 = var13 === var5;
                var9 = !var5;
            case 1109:
                if (!var9) {
                    _fun77827_ip = 1165;
                    continue _fun77827
                }
            case 1112:
                var5 = var16.interactionData;
                var5 = var0 == var5;
                if (var5) {
                    _fun77827_ip = 1162;
                    continue _fun77827
                }
            case 1125:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = 29;
                var13 = var22[var13];
                var22 = var19.bind(var2)(var13);
                var19 = var22.canRetryInteractionData;
                var13 = var16.interactionData;
                var5 = var19.bind(var22)(var13);
            case 1162:
                var9 = var5;
            case 1165:
                var19 = var16.attachments;
                var13 = var19.filter;
                var5 = function(arg0) { // Environment: var3
                    _fun77831: for (var _fun77831_ip = 0;;) switch (_fun77831_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.flags;
                            var0 = null;
                            var0 = var0 == var1;
                            if (var0) {
                                _fun77831_ip = 72;
                                continue _fun77831
                            }
                        case 17:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 27;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.hasFlag;
                            var2 = var2.flags;
                            var1 = _closure1_slot18;
                            var1 = var1.IS_THUMBNAIL;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 72:
                            return var0;
                    }
                };
                var5 = var13.bind(var19)(var5);
                var13 = var16.author;
                var13 = var13.id;
                var24 = var13 === var41;
                if (!var24) {
                    _fun77827_ip = 1234;
                    continue _fun77827
                }
            case 1206:
                var5 = var5.length;
                var5 = var5 > var11;
                if (var5) {
                    _fun77827_ip = 1231;
                    continue _fun77827
                }
            case 1218:
                var19 = var16.content;
                var13 = '';
                var5 = var13 !== var19;
            case 1231:
                var24 = var5;
            case 1234:
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = var13[var1];
                var23 = var5.bind(var2)(var1);
                var22 = var23.useStateFromStores;
                var1 = _closure1_slot6;
                var19 = new Array(1);
                var19[0] = var1;
                var1 = function() { // Environment: var3
                    var3 = _closure1_slot6;
                    var2 = var3.hasReportedMessage;
                    var1 = _closure2_slot3;
                    var1 = var1.channel_id;
                    var0 = _closure2_slot3;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var26 = var22.bind(var23)(var19, var1);
                var1 = 30;
                var1 = var13[var1];
                var13 = var5.bind(var2)(var1);
                var5 = var13.useIsReportToModEnabled;
                var19 = var0 == var14;
                var1 = undefined;
                if (var19) {
                    _fun77827_ip = 1313;
                    continue _fun77827
                }
            case 1308:
                var1 = var14.id;
            case 1313:
                var61 = var5.bind(var13)(var1);
                var5 = function(arg0) { // Original name: getProps, environment: var3
                    var0 = arg0;
                    var7 = var0.arrow;
                    var11 = var0.IconComponent;
                    var6 = var0.label;
                    var _closure3_slot0 = var6;
                    var4 = var0.section;
                    var3 = var0.sortKey;
                    var1 = var0.onActionExecuted;
                    var _closure3_slot1 = var1;
                    var2 = var0.variant;
                    var1 = var0.disabled;
                    var _closure3_slot2 = var1;
                    var0 = {};
                    var0.arrow = var7;
                    var10 = _closure1_slot24;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 31;
                    var7 = var9[var7];
                    var9 = undefined;
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ActionSheetRow;
                    var8 = var7.Icon;
                    var7 = {};
                    var7.IconComponent = var11;
                    var7 = var10.bind(var9)(var8, var7);
                    var0.icon = var7;
                    var0.label = var6;
                    var5 = function() { // Original name: onPress, environment: var5
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 32;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.longPressMessageOptionHandler;
                        var1 = {};
                        var3 = _closure2_slot7;
                        var1.actionSheetSource = var3;
                        var3 = _closure2_slot1;
                        var1.analyticsLocations = var3;
                        var3 = _closure2_slot4;
                        var1.channel = var3;
                        var3 = _closure2_slot5;
                        var1.chatInputRef = var3;
                        var5 = _closure3_slot0;
                        var1.label = var5;
                        var5 = _closure2_slot3;
                        var1.message = var5;
                        var5 = _closure2_slot9;
                        var1.onBack = var5;
                        var5 = _closure3_slot1;
                        var1.onActionExecuted = var5;
                        var4 = _closure2_slot6;
                        var1.selectedMedia = var4;
                        var3 = _closure3_slot2;
                        var1.disabled = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var5;
                    var0.section = var4;
                    var0.sortKey = var3;
                    var0.variant = var2;
                    var0.disabled = var1;
                    return var0;
                };
                var1 = function(arg0) { // Original name: render, environment: var3
                    _fun77835: for (var _fun77835_ip = 0;;) switch (_fun77835_ip) {
                        case 0:
                            var9 = arg0;
                            var3 = _closure1_slot24;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 12;
                            var0 = var10[var0];
                            var2 = undefined;
                            var0 = var8.bind(var2)(var0);
                            var1 = var0.AnalyticsLocationProvider;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var0.value = var4;
                            var4 = 33;
                            var4 = var10[var4];
                            var4 = var8.bind(var2)(var4);
                            var5 = var4.ActionSheet;
                            var4 = {};
                            var6 = true;
                            var4.showGradient = var6;
                            var6 = 34;
                            var6 = var10[var6];
                            var12 = var8.bind(var2)(var6);
                            var6 = var12.isMetaQuest;
                            var6 = var6.bind(var12)();
                            var4.startExpanded = var6;
                            var6 = 35;
                            var6 = var10[var6];
                            var13 = var8.bind(var2)(var6);
                            var12 = var13.shouldShowEmojiRow;
                            var10 = _closure2_slot8;
                            var8 = _closure2_slot3;
                            var6 = _closure2_slot10;
                            var6 = var12.bind(var13)(var10, var8, var6);
                            if (!var6) {
                                _fun77835_ip = 193;
                                continue _fun77835
                            }
                        case 145:
                            var10 = _closure1_slot24;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var7 = 36;
                            var7 = var12[var7];
                            var8 = var8.bind(var2)(var7);
                            var7 = {};
                            var12 = _closure2_slot3;
                            var7.message = var12;
                            var11 = _closure2_slot4;
                            var7.channel = var11;
                            var6 = var10.bind(var2)(var8, var7);
                        case 193:
                            var4.header = var6;
                            var6 = null;
                            var7 = var6 == var9;
                            var6 = undefined;
                            if (var7) {
                                _fun77835_ip = 227;
                                continue _fun77835
                            }
                        case 208:
                            var8 = var9.map;
                            var7 = function(arg0, arg1) { // Environment: var7
                                var6 = arg0;
                                var4 = _closure1_slot24;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 31;
                                var0 = var2[var0];
                                var3 = undefined;
                                var0 = var1.bind(var3)(var0);
                                var0 = var0.ActionSheetRow;
                                var2 = var0.Group;
                                var1 = {};
                                var5 = var6.map;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var0 = arg0;
                                    var9 = var0.icon;
                                    var8 = var0.arrow;
                                    var7 = var0.label;
                                    var6 = var0.onPress;
                                    var5 = var0.variant;
                                    var0 = var0.disabled;
                                    var4 = _closure1_slot24;
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 31;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = var1.ActionSheetRow;
                                    var1 = {};
                                    var1.icon = var9;
                                    var1.arrow = var8;
                                    var1.label = var7;
                                    var1.onPress = var6;
                                    var1.variant = var5;
                                    var1.disabled = var0;
                                    var0 = arg1;
                                    var0 = var4.bind(var3)(var2, var1, var0);
                                    return var0;
                                };
                                var0 = var5.bind(var6)(var0);
                                var1.children = var0;
                                var0 = arg1;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var6 = var8.bind(var9)(var7);
                        case 227:
                            var4.children = var6;
                            var4 = var3.bind(var2)(var5, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var14 = var16.state;
                var13 = _closure1_slot20;
                var13 = var13.SEND_FAILED;
                if (!(var14 !== var13)) {
                    _fun77827_ip = 6479;
                    continue _fun77827
                }
            case 1354:
                var14 = var16.type;
                var13 = _closure1_slot21;
                var13 = var13.THREAD_STARTER_MESSAGE;
                if (!(var14 !== var13)) {
                    _fun77827_ip = 6349;
                    continue _fun77827
                }
            case 1376:
                var13 = {};
                var63 = _closure1_slot0;
                var64 = _closure1_slot2;
                var77 = 37;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.fsBWmS;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var14 = 42;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.PencilIcon;
                var13.IconComponent = var14;
                var50 = _closure1_slot25;
                var14 = var50.PRIMARY;
                var13.section = var14;
                var13.sortKey = var11;
                var48 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14["5IEsGx"];
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var14 = 43;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.ArrowAngleLeftUpIcon;
                var13.IconComponent = var14;
                var14 = var50.PRIMARY;
                var13.section = var14;
                var13.sortKey = var7;
                var34 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.I3ltXO;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var19 = _closure1_slot1;
                var14 = 44;
                var14 = var64[var14];
                var14 = var19.bind(var2)(var14);
                var13.IconComponent = var14;
                var14 = var50.PRIMARY;
                var13.section = var14;
                var14 = 3;
                var13.sortKey = var14;
                var32 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.rBIGBL;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var19 = 45;
                var14 = var64[var19];
                var14 = var63.bind(var2)(var14);
                var14 = var14.ThreadIcon;
                var13.IconComponent = var14;
                var14 = var50.PRIMARY;
                var13.section = var14;
                var14 = 4;
                var13.sortKey = var14;
                var70 = var5.bind(var2)(var13);
                var13 = {};
                var22 = var64[var77];
                var22 = var63.bind(var2)(var22);
                var29 = var22.intl;
                var23 = var29.string;
                var22 = var64[var77];
                var22 = var63.bind(var2)(var22);
                var22 = var22.t;
                var22 = var22["39d0Wj"];
                var22 = var23.bind(var29)(var22);
                var13.label = var22;
                var19 = var64[var19];
                var19 = var63.bind(var2)(var19);
                var19 = var19.ThreadIcon;
                var13.IconComponent = var19;
                var19 = var50.GENERAL;
                var13.section = var19;
                var13.sortKey = var14;
                var71 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.JrGD7E;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var14 = 39;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.CopyIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 5;
                var13.sortKey = var14;
                var36 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.RpE9k7;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var14 = 46;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.ChatMarkUnreadIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 6;
                var13.sortKey = var14;
                var62 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var22 = var14.intl;
                var19 = var22.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.grdwwt;
                var14 = var19.bind(var22)(var14);
                var13.label = var14;
                var14 = 47;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.ClockXIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 7;
                var13.sortKey = var14;
                var19 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var23 = var14.intl;
                var22 = var23.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.gHp0C4;
                var14 = var22.bind(var23)(var14);
                var13.label = var14;
                var14 = 48;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.ReactionIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 8;
                var13.sortKey = var14;
                var22 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var29 = var14.intl;
                var23 = var29.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.MFGE51;
                var14 = var23.bind(var29)(var14);
                var13.label = var14;
                var14 = 49;
                var14 = var64[var14];
                var14 = var63.bind(var2)(var14);
                var14 = var14.AnnouncementsIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 9;
                var13.sortKey = var14;
                var44 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var29 = var14.intl;
                var23 = var29.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.CvQ18w;
                var14 = var23.bind(var29)(var14);
                var13.label = var14;
                var67 = 50;
                var14 = var64[var67];
                var14 = var63.bind(var2)(var14);
                var14 = var14.PinIcon;
                var13.IconComponent = var14;
                var14 = var50.GENERAL;
                var13.section = var14;
                var14 = 10;
                var13.sortKey = var14;
                var35 = var5.bind(var2)(var13);
                var13 = {};
                var23 = var64[var77];
                var23 = var63.bind(var2)(var23);
                var38 = var23.intl;
                var29 = var38.string;
                var23 = var64[var77];
                var23 = var63.bind(var2)(var23);
                var23 = var23.t;
                var23 = var23["Bse+F/"];
                var23 = var29.bind(var38)(var23);
                var13.label = var23;
                var23 = var64[var67];
                var23 = var63.bind(var2)(var23);
                var23 = var23.PinIcon;
                var13.IconComponent = var23;
                var23 = var50.GENERAL;
                var13.section = var23;
                var13.sortKey = var14;
                var38 = var5.bind(var2)(var13);
                var13 = {};
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var29 = var14.intl;
                var23 = var29.string;
                var14 = var64[var77];
                var14 = var63.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.tpxJto;
                var14 = var23.bind(var29)(var14);
                var13.label = var14;
                var14 = 51;
                var23 = var64[var14];
                var23 = var63.bind(var2)(var23);
                var23 = var23.NitroWheelIcon;
                var13.IconComponent = var23;
                var23 = var50.GENERAL;
                var13.section = var23;
                var29 = 11;
                var13.sortKey = var29;
                var59 = var5.bind(var2)(var13);
                var13 = {};
                var23 = var64[var77];
                var23 = var63.bind(var2)(var23);
                var43 = var23.intl;
                var40 = var43.string;
                var23 = var64[var77];
                var23 = var63.bind(var2)(var23);
                var23 = var23.t;
                var23 = var23.tpxJto;
                var23 = var40.bind(var43)(var23);
                var13.label = var23;
                var23 = 52;
                var40 = var64[var23];
                var40 = var63.bind(var2)(var40);
                var40 = var40.BookmarkOutlineIcon;
                var13.IconComponent = var40;
                var40 = var50.GENERAL;
                var13.section = var40;
                var13.sortKey = var29;
                var57 = var5.bind(var2)(var13);
                var13 = {};
                var40 = var64[var77];
                var40 = var63.bind(var2)(var40);
                var53 = var40.intl;
                var43 = var53.string;
                var40 = var64[var77];
                var40 = var63.bind(var2)(var40);
                var40 = var40.t;
                var40 = var40.SvXS1Z;
                var40 = var43.bind(var53)(var40);
                var13.label = var40;
                var40 = 53;
                var40 = var64[var40];
                var40 = var63.bind(var2)(var40);
                var40 = var40.BookmarkIcon;
                var13.IconComponent = var40;
                var40 = var50.GENERAL;
                var13.section = var40;
                var13.sortKey = var29;
                var56 = var5.bind(var2)(var13);
                var13 = {};
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var43 = var29.intl;
                var40 = var43.string;
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var29 = var29.t;
                var29 = var29.mJ3P0N;
                var29 = var40.bind(var43)(var29);
                var13.label = var29;
                var65 = 54;
                var29 = var64[var65];
                var29 = var63.bind(var2)(var29);
                var29 = var29.ClockIcon;
                var13.IconComponent = var29;
                var13.arrow = var51;
                var29 = var50.GENERAL;
                var13.section = var29;
                var13.sortKey = var27;
                var54 = var5.bind(var2)(var13);
                var13 = {};
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var43 = var29.intl;
                var40 = var43.string;
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var29 = var29.t;
                var29 = var29.vrbqs1;
                var29 = var40.bind(var43)(var29);
                var13.label = var29;
                var29 = var64[var65];
                var29 = var63.bind(var2)(var29);
                var29 = var29.ClockIcon;
                var13.IconComponent = var29;
                var13.arrow = var51;
                var29 = var50.GENERAL;
                var13.section = var29;
                var13.sortKey = var27;
                var53 = var5.bind(var2)(var13);
                var13 = {};
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var40 = var27.intl;
                var29 = var40.string;
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var27 = var27.t;
                var27 = var27.PHjkRE;
                var27 = var29.bind(var40)(var27);
                var13.label = var27;
                var27 = 55;
                var27 = var64[var27];
                var27 = var63.bind(var2)(var27);
                var27 = var27.RobotIcon;
                var13.IconComponent = var27;
                var13.arrow = var51;
                var27 = var50.GENERAL;
                var13.section = var27;
                var13.sortKey = var15;
                var15 = var5.bind(var2)(var13);
                var13 = {};
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var40 = var27.intl;
                var29 = var40.string;
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var27 = var27.t;
                var27 = var27["g33r/P"];
                var27 = var29.bind(var40)(var27);
                var13.label = var27;
                var27 = 56;
                var27 = var64[var27];
                var27 = var63.bind(var2)(var27);
                var27 = var27.ChatIcon;
                var13.IconComponent = var27;
                var27 = var50.GENERAL;
                var13.section = var27;
                var27 = 14;
                var13.sortKey = var27;
                var40 = var5.bind(var2)(var13);
                var13 = {};
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var43 = var27.intl;
                var29 = var43.string;
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var27 = var27.t;
                var27 = var27.P8tvKG;
                var27 = var29.bind(var43)(var27);
                var13.label = var27;
                var27 = 57;
                var27 = var64[var27];
                var27 = var63.bind(var2)(var27);
                var27 = var27.AtIcon;
                var13.IconComponent = var27;
                var27 = var50.GENERAL;
                var13.section = var27;
                var27 = 15;
                var13.sortKey = var27;
                var43 = var5.bind(var2)(var13);
                var13 = {};
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var69 = var27.intl;
                var29 = var69.string;
                var27 = var64[var77];
                var27 = var63.bind(var2)(var27);
                var27 = var27.t;
                var27 = var27["S/xNKV"];
                var27 = var29.bind(var69)(var27);
                var13.label = var27;
                var69 = 58;
                var27 = var64[var69];
                var27 = var63.bind(var2)(var27);
                var27 = var27.DownloadIcon;
                var13.IconComponent = var27;
                var27 = var50.GENERAL;
                var13.section = var27;
                var13.sortKey = var28;
                var27 = var5.bind(var2)(var13);
                var13 = {};
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var74 = var29.intl;
                var73 = var74.string;
                var29 = var64[var77];
                var29 = var63.bind(var2)(var29);
                var29 = var29.t;
                var29 = var29.JVuuz3;
                var29 = var73.bind(var74)(var29);
                var13.label = var29;
                var29 = var64[var69];
                var29 = var63.bind(var2)(var29);
                var29 = var29.DownloadIcon;
                var13.IconComponent = var29;
                var29 = var50.GENERAL;
                var13.section = var29;
                var13.sortKey = var28;
                var29 = var5.bind(var2)(var13);
                var13 = {};
                var73 = var64[var77];
                var73 = var63.bind(var2)(var73);
                var75 = var73.intl;
                var74 = var75.string;
                var73 = var64[var77];
                var73 = var63.bind(var2)(var73);
                var73 = var73.t;
                var73 = var73.vbAEaA;
                var73 = var74.bind(var75)(var73);
                var13.label = var73;
                var69 = var64[var69];
                var69 = var63.bind(var2)(var69);
                var69 = var69.DownloadIcon;
                var13.IconComponent = var69;
                var69 = var50.GENERAL;
                var13.section = var69;
                var13.sortKey = var28;
                var28 = var5.bind(var2)(var13);
                var13 = {};
                var69 = var64[var77];
                var69 = var63.bind(var2)(var69);
                var74 = var69.intl;
                var73 = var74.string;
                var69 = var64[var77];
                var69 = var63.bind(var2)(var69);
                var69 = var69.t;
                var69 = var69["92CPQ+"];
                var69 = var73.bind(var74)(var69);
                var13.label = var69;
                var69 = 41;
                var73 = var64[var69];
                var73 = var63.bind(var2)(var73);
                var73 = var73.LinkIcon;
                var13.IconComponent = var73;
                var73 = var50.GENERAL;
                var13.section = var73;
                var13.sortKey = var30;
                var30 = var5.bind(var2)(var13);
                var13 = {};
                var73 = var64[var77];
                var73 = var63.bind(var2)(var73);
                var75 = var73.intl;
                var74 = var75.string;
                var73 = var64[var77];
                var73 = var63.bind(var2)(var73);
                var73 = var73.t;
                var73 = var73.Xrt5Po;
                var73 = var74.bind(var75)(var73);
                var13.label = var73;
                var69 = var64[var69];
                var69 = var63.bind(var2)(var69);
                var69 = var69.LinkIcon;
                var13.IconComponent = var69;
                var69 = var50.GENERAL;
                var13.section = var69;
                var13.sortKey = var67;
                var69 = var5.bind(var2)(var13);
                var13 = {};
                var67 = var64[var77];
                var67 = var63.bind(var2)(var67);
                var74 = var67.intl;
                var73 = var74.string;
                var67 = var64[var77];
                var67 = var63.bind(var2)(var67);
                var67 = var67.t;
                var67 = var67.Rjezbz;
                var67 = var73.bind(var74)(var67);
                var13.label = var67;
                var65 = var64[var65];
                var65 = var63.bind(var2)(var65);
                var65 = var65.ClockIcon;
                var13.IconComponent = var65;
                var13.arrow = var51;
                var51 = var50.GENERAL;
                var13.section = var51;
                var13.sortKey = var14;
                var13 = var5.bind(var2)(var13);
                var14 = {};
                var51 = var64[var77];
                var51 = var63.bind(var2)(var51);
                var67 = var51.intl;
                var65 = var67.string;
                var51 = var64[var77];
                var51 = var63.bind(var2)(var51);
                var51 = var51.t;
                var51 = var51.zBoHlf;
                var51 = var65.bind(var67)(var51);
                var14.label = var51;
                var51 = 59;
                var51 = var64[var51];
                var51 = var63.bind(var2)(var51);
                var51 = var51.IdIcon;
                var14.IconComponent = var51;
                var50 = var50.GENERAL;
                var14.section = var50;
                var14.sortKey = var23;
                var67 = var5.bind(var2)(var14);
                var14 = {};
                if (!(!(var18 > var11))) {
                    _fun77827_ip = 3965;
                    continue _fun77827
                }
            case 3911:
                var51 = _closure1_slot0;
                var18 = _closure1_slot2;
                var23 = var18[var77];
                var23 = var51.bind(var2)(var23);
                var50 = var23.intl;
                var23 = var50.string;
                var18 = var18[var77];
                var18 = var51.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18["4sxKOb"];
                var18 = var23.bind(var50)(var18);
                _fun77827_ip = 4017;
                continue _fun77827;
            case 3965:
                var63 = _closure1_slot0;
                var23 = _closure1_slot2;
                var50 = var23[var77];
                var50 = var63.bind(var2)(var50);
                var51 = var50.intl;
                var50 = var51.string;
                var23 = var23[var77];
                var23 = var63.bind(var2)(var23);
                var23 = var23.t;
                var23 = var23.wUIMqa;
                var18 = var50.bind(var51)(var23);
            case 4017:
                var14.label = var18;
                var75 = _closure1_slot0;
                var76 = _closure1_slot2;
                var18 = 60;
                var18 = var76[var18];
                var18 = var75.bind(var2)(var18);
                var18 = var18.XSmallBoldIcon;
                var14.IconComponent = var18;
                var73 = 'danger';
                var14.variant = var73;
                var50 = _closure1_slot25;
                var18 = var50.DESTRUCTIVE;
                var14.section = var18;
                var18 = 98;
                var14.sortKey = var18;
                var51 = var5.bind(var2)(var14);
                var14 = {};
                var18 = var76[var77];
                var18 = var75.bind(var2)(var18);
                var63 = var18.intl;
                var23 = var63.string;
                var18 = var76[var77];
                var18 = var75.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18.ZbtGBm;
                var18 = var23.bind(var63)(var18);
                var14.label = var18;
                var74 = 40;
                var18 = var76[var74];
                var18 = var75.bind(var2)(var18);
                var18 = var18.TrashIcon;
                var14.IconComponent = var18;
                var14.variant = var73;
                var18 = var50.DESTRUCTIVE;
                var14.section = var18;
                var18 = 99;
                var14.sortKey = var18;
                var18 = var5.bind(var2)(var14);
                var14 = {};
                var23 = var76[var77];
                var23 = var75.bind(var2)(var23);
                var64 = var23.intl;
                var63 = var64.string;
                var23 = var76[var77];
                var23 = var75.bind(var2)(var23);
                var23 = var23.t;
                var23 = var23.kFwAsa;
                var23 = var63.bind(var64)(var23);
                var14.label = var23;
                var23 = var76[var74];
                var23 = var75.bind(var2)(var23);
                var23 = var23.TrashIcon;
                var14.IconComponent = var23;
                var14.variant = var73;
                var23 = var50.DESTRUCTIVE;
                var14.section = var23;
                var23 = 100;
                var14.sortKey = var23;
                var23 = var5.bind(var2)(var14);
                var14 = {};
                var63 = var76[var77];
                var63 = var75.bind(var2)(var63);
                var65 = var63.intl;
                var64 = var65.string;
                var63 = var76[var77];
                var63 = var75.bind(var2)(var63);
                var63 = var63.t;
                var63 = var63["+78Pfm"];
                var63 = var64.bind(var65)(var63);
                var14.label = var63;
                var63 = 61;
                var64 = var76[var63];
                var64 = var75.bind(var2)(var64);
                var64 = var64.FlagIcon;
                var14.IconComponent = var64;
                var14.variant = var73;
                var64 = var50.DESTRUCTIVE;
                var14.section = var64;
                var64 = 101;
                var14.sortKey = var64;
                var65 = var5.bind(var2)(var14);
                var14 = {};
                var78 = var76[var77];
                var78 = var75.bind(var2)(var78);
                var80 = var78.intl;
                var79 = var80.string;
                var78 = var76[var77];
                var78 = var75.bind(var2)(var78);
                var78 = var78.t;
                var78 = var78.n5EBAJ;
                var78 = var79.bind(var80)(var78);
                var14.label = var78;
                var14.variant = var73;
                var78 = 62;
                var78 = var76[var78];
                var78 = var75.bind(var2)(var78);
                var78 = var78.ClydeIcon;
                var14.IconComponent = var78;
                var78 = var50.DESTRUCTIVE;
                var14.section = var78;
                var14.sortKey = var64;
                var64 = var5.bind(var2)(var14);
                var14 = {};
                var78 = var76[var77];
                var78 = var75.bind(var2)(var78);
                var80 = var78.intl;
                var79 = var80.string;
                var81 = _closure1_slot1;
                var78 = 63;
                var78 = var76[var78];
                var78 = var81.bind(var2)(var78);
                var78 = var78["1D+vqy"];
                var78 = var79.bind(var80)(var78);
                var14.label = var78;
                var63 = var76[var63];
                var63 = var75.bind(var2)(var63);
                var63 = var63.FlagIcon;
                var14.IconComponent = var63;
                var63 = var50.DESTRUCTIVE;
                var14.section = var63;
                var63 = 102;
                var14.sortKey = var63;
                var14.disabled = var26;
                var63 = var5.bind(var2)(var14);
                var14 = {};
                var26 = var76[var77];
                var26 = var75.bind(var2)(var26);
                var79 = var26.intl;
                var78 = var79.string;
                var26 = var76[var77];
                var26 = var75.bind(var2)(var26);
                var26 = var26.t;
                var26 = var26.ZH7P2h;
                var26 = var78.bind(var79)(var26);
                var14.label = var26;
                var26 = 64;
                var26 = var76[var26];
                var26 = var75.bind(var2)(var26);
                var26 = var26.ImageWarningIcon;
                var14.IconComponent = var26;
                var26 = var50.DESTRUCTIVE;
                var14.section = var26;
                var26 = 103;
                var14.sortKey = var26;
                var26 = var5.bind(var2)(var14);
                var14 = {};
                var78 = var76[var77];
                var78 = var75.bind(var2)(var78);
                var79 = var78.intl;
                var78 = var79.string;
                var77 = var76[var77];
                var77 = var75.bind(var2)(var77);
                var77 = var77.t;
                var77 = var77.xwMqD7;
                var77 = var78.bind(var79)(var77);
                var14.label = var77;
                var74 = var76[var74];
                var74 = var75.bind(var2)(var74);
                var74 = var74.TrashIcon;
                var14.IconComponent = var74;
                var14.variant = var73;
                var50 = var50.DESTRUCTIVE;
                var14.section = var50;
                var50 = 110;
                var14.sortKey = var50;
                var50 = var5.bind(var2)(var14);
                var73 = new Array(0);
                var14 = 'Preview';
                var14 = var14 === var72;
                if (var14) {
                    _fun77827_ip = 4827;
                    continue _fun77827
                }
            case 4780:
                var74 = _closure1_slot0;
                var75 = _closure1_slot2;
                var72 = 27;
                var72 = var75[var72];
                var76 = var74.bind(var2)(var72);
                var75 = var76.hasFlag;
                var74 = var16.flags;
                var72 = _closure1_slot19;
                var72 = var72.EPHEMERAL;
                var14 = var75.bind(var76)(var74, var72);
            case 4827:
                if (!var14) {
                    _fun77827_ip = 4887;
                    continue _fun77827
                }
            case 4830:
                var14 = var73.push;
                var97 = var73;
                var96 = var70;
                var95 = var62;
                var94 = var57;
                var93 = var56;
                var92 = var59;
                var91 = var54;
                var90 = var53;
                var89 = var51;
                var88 = var50;
                var87 = var48;
                var86 = var43;
                var85 = var40;
                var84 = var34;
                var83 = var15;
                var82 = var18;
                var14 = var97[var14](var96, var95, var94, var93, var92, var91, var90, var89, var88, var87, var86, var85, var84, var83, var82, var81);
            case 4887:
                if (!var10) {
                    _fun77827_ip = 4940;
                    continue _fun77827
                }
            case 4890:
                var72 = _closure1_slot0;
                var74 = _closure1_slot2;
                var14 = 27;
                var14 = var74[var14];
                var75 = var72.bind(var2)(var14);
                var74 = var75.hasFlag;
                var72 = var16.flags;
                var14 = _closure1_slot19;
                var14 = var14.EPHEMERAL;
                var14 = var74.bind(var75)(var72, var14);
                var10 = !var14;
            case 4940:
                if (var10) {
                    _fun77827_ip = 4991;
                    continue _fun77827
                }
            case 4943:
                var10 = var73.push;
                var97 = var73;
                var96 = var48;
                var95 = var34;
                var94 = var51;
                var93 = var23;
                var92 = var50;
                var91 = var44;
                var90 = var35;
                var89 = var38;
                var88 = var62;
                var87 = var43;
                var86 = var15;
                var85 = var18;
                var10 = var97[var10](var96, var95, var94, var93, var92, var91, var90, var89, var88, var87, var86, var85, var84);
            case 4991:
                var14 = _closure1_slot0;
                var72 = _closure1_slot2;
                var10 = 27;
                var10 = var72[var10];
                var74 = var14.bind(var2)(var10);
                var72 = var74.hasFlag;
                var14 = var16.flags;
                var10 = _closure1_slot19;
                var10 = var10.EPHEMERAL;
                var10 = var72.bind(var74)(var14, var10);
                if (!var10) {
                    _fun77827_ip = 5068;
                    continue _fun77827
                }
            case 5041:
                var10 = var73.push;
                var97 = var73;
                var96 = var32;
                var95 = var69;
                var94 = var65;
                var93 = var64;
                var92 = var63;
                var10 = var97[var10](var96, var95, var94, var93, var92, var91);
            case 5068:
                var10 = global;
                var14 = var10.Set;
                var72 = var14.prototype;
                var72 = Object.create(var72, {
                    constructor: {
                        value: var14
                    }
                });
                var97 = var72;
                var96 = var73;
                var14 = new var97[var14](var96, var95);
                var14 = var14 instanceof Object ? var14 : var72;
                var _closure2_slot11 = var14;
                var14 = new Array(0);
                if (var68) {
                    _fun77827_ip = 5147;
                    continue _fun77827
                }
            case 5110:
                var72 = var16.hasFlag;
                var68 = _closure1_slot19;
                var68 = var68.HAS_THREAD;
                var68 = var72.bind(var16)(var68);
                if (!var68) {
                    _fun77827_ip = 5158;
                    continue _fun77827
                }
            case 5134:
                var68 = var14.unshift;
                var68 = var68.bind(var14)(var71);
                _fun77827_ip = 5158;
                continue _fun77827;
            case 5147:
                var68 = var14.unshift;
                var68 = var68.bind(var14)(var70);
            case 5158:
                var68 = var14.unshift;
                var68 = var68.bind(var14)(var69);
                if (!var66) {
                    _fun77827_ip = 5183;
                    continue _fun77827
                }
            case 5172:
                var66 = var14.unshift;
                var66 = var66.bind(var14)(var67);
            case 5183:
                if (!var61) {
                    _fun77827_ip = 5220;
                    continue _fun77827
                }
            case 5186:
                var66 = _closure1_slot0;
                var67 = _closure1_slot2;
                var61 = 65;
                var61 = var67[var61];
                var66 = var66.bind(var2)(var61);
                var61 = var66.canReportMessageToMods;
                var61 = var61.bind(var66)(var16);
                if (var61) {
                    _fun77827_ip = 5308;
                    continue _fun77827
                }
            case 5220:
                var61 = var0 != var42;
                if (!var61) {
                    _fun77827_ip = 5258;
                    continue _fun77827
                }
            case 5227:
                var67 = _closure1_slot0;
                var68 = _closure1_slot2;
                var66 = 66;
                var66 = var68[var66];
                var67 = var67.bind(var2)(var66);
                var66 = var67.canReportUser;
                var61 = var66.bind(var67)(var42);
            case 5258:
                if (!var61) {
                    _fun77827_ip = 5292;
                    continue _fun77827
                }
            case 5261:
                var67 = _closure1_slot0;
                var68 = _closure1_slot2;
                var66 = 66;
                var66 = var68[var66];
                var67 = var67.bind(var2)(var66);
                var66 = var67.canReportMessage;
                var61 = var66.bind(var67)(var16);
            case 5292:
                if (!var61) {
                    _fun77827_ip = 5330;
                    continue _fun77827
                }
            case 5295:
                var61 = var14.unshift;
                var61 = var61.bind(var14)(var65);
                _fun77827_ip = 5330;
                continue _fun77827;
            case 5308:
                var61 = var14.unshift;
                var61 = var61.bind(var14)(var64);
                var61 = var14.unshift;
                var61 = var61.bind(var14)(var63);
            case 5330:
                var61 = var14.unshift;
                var61 = var61.bind(var14)(var62);
                if (!var60) {
                    _fun77827_ip = 5417;
                    continue _fun77827
                }
            case 5344:
                if (!var58) {
                    _fun77827_ip = 5366;
                    continue _fun77827
                }
            case 5347:
                if (var52) {
                    _fun77827_ip = 5366;
                    continue _fun77827
                }
            case 5350:
                if (var55) {
                    _fun77827_ip = 5366;
                    continue _fun77827
                }
            case 5353:
                var58 = var14.unshift;
                var58 = var58.bind(var14)(var59);
                _fun77827_ip = 5417;
                continue _fun77827;
            case 5366:
                if (var52) {
                    _fun77827_ip = 5385;
                    continue _fun77827
                }
            case 5369:
                if (var55) {
                    _fun77827_ip = 5385;
                    continue _fun77827
                }
            case 5372:
                var52 = var14.unshift;
                var52 = var52.bind(var14)(var57);
                _fun77827_ip = 5396;
                continue _fun77827;
            case 5385:
                var52 = var14.unshift;
                var52 = var52.bind(var14)(var56);
            case 5396:
                var52 = var14.unshift;
                if (var55) {
                    _fun77827_ip = 5412;
                    continue _fun77827
                }
            case 5405:
                var54 = var52.bind(var14)(var54);
                _fun77827_ip = 5417;
                continue _fun77827;
            case 5412:
                var52 = var52.bind(var14)(var53);
            case 5417:
                if (!var46) {
                    _fun77827_ip = 5431;
                    continue _fun77827
                }
            case 5420:
                var46 = var14.unshift;
                var46 = var46.bind(var14)(var51);
            case 5431:
                var46 = !var12;
                if (!var46) {
                    _fun77827_ip = 5451;
                    continue _fun77827
                }
            case 5437:
                var51 = var16.canDeleteOwnMessage;
                var51 = var51.bind(var16)(var41);
                var46 = !var51;
            case 5451:
                if (var46) {
                    _fun77827_ip = 5479;
                    continue _fun77827
                }
            case 5454:
                var51 = _closure1_slot22;
                var53 = var51.UNDELETABLE;
                var52 = var53.has;
                var51 = var16.type;
                var46 = var52.bind(var53)(var51);
            case 5479:
                if (var46) {
                    _fun77827_ip = 5493;
                    continue _fun77827
                }
            case 5482:
                var46 = var14.unshift;
                var46 = var46.bind(var14)(var50);
            case 5493:
                var50 = _closure1_slot1;
                var51 = _closure1_slot2;
                var46 = 67;
                var46 = var51[var46];
                var46 = var50.bind(var2)(var46);
                var46 = var46.bind(var2)(var16, var41);
                if (!var46) {
                    _fun77827_ip = 5525;
                    continue _fun77827
                }
            case 5522:
                var46 = !var49;
            case 5525:
                if (!var46) {
                    _fun77827_ip = 5539;
                    continue _fun77827
                }
            case 5528:
                var46 = var14.unshift;
                var46 = var46.bind(var14)(var48);
            case 5539:
                if (!var39) {
                    _fun77827_ip = 5553;
                    continue _fun77827
                }
            case 5542:
                var39 = var14.unshift;
                var39 = var39.bind(var14)(var44);
            case 5553:
                var44 = var47.type;
                var39 = _closure1_slot15;
                var39 = var39.GROUP_DM;
                var44 = var44 === var39;
                var39 = var47.isPrivate;
                var39 = var39.bind(var47)();
                if (!var39) {
                    _fun77827_ip = 5588;
                    continue _fun77827
                }
            case 5585:
                var39 = !var44;
            case 5588:
                if (var39) {
                    _fun77827_ip = 5594;
                    continue _fun77827
                }
            case 5591:
                var39 = var45;
            case 5594:
                if (var39) {
                    _fun77827_ip = 5672;
                    continue _fun77827
                }
            case 5597:
                var46 = _closure1_slot11;
                var45 = var46.can;
                var39 = _closure1_slot23;
                var39 = var39.SEND_MESSAGES;
                var39 = var45.bind(var46)(var39, var47);
                if (var39) {
                    _fun77827_ip = 5629;
                    continue _fun77827
                }
            case 5626:
                var39 = var44;
            case 5629:
                if (!var39) {
                    _fun77827_ip = 5643;
                    continue _fun77827
                }
            case 5632:
                var39 = var14.unshift;
                var39 = var39.bind(var14)(var43);
            case 5643:
                var43 = var0 == var42;
                var39 = undefined;
                if (var43) {
                    _fun77827_ip = 5657;
                    continue _fun77827
                }
            case 5652:
                var39 = var42.id;
            case 5657:
                if (!(var41 !== var39)) {
                    _fun77827_ip = 5672;
                    continue _fun77827
                }
            case 5661:
                var39 = var14.unshift;
                var39 = var39.bind(var14)(var40);
            case 5672:
                if (!var37) {
                    _fun77827_ip = 5698;
                    continue _fun77827
                }
            case 5675:
                var37 = var14.unshift;
                var39 = var16.pinned;
                if (!var39) {
                    _fun77827_ip = 5693;
                    continue _fun77827
                }
            case 5690:
                var35 = var38;
            case 5693:
                var35 = var37.bind(var14)(var35);
            case 5698:
                var35 = var0 != var4;
                if (!var35) {
                    _fun77827_ip = 5714;
                    continue _fun77827
                }
            case 5705:
                var37 = var4.length;
                var35 = var37 > var8;
            case 5714:
                if (!var35) {
                    _fun77827_ip = 5728;
                    continue _fun77827
                }
            case 5717:
                var35 = var14.unshift;
                var35 = var35.bind(var14)(var36);
            case 5728:
                if (!var33) {
                    _fun77827_ip = 5742;
                    continue _fun77827
                }
            case 5731:
                var33 = var14.unshift;
                var33 = var33.bind(var14)(var34);
            case 5742:
                if (!var25) {
                    _fun77827_ip = 5756;
                    continue _fun77827
                }
            case 5745:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var32);
            case 5756:
                var25 = var0 == var21;
                if (var25) {
                    _fun77827_ip = 5766;
                    continue _fun77827
                }
            case 5763:
                var25 = var31;
            case 5766:
                if (var25) {
                    _fun77827_ip = 6001;
                    continue _fun77827
                }
            case 5772:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var30);
                var30 = var21.mediaType;
                var25 = 'image';
                if (!(var25 !== var30)) {
                    _fun77827_ip = 5911;
                    continue _fun77827
                }
            case 5797:
                var30 = var21.mediaType;
                var25 = 'video';
                if (!(var25 === var30)) {
                    _fun77827_ip = 5864;
                    continue _fun77827
                }
            case 5811:
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var25 = 68;
                var25 = var31[var25];
                var31 = var30.bind(var2)(var25);
                var30 = var31.isWebPlayerVideoUrl;
                var25 = var21.mediaUrl;
                var25 = var30.bind(var31)(var25);
                if (var25) {
                    _fun77827_ip = 5864;
                    continue _fun77827
                }
            case 5851:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var29);
                _fun77827_ip = 5922;
                continue _fun77827;
            case 5864:
                var29 = var21.mediaType;
                var25 = 'audio';
                var25 = var25 !== var29;
                if (!var25) {
                    _fun77827_ip = 5895;
                    continue _fun77827
                }
            case 5881:
                var30 = var21.mediaType;
                var29 = 'file';
                var25 = var29 !== var30;
            case 5895:
                if (var25) {
                    _fun77827_ip = 5922;
                    continue _fun77827
                }
            case 5898:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var28);
                _fun77827_ip = 5922;
                continue _fun77827;
            case 5911:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var27);
            case 5922:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 69;
                var25 = var28[var25];
                var27 = var27.bind(var2)(var25);
                var25 = var27.messageHasObscurableMedia;
                var25 = var25.bind(var27)(var16);
                if (!var25) {
                    _fun77827_ip = 5967;
                    continue _fun77827
                }
            case 5956:
                var25 = var14.unshift;
                var25 = var25.bind(var14)(var26);
            case 5967:
                var25 = var21.sourceType;
                var21 = 'attachment';
                var21 = var21 === var25;
                if (!var21) {
                    _fun77827_ip = 5987;
                    continue _fun77827
                }
            case 5984:
                var21 = var24;
            case 5987:
                if (!var21) {
                    _fun77827_ip = 6001;
                    continue _fun77827
                }
            case 5990:
                var21 = var14.unshift;
                var21 = var21.bind(var14)(var23);
            case 6001:
                var21 = var16.reactions;
                var21 = var21.length;
                var21 = var21 > var8;
                if (!var21) {
                    _fun77827_ip = 6069;
                    continue _fun77827
                }
            case 6019:
                var23 = var16.isPoll;
                var23 = var23.bind(var16)();
                var23 = !var23;
                if (var23) {
                    _fun77827_ip = 6066;
                    continue _fun77827
                }
            case 6035:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var24 = 70;
                var24 = var26[var24];
                var25 = var25.bind(var2)(var24);
                var24 = var25.hasNonVoteReactions;
                var23 = var24.bind(var25)(var16);
            case 6066:
                var21 = var23;
            case 6069:
                if (!var21) {
                    _fun77827_ip = 6097;
                    continue _fun77827
                }
            case 6072:
                var21 = var14.unshift;
                var21 = var21.bind(var14)(var22);
                if (!var12) {
                    _fun77827_ip = 6097;
                    continue _fun77827
                }
            case 6086:
                var12 = var14.unshift;
                var12 = var12.bind(var14)(var18);
            case 6097:
                var12 = _closure1_slot26;
                var18 = var12.bind(var2)(var17);
                var17 = var18.bind(var2)();
                var12 = var17.done;
                if (var12) {
                    _fun77827_ip = 6182;
                    continue _fun77827
                }
            case 6118:
                var21 = var17.value;
                var22 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var20];
                var12 = var22.bind(var2)(var12);
                var12 = var12.PollMessageContextItemTypes;
                var12 = var12.END_EARLY;
                if (!(var21 === var12)) {
                    _fun77827_ip = 6167;
                    continue _fun77827
                }
            case 6156:
                var12 = var14.unshift;
                var12 = var12.bind(var14)(var19);
            case 6167:
                var21 = var18.bind(var2)();
                var12 = var21.done;
                var17 = var21;
                if (!var12) {
                    _fun77827_ip = 6118;
                    continue _fun77827
                }
            case 6182:
                var12 = var14.unshift;
                var12 = var12.bind(var14)(var15);
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 71;
                var12 = var17[var12];
                var15 = var15.bind(var2)(var12);
                var12 = var15.canViewInteractionInfo;
                var12 = var12.bind(var15)(var16);
                if (!var12) {
                    _fun77827_ip = 6238;
                    continue _fun77827
                }
            case 6227:
                var12 = var14.unshift;
                var12 = var12.bind(var14)(var13);
            case 6238:
                var13 = var14.filter;
                var12 = function(arg0) { // Environment: var3
                    var2 = _closure2_slot11;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var14 = var13.bind(var14)(var12);
                var13 = var14.sort;
                var12 = function(arg0, arg1) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.sortKey;
                    var0 = arg1;
                    var0 = var0.sortKey;
                    var0 = var1 - var0;
                    return var0;
                };
                var15 = var13.bind(var14)(var12);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 72;
                var12 = var14[var12];
                var14 = var13.bind(var2)(var12);
                var13 = var14.groupBy;
                var12 = 'section';
                var13 = var13.bind(var14)(var15, var12);
                var12 = var10.Object;
                var10 = var12.values;
                var12 = var10.bind(var12)(var13);
                var10 = var12.map;
                var3 = function(arg0) { // Environment: var3
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var10.bind(var12)(var3);
                var3 = var1.bind(var2)(var3);
                return var3;
            case 6349:
                var3 = {};
                var10 = _closure1_slot25;
                var10 = var10.PRIMARY;
                var3.section = var10;
                var3.sortKey = var11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 37;
                var14 = var13[var10];
                var14 = var12.bind(var2)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var10 = var13[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.t;
                var10 = var10.k5WiPf;
                var10 = var14.bind(var15)(var10);
                var3.label = var10;
                var10 = 41;
                var10 = var13[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.LinkIcon;
                var3.IconComponent = var10;
                var3 = var5.bind(var2)(var3);
                var10 = new Array(1);
                var10[0] = var3;
                var3 = new Array(1);
                var3[0] = var10;
                var3 = var1.bind(var2)(var3);
                return var3;
            case 6479:
                var3 = new Array(0);
                if (!var9) {
                    _fun77827_ip = 6603;
                    continue _fun77827
                }
            case 6486:
                var10 = var3.push;
                var9 = {};
                var12 = _closure1_slot25;
                var12 = var12.PRIMARY;
                var9.section = var12;
                var9.sortKey = var11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 37;
                var14 = var13[var11];
                var14 = var12.bind(var2)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.t;
                var11 = var11["5911Lb"];
                var11 = var14.bind(var15)(var11);
                var9.label = var11;
                var11 = 38;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.RetryIcon;
                var9.IconComponent = var11;
                var9 = var5.bind(var2)(var9);
                var9 = var10.bind(var3)(var9);
            case 6603:
                var0 = var0 != var4;
                if (!var0) {
                    _fun77827_ip = 6619;
                    continue _fun77827
                }
            case 6610:
                var4 = var4.length;
                var0 = var4 > var8;
            case 6619:
                if (!var0) {
                    _fun77827_ip = 6739;
                    continue _fun77827
                }
            case 6622:
                var4 = var3.push;
                var0 = {};
                var8 = _closure1_slot25;
                var8 = var8.PRIMARY;
                var0.section = var8;
                var0.sortKey = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 37;
                var10 = var9[var7];
                var10 = var8.bind(var2)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.JrGD7E;
                var7 = var10.bind(var11)(var7);
                var0.label = var7;
                var7 = 39;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.CopyIcon;
                var0.IconComponent = var7;
                var0 = var5.bind(var2)(var0);
                var0 = var4.bind(var3)(var0);
            case 6739:
                var4 = var3.push;
                var0 = {};
                var7 = _closure1_slot25;
                var7 = var7.PRIMARY;
                var0.section = var7;
                var7 = 3;
                var0.sortKey = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 37;
                var9 = var8[var6];
                var9 = var7.bind(var2)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.xwMqD7;
                var6 = var9.bind(var10)(var6);
                var0.label = var6;
                var6 = 40;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.TrashIcon;
                var0.IconComponent = var6;
                var6 = 'danger';
                var0.variant = var6;
                var0 = var5.bind(var2)(var0);
                var0 = var4.bind(var3)(var0);
                var0 = new Array(1);
                var0[0] = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6484, 9834, 9586, 3060, 1216, 1410, 3050, 1346, 660, 33, 5688, 5541, 4266, 9832, 9779, 9138, 8696, 566, 9589, 6659, 9150, 9835, 1348, 9836, 3933, 1384, 9837, 6754, 9838, 7694, 9209, 5171, 4065, 9839, 9840, 1234, 7821, 3217, 3228, 3213, 7475, 9844, 8845, 4803, 9845, 9847, 7638, 4820, 9721, 5711, 9849, 9602, 3233, 5409, 4801, 4817, 3219, 7689, 6965, 8890, 7558, 1977, 4810, 5607, 5640, 9780, 3939, 4234, 6513, 6780, 22, 2]);