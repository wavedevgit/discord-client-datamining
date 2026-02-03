// components_native/CreateChannelModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun65579: for (var _fun65579_ip = 0;;) switch (_fun65579_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.selected;
                var _closure2_slot0 = var11;
                var2 = var1.channelType;
                var _closure2_slot1 = var2;
                var0 = var1.isPrivate;
                var7 = var1.isBeta;
                var1 = var1.onPress;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot24;
                var3 = undefined;
                var9 = var1.bind(var3)();
                if (var0) {
                    _fun65579_ip = 68;
                    continue _fun65579
                }
            case 62:
                var0 = _closure1_slot25;
                _fun65579_ip = 72;
                continue _fun65579;
            case 68:
                var0 = _closure1_slot26;
            case 72:
                var0 = var0[var2];
                var17 = var0.IconComponent;
                var0 = _closure1_slot15;
                var0 = var0.GUILD_TEXT;
                if (!(var0 !== var2)) {
                    _fun65579_ip = 1001;
                    continue _fun65579
                }
            case 98:
                var0 = _closure1_slot15;
                var0 = var0.GUILD_VOICE;
                if (!(var0 !== var2)) {
                    _fun65579_ip = 883;
                    continue _fun65579
                }
            case 115:
                var0 = _closure1_slot15;
                var0 = var0.GUILD_FORUM;
                if (!(var0 !== var2)) {
                    _fun65579_ip = 762;
                    continue _fun65579
                }
            case 132:
                var0 = _closure1_slot15;
                var0 = var0.GUILD_ANNOUNCEMENT;
                if (!(var0 !== var2)) {
                    _fun65579_ip = 641;
                    continue _fun65579
                }
            case 149:
                var0 = _closure1_slot15;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var0 !== var2)) {
                    _fun65579_ip = 520;
                    continue _fun65579
                }
            case 166:
                var0 = _closure1_slot15;
                var1 = var0.GUILD_MEDIA;
                var0 = undefined;
                if (!(var1 === var2)) {
                    _fun65579_ip = 1117;
                    continue _fun65579
                }
            case 185:
                var1 = {};
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 26;
                var2 = var22[var15];
                var2 = var16.bind(var3)(var2);
                var6 = var2.intl;
                var4 = var6.string;
                var2 = var22[var15];
                var2 = var16.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["6x6fVg"];
                var2 = var4.bind(var6)(var2);
                var1.label = var2;
                var6 = _closure1_slot23;
                var4 = _closure1_slot22;
                var2 = {};
                var13 = _closure1_slot21;
                var8 = 27;
                var8 = var22[var8];
                var8 = var16.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var18 = 'text-xs/normal';
                var14 = var22[var15];
                var14 = var16.bind(var3)(var14);
                var20 = var14.intl;
                var19 = var20.string;
                var14 = var22[var15];
                var14 = var16.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.JyCrwS;
                var14 = var19.bind(var20)(var14);
                var8.children = var14;
                var12 = var13.bind(var3)(var12, var8);
                var8 = new Array(2);
                var8[0] = var12;
                var14 = _closure1_slot21;
                var12 = 28;
                var12 = var22[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.TextWithIOSLinkWorkaround;
                var12 = {};
                var12.variant = var18;
                var18 = var22[var15];
                var18 = var16.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.format;
                var15 = var22[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15["2Sapx1"];
                var15 = {};
                var21 = _closure1_slot1;
                var20 = 29;
                var20 = var22[var20];
                var22 = var21.bind(var3)(var20);
                var21 = var22.getCreatorSupportArticleURL;
                var20 = _closure1_slot19;
                var20 = var20.MEDIA_CHANNEL;
                var20 = var21.bind(var22)(var20);
                var15.hcArticleUrl = var20;
                var15 = var18.bind(var19)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var8[1] = var12;
                var2.children = var8;
                var2 = var6.bind(var3)(var4, var2);
                var1.description = var2;
                var0 = var1;
                _fun65579_ip = 1117;
                continue _fun65579;
            case 520:
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 26;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var13 = var4.intl;
                var6 = var13.string;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.pNWst0;
                var4 = var6.bind(var13)(var4);
                var1.label = var4;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var12[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.VPAwgo;
                var2 = var4.bind(var6)(var2);
                var1.description = var2;
                var0 = var1;
                _fun65579_ip = 1117;
                continue _fun65579;
            case 641:
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 26;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var13 = var4.intl;
                var6 = var13.string;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.qr9dEP;
                var4 = var6.bind(var13)(var4);
                var1.label = var4;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var12[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.gBkfzu;
                var2 = var4.bind(var6)(var2);
                var1.description = var2;
                var0 = var1;
                _fun65579_ip = 1117;
                continue _fun65579;
            case 762:
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 26;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var13 = var4.intl;
                var6 = var13.string;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.eAVID5;
                var4 = var6.bind(var13)(var4);
                var1.label = var4;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var12[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.iZ5pgg;
                var2 = var4.bind(var6)(var2);
                var1.description = var2;
                var0 = var1;
                _fun65579_ip = 1117;
                continue _fun65579;
            case 883:
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 26;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var13 = var4.intl;
                var6 = var13.string;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.Sx55Oh;
                var4 = var6.bind(var13)(var4);
                var1.label = var4;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var12[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.pqfkoF;
                var2 = var4.bind(var6)(var2);
                var1.description = var2;
                var0 = var1;
                _fun65579_ip = 1117;
                continue _fun65579;
            case 1001:
                var1 = {};
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 26;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var13 = var4.intl;
                var6 = var13.string;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.pnuRXC;
                var4 = var6.bind(var13)(var4);
                var1.label = var4;
                var4 = var12[var2];
                var4 = var8.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var12[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.oG6WsM;
                var2 = var4.bind(var6)(var2);
                var1.description = var2;
                var0 = var1;
            case 1117:
                var13 = var0.label;
                var4 = var0.description;
                var2 = _closure1_slot21;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 30;
                var0 = var12[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var5 = function() {
                    _fun65580: for (var _fun65580_ip = 0;;) switch (_fun65580_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            if (!var1) {
                                _fun65580_ip = 28;
                                continue _fun65580
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var5;
                var5 = 'radio';
                var0.accessibilityRole = var5;
                var5 = {};
                var5.selected = var11;
                var0.accessibilityState = var5;
                var14 = _closure1_slot21;
                var8 = _closure1_slot6;
                var5 = {};
                var15 = var9.flexRow;
                var5.style = var15;
                var16 = _closure1_slot21;
                var15 = {};
                var15 = var16.bind(var3)(var17, var15);
                var5.children = var15;
                var5 = var14.bind(var3)(var8, var5);
                var0.icon = var5;
                var8 = _closure1_slot21;
                var5 = 31;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormRadio;
                var5 = {};
                var5.selected = var11;
                var5 = var8.bind(var3)(var6, var5);
                var0.trailing = var5;
                var6 = true;
                var5 = var13;
                if (!(var6 === var7)) {
                    _fun65579_ip = 1425;
                    continue _fun65579
                }
            case 1288:
                var8 = _closure1_slot23;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var9.horizontalContainer;
                var6.style = var9;
                var12 = _closure1_slot21;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 32;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var11 = var9.FormLabel;
                var9 = {};
                var9.text = var13;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot21;
                var11 = _closure1_slot1;
                var13 = 33;
                var10 = var15[var13];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.BetaSizes;
                var13 = var13.SMALL;
                var10.size = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1425:
                var0.label = var5;
                var0.subLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var1 = function arg0() {
        _fun65581: for (var _fun65581_ip = 0;;) switch (_fun65581_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.categoryId;
                var _closure2_slot0 = var6;
                var10 = var0.channelType;
                var1 = var0.cloneChannelId;
                var _closure2_slot1 = var1;
                var19 = var0.createMode;
                var _closure2_slot2 = var19;
                var22 = var0.guildId;
                var _closure2_slot3 = var22;
                var0 = var0.onChannelCreated;
                var _closure2_slot4 = var0;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var1 = _closure1_slot24;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 34;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var5 = var1.insets;
                var2 = _closure1_slot0;
                var1 = 35;
                var7 = var4[var1];
                var11 = var2.bind(var3)(var7);
                var9 = var11.useStateFromStores;
                var7 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var30
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var11)(var8, var7);
                var1 = var4[var1];
                var8 = var2.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var30
                    _fun65583: for (var _fun65583_ip = 0;;) switch (_fun65583_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun65583_ip = 37;
                                continue _fun65583
                            }
                        case 16:
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var9 = var4.bind(var8)(var2, var1);
                var _closure2_slot5 = var9;
                var8 = null;
                var29 = var8 != var7;
                if (!var29) {
                    _fun65581_ip = 275;
                    continue _fun65581
                }
            case 249:
                var4 = var7.features;
                var2 = var4.has;
                var1 = _closure1_slot16;
                var1 = var1.COMMUNITY;
                var29 = var2.bind(var4)(var1);
            case 275:
                var4 = _closure1_slot12;
                var2 = var4.can;
                var1 = _closure1_slot17;
                var1 = var1.VIEW_CHANNEL;
                var26 = var2.bind(var4)(var1, var7);
                _closure2_slot6 = var26;
                var4 = _closure1_slot12;
                var2 = var4.can;
                var1 = _closure1_slot17;
                var1 = var1.CONNECT;
                var25 = var2.bind(var4)(var1, var7);
                _closure2_slot7 = var25;
                var2 = _closure1_slot14;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var11 = 36;
                var11 = var1[var11];
                var13 = var2.bind(var3)(var11);
                var11 = var8 != var4;
                var4 = 'CreateChannel: user cannot be undefined';
                var4 = var13.bind(var3)(var11, var4);
                var35 = 37;
                var1 = var1[var35];
                var1 = var2.bind(var3)(var1);
                var11 = var1.bind(var3)(var9);
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var13 = var8 != var11;
                var1 = '';
                if (!var13) {
                    _fun65581_ip = 424;
                    continue _fun65581
                }
            case 421:
                var1 = var11;
            case 424:
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot3;
                var23 = 2;
                var1 = var1.bind(var3)(var2, var23);
                var16 = 0;
                var18 = var1[var16];
                _closure2_slot8 = var18;
                var2 = 1;
                var1 = var1[var2];
                _closure2_slot9 = var1;
                var4 = _closure1_slot4;
                var1 = var4.useState;
                if (!(var8 == var10)) {
                    _fun65581_ip = 486;
                    continue _fun65581
                }
            case 476:
                var11 = _closure1_slot15;
                var10 = var11.GUILD_TEXT;
            case 486:
                var4 = var1.bind(var4)(var10);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var4, var23);
                var31 = var1[var16];
                _closure2_slot10 = var31;
                var1 = var1[var2];
                _closure2_slot11 = var1;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 38;
                var1 = var13[var1];
                var4 = var10.bind(var3)(var1);
                var1 = var4.useCanCreateStageChannelByGuild;
                var28 = var1.bind(var4)(var22);
                var1 = 39;
                var1 = var13[var1];
                var4 = var10.bind(var3)(var1);
                var1 = var4.useGuildEligibleForMediaChannels;
                var32 = var1.bind(var4)(var7);
                var1 = 40;
                var1 = var13[var1];
                var4 = var10.bind(var3)(var1);
                var1 = var4.useNavigation;
                var20 = var1.bind(var4)();
                _closure2_slot12 = var20;
                var11 = _closure1_slot1;
                var21 = 41;
                var1 = var13[var21];
                var1 = var11.bind(var3)(var1);
                var7 = var1.bind(var3)(var0);
                var4 = _closure1_slot3;
                var1 = 3;
                var1 = var4.bind(var3)(var7, var1);
                var14 = var1[var16];
                _closure2_slot13 = var14;
                var15 = var1[var2];
                var7 = var1[var23];
                _closure2_slot14 = var7;
                var24 = _closure1_slot4;
                var4 = var24.useState;
                var1 = false;
                var4 = var4.bind(var24)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var4, var23);
                var23 = var1[var16];
                _closure2_slot15 = var23;
                var1 = var1[var2];
                _closure2_slot16 = var1;
                var24 = _closure1_slot4;
                var4 = var24.useEffect;
                var2 = function() { // Environment: var30
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 42;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot18;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = 'Create Channel';
                    var1.type = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var4.bind(var24)(var2, var1);
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(13);
                var1[0] = var20;
                var1[1] = var31;
                var1[2] = var9;
                var1[3] = var26;
                var1[4] = var25;
                var1[5] = var23;
                var1[6] = var18;
                var1[7] = var14;
                var1[8] = var22;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var19;
                var1[12] = var0;
                var0 = function() { // Environment: var30
                    var3 = _closure2_slot12;
                    var2 = var3.setOptions;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 43;
                    var6 = var10[var0];
                    var0 = undefined;
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.getHeaderCloseButton;
                    var9 = _closure1_slot1;
                    var6 = 44;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.close;
                    var6 = var7.bind(var8)(var6);
                    var1.headerLeft = var6;
                    var6 = function() {
                        _fun65586: for (var _fun65586_ip = 0;;) switch (_fun65586_ip) {
                            case 0:
                                var0 = _closure2_slot13;
                                var4 = _closure1_slot21;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                if (var0) {
                                    _fun65586_ip = 289;
                                    continue _fun65586
                                }
                            case 28:
                                var0 = 45;
                                var0 = var3[var0];
                                var5 = undefined;
                                var0 = var2.bind(var5)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var6 = _closure2_slot15;
                                if (var6) {
                                    _fun65586_ip = 132;
                                    continue _fun65586
                                }
                            case 57:
                                var7 = _closure2_slot10;
                                var6 = _closure1_slot15;
                                var6 = var6.GUILD_STAGE_VOICE;
                                if (!(var7 !== var6)) {
                                    _fun65586_ip = 132;
                                    continue _fun65586
                                }
                            case 75:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 26;
                                var7 = var12[var6];
                                var7 = var11.bind(var5)(var7);
                                var10 = var7.intl;
                                var7 = var10.string;
                                var6 = var12[var6];
                                var6 = var11.bind(var5)(var6);
                                var6 = var6.t;
                                var6 = var6.CumH4u;
                                var6 = var7.bind(var10)(var6);
                                _fun65586_ip = 187;
                                continue _fun65586;
                            case 132:
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var7 = 26;
                                var10 = var13[var7];
                                var10 = var12.bind(var5)(var10);
                                var11 = var10.intl;
                                var10 = var11.string;
                                var7 = var13[var7];
                                var7 = var12.bind(var5)(var7);
                                var7 = var7.t;
                                var7 = var7.PDTjLN;
                                var6 = var10.bind(var11)(var7);
                            case 187:
                                var0.text = var6;
                                var7 = _closure2_slot8;
                                var6 = '';
                                var6 = var6 === var7;
                                if (var6) {
                                    _fun65586_ip = 264;
                                    continue _fun65586
                                }
                            case 206:
                                var7 = _closure2_slot15;
                                if (!var7) {
                                    _fun65586_ip = 261;
                                    continue _fun65586
                                }
                            case 213:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 46;
                                var9 = var11[var9];
                                var12 = var10.bind(var5)(var9);
                                var11 = var12.canCreatePrivateChannel;
                                var10 = _closure2_slot10;
                                var9 = _closure2_slot6;
                                var8 = _closure2_slot7;
                                var8 = var11.bind(var12)(var10, var9, var8);
                                var7 = !var8;
                            case 261:
                                var6 = var7;
                            case 264:
                                var0.disabled = var6;
                                var6 = function() {
                                    _fun65587: for (var _fun65587_ip = 0;;) switch (_fun65587_ip) {
                                        case 0:
                                            var4 = {};
                                            var0 = _closure2_slot5;
                                            var2 = null;
                                            if (!(var2 == var0)) {
                                                _fun65587_ip = 21;
                                                continue _fun65587
                                            }
                                        case 15:
                                            var0 = new Array(0);
                                            _fun65587_ip = 66;
                                            continue _fun65587;
                                        case 21:
                                            var6 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var1 = 47;
                                            var3 = var3[var1];
                                            var1 = undefined;
                                            var6 = var6.bind(var1)(var3);
                                            var3 = var6.values;
                                            var1 = _closure2_slot5;
                                            var1 = var1.permissionOverwrites;
                                            var0 = var3.bind(var6)(var1);
                                        case 66:
                                            var4.overwrites = var0;
                                            var0 = _closure2_slot5;
                                            var3 = var2 == var0;
                                            var0 = undefined;
                                            var1 = undefined;
                                            if (var3) {
                                                _fun65587_ip = 96;
                                                continue _fun65587
                                            }
                                        case 86:
                                            var3 = _closure2_slot5;
                                            var1 = var3.bitrate;
                                        case 96:
                                            var4.bitrate = var1;
                                            var1 = _closure2_slot5;
                                            var2 = var2 == var1;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun65587_ip = 124;
                                                continue _fun65587
                                            }
                                        case 114:
                                            var2 = _closure2_slot5;
                                            var1 = var2.userLimit;
                                        case 124:
                                            var4.userLimit = var1;
                                            var1 = _closure2_slot2;
                                            var4.createMode = var1;
                                            var1 = _closure2_slot3;
                                            var4.guildId = var1;
                                            var1 = _closure2_slot8;
                                            var4.name = var1;
                                            var1 = _closure2_slot10;
                                            var4.channelType = var1;
                                            var1 = _closure2_slot0;
                                            var4.categoryId = var1;
                                            var1 = _closure2_slot4;
                                            var4.onChannelCreated = var1;
                                            var1 = _closure2_slot15;
                                            if (var1) {
                                                _fun65587_ip = 247;
                                                continue _fun65587
                                            }
                                        case 188:
                                            var3 = _closure2_slot10;
                                            var2 = _closure1_slot15;
                                            var2 = var2.GUILD_STAGE_VOICE;
                                            if (!(var3 !== var2)) {
                                                _fun65587_ip = 220;
                                                continue _fun65587
                                            }
                                        case 209:
                                            var2 = _closure2_slot14;
                                            var2 = var2.bind(var0)(var4);
                                            _fun65587_ip = 320;
                                            continue _fun65587;
                                        case 220:
                                            var3 = _closure2_slot12;
                                            var2 = var3.push;
                                            var1 = _closure1_slot27;
                                            var1 = var1.ADD_MODERATORS;
                                            var1 = var2.bind(var3)(var1, var4);
                                            _fun65587_ip = 320;
                                            continue _fun65587;
                                        case 247:
                                            var4 = _closure2_slot12;
                                            var3 = var4.push;
                                            var1 = _closure1_slot27;
                                            var2 = var1.ADD_MEMBERS;
                                            var1 = {};
                                            var6 = _closure2_slot3;
                                            var1.guildId = var6;
                                            var6 = _closure2_slot10;
                                            var1.channelType = var6;
                                            var6 = _closure2_slot8;
                                            var1.name = var6;
                                            var6 = _closure2_slot0;
                                            var1.categoryId = var6;
                                            var5 = _closure2_slot4;
                                            var1.onChannelCreated = var5;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 320:
                                            return var0;
                                    }
                                };
                                var0.onPress = var6;
                                var0 = var4.bind(var5)(var1, var0);
                                _fun65586_ip = 317;
                                continue _fun65586;
                            case 289:
                                var1 = 43;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.HeaderSubmittingIndicator;
                                var1 = {};
                                var0 = var4.bind(var3)(var2, var1);
                            case 317:
                                return var0;
                        }
                    };
                    var1.headerRight = var6;
                    var6 = _closure1_slot31;
                    var5 = _closure2_slot10;
                    var4 = _closure2_slot5;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.headerTitle = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = function arg0, arg1() {
                    _fun65588: for (var _fun65588_ip = 0;;) switch (_fun65588_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot9;
                            var5 = _closure1_slot7;
                            var3 = var5.has;
                            var1 = arg1;
                            var3 = var3.bind(var5)(var1);
                            var1 = var4;
                            if (!var3) {
                                _fun65588_ip = 69;
                                continue _fun65588
                            }
                        case 36:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 48;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var0 = var3.sanitizeGuildTextChannelName;
                            var1 = var0.bind(var3)(var4);
                        case 69:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                _closure2_slot17 = var0;
                var33 = function arg0() {
                    var3 = arg0;
                    var2 = _closure2_slot11;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot17;
                    var1 = _closure2_slot8;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var2 = _closure1_slot21;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var4 = {};
                var7 = 14;
                var6 = var13[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var4.padding = var6;
                var6 = var13[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var5 = var5.bottom;
                var5 = var6 + var5;
                var4.paddingBottom = var5;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot23;
                var4 = 49;
                var4 = var13[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = var13[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var4.spacing = var7;
                var11 = _closure1_slot21;
                var7 = 50;
                var7 = var13[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Input;
                var7 = {};
                var13 = _closure1_slot15;
                var13 = var13.GUILD_CATEGORY;
                if (!(var31 !== var13)) {
                    _fun65581_ip = 1042;
                    continue _fun65581
                }
            case 985:
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var13 = 26;
                var14 = var27[var13];
                var14 = var24.bind(var3)(var14);
                var20 = var14.intl;
                var14 = var20.string;
                var13 = var27[var13];
                var13 = var24.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.PVbHDl;
                var13 = var14.bind(var20)(var13);
                _fun65581_ip = 1097;
                continue _fun65581;
            case 1042:
                var27 = _closure1_slot0;
                var34 = _closure1_slot2;
                var14 = 26;
                var20 = var34[var14];
                var20 = var27.bind(var3)(var20);
                var24 = var20.intl;
                var20 = var24.string;
                var14 = var34[var14];
                var14 = var27.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.OCAkGP;
                var13 = var20.bind(var24)(var14);
            case 1097:
                var7.label = var13;
                var14 = var15.name;
                var20 = var8 == var14;
                var13 = undefined;
                if (var20) {
                    _fun65581_ip = 1119;
                    continue _fun65581
                }
            case 1115:
                var13 = var14[var16];
            case 1119:
                var7.errorMessage = var13;
                var13 = _closure1_slot15;
                var13 = var13.GUILD_FORUM;
                if (!(var31 !== var13)) {
                    _fun65581_ip = 1248;
                    continue _fun65581
                }
            case 1138:
                var14 = var8 != var9;
                var13 = undefined;
                if (!var14) {
                    _fun65581_ip = 1246;
                    continue _fun65581
                }
            case 1147:
                var34 = _closure1_slot0;
                var27 = _closure1_slot2;
                var14 = 26;
                var16 = var27[var14];
                var16 = var34.bind(var3)(var16);
                var24 = var16.intl;
                var20 = var24.format;
                var14 = var27[var14];
                var14 = var34.bind(var3)(var14);
                var14 = var14.t;
                var16 = var14.s2ZzZZ;
                var14 = {};
                var27 = var27[var35];
                var37 = var34.bind(var3)(var27);
                var36 = var37.computeChannelName;
                var40 = _closure1_slot14;
                var39 = _closure1_slot13;
                var38 = true;
                var42 = var37;
                var41 = var9;
                var27 = var42[var36](var41, var40, var39, var38, var37);
                var14.name = var27;
                var13 = var20.bind(var24)(var16, var14);
            case 1246:
                _fun65581_ip = 1305;
                continue _fun65581;
            case 1248:
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var14 = 26;
                var16 = var27[var14];
                var16 = var24.bind(var3)(var16);
                var20 = var16.intl;
                var16 = var20.string;
                var14 = var27[var14];
                var14 = var24.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.qBvLY4;
                var13 = var16.bind(var20)(var14);
            case 1305:
                var7.description = var13;
                var16 = _closure1_slot21;
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 51;
                var13 = var20[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.TextField;
                var13 = {
                    'autoFocus': true,
                    'enableAndroidSanitizedInputWorkaround': true
                };
                var36 = true;
                var13.value = var18;
                var18 = function arg0() {
                    _fun65590: for (var _fun65590_ip = 0;;) switch (_fun65590_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot8;
                            if (!(var1 !== var3)) {
                                _fun65590_ip = 30;
                                continue _fun65590
                            }
                        case 14:
                            var2 = _closure2_slot17;
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3, var1);
                        case 30:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13.onChange = var18;
                var18 = _closure1_slot15;
                var18 = var18.GUILD_CATEGORY;
                if (!(var31 !== var18)) {
                    _fun65581_ip = 1520;
                    continue _fun65581
                }
            case 1388:
                var18 = _closure1_slot15;
                var18 = var18.GUILD_FORUM;
                if (!(var31 !== var18)) {
                    _fun65581_ip = 1461;
                    continue _fun65581
                }
            case 1402:
                var27 = _closure1_slot0;
                var34 = _closure1_slot2;
                var18 = 26;
                var20 = var34[var18];
                var20 = var27.bind(var3)(var20);
                var24 = var20.intl;
                var20 = var24.string;
                var18 = var34[var18];
                var18 = var27.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["bw/b8E"];
                var18 = var20.bind(var24)(var18);
                _fun65581_ip = 1518;
                continue _fun65581;
            case 1461:
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var20 = 26;
                var24 = var35[var20];
                var24 = var34.bind(var3)(var24);
                var27 = var24.intl;
                var24 = var27.string;
                var20 = var35[var20];
                var20 = var34.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["5z1Xat"];
                var18 = var24.bind(var27)(var20);
            case 1518:
                _fun65581_ip = 1577;
                continue _fun65581;
            case 1520:
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var20 = 26;
                var24 = var35[var20];
                var24 = var34.bind(var3)(var24);
                var27 = var24.intl;
                var24 = var27.string;
                var20 = var35[var20];
                var20 = var34.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.eTVbtx;
                var18 = var24.bind(var27)(var20);
            case 1577:
                var13.placeholder = var18;
                var13 = var16.bind(var3)(var14, var13);
                var7.children = var13;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var10 = var8 == var9;
                var9 = null;
                if (!var10) {
                    _fun65581_ip = 2917;
                    continue _fun65581
                }
            case 1618:
                var13 = _closure1_slot23;
                var11 = _closure1_slot22;
                var10 = {};
                var14 = _closure1_slot15;
                var14 = var14.GUILD_CATEGORY;
                var16 = null;
                if (!(var31 !== var14)) {
                    _fun65581_ip = 2176;
                    continue _fun65581
                }
            case 1647:
                var20 = _closure1_slot23;
                var35 = _closure1_slot0;
                var37 = _closure1_slot2;
                var14 = 52;
                var14 = var37[var14];
                var14 = var35.bind(var3)(var14);
                var18 = var14.TableRowGroup;
                var14 = {};
                var24 = 26;
                var27 = var37[var24];
                var27 = var35.bind(var3)(var27);
                var34 = var27.intl;
                var27 = var34.string;
                var24 = var37[var24];
                var24 = var35.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["7ZcXG2"];
                var24 = var27.bind(var34)(var24);
                var14.title = var24;
                var27 = _closure1_slot21;
                var35 = _closure1_slot28;
                var24 = {};
                var34 = _closure1_slot15;
                var34 = var34.GUILD_TEXT;
                var24.channelType = var34;
                var34 = _closure1_slot15;
                var34 = var34.GUILD_TEXT;
                var34 = var31 === var34;
                var24.selected = var34;
                var24.isPrivate = var23;
                var24.onPress = var33;
                var27 = var27.bind(var3)(var35, var24);
                var24 = new Array(6);
                var24[0] = var27;
                var34 = _closure1_slot21;
                var27 = {};
                var37 = _closure1_slot15;
                var37 = var37.GUILD_VOICE;
                var27.channelType = var37;
                var37 = _closure1_slot15;
                var37 = var37.GUILD_VOICE;
                var37 = var31 === var37;
                var27.selected = var37;
                var27.isPrivate = var23;
                var27.onPress = var33;
                var27 = var34.bind(var3)(var35, var27);
                var24[1] = var27;
                var34 = _closure1_slot21;
                var27 = {};
                var37 = _closure1_slot15;
                var37 = var37.GUILD_FORUM;
                var27.channelType = var37;
                var37 = _closure1_slot15;
                var37 = var37.GUILD_FORUM;
                var37 = var31 === var37;
                var27.selected = var37;
                var27.isPrivate = var23;
                var27.onPress = var33;
                var27 = var34.bind(var3)(var35, var27);
                var24[2] = var27;
                var27 = null;
                if (!var32) {
                    _fun65581_ip = 1986;
                    continue _fun65581
                }
            case 1922:
                var35 = _closure1_slot21;
                var34 = _closure1_slot28;
                var32 = {};
                var37 = _closure1_slot15;
                var37 = var37.GUILD_MEDIA;
                var32.channelType = var37;
                var37 = _closure1_slot15;
                var37 = var37.GUILD_MEDIA;
                var37 = var31 === var37;
                var32.selected = var37;
                var32.isPrivate = var23;
                var32.isBeta = var36;
                var32.onPress = var33;
                var27 = var35.bind(var3)(var34, var32);
            case 1986:
                var24[3] = var27;
                var27 = null;
                if (!var29) {
                    _fun65581_ip = 2089;
                    continue _fun65581
                }
            case 1995:
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var21];
                var29 = var32.bind(var3)(var29);
                var29 = var29.CreateChannelMode;
                var29 = var29.PREMIUM_CHANNEL;
                var27 = null;
                if (!(var19 !== var29)) {
                    _fun65581_ip = 2089;
                    continue _fun65581
                }
            case 2030:
                var34 = _closure1_slot21;
                var32 = _closure1_slot28;
                var29 = {};
                var35 = _closure1_slot15;
                var35 = var35.GUILD_ANNOUNCEMENT;
                var29.channelType = var35;
                var35 = _closure1_slot15;
                var35 = var35.GUILD_ANNOUNCEMENT;
                var35 = var31 === var35;
                var29.selected = var35;
                var29.isPrivate = var23;
                var29.onPress = var33;
                var27 = var34.bind(var3)(var32, var29);
            case 2089:
                var24[4] = var27;
                var27 = null;
                if (!var28) {
                    _fun65581_ip = 2162;
                    continue _fun65581
                }
            case 2098:
                var27 = null;
                if (var23) {
                    _fun65581_ip = 2162;
                    continue _fun65581
                }
            case 2103:
                var32 = _closure1_slot21;
                var29 = _closure1_slot28;
                var28 = {};
                var34 = _closure1_slot15;
                var34 = var34.GUILD_STAGE_VOICE;
                var28.channelType = var34;
                var34 = _closure1_slot15;
                var34 = var34.GUILD_STAGE_VOICE;
                var34 = var31 === var34;
                var28.selected = var34;
                var28.isPrivate = var23;
                var28.onPress = var33;
                var27 = var32.bind(var3)(var29, var28);
            case 2162:
                var24[5] = var27;
                var14.children = var24;
                var16 = var20.bind(var3)(var18, var14);
            case 2176:
                var14 = new Array(3);
                var14[0] = var16;
                var20 = _closure1_slot21;
                var18 = _closure1_slot1;
                var24 = _closure1_slot2;
                var16 = 53;
                var16 = var24[var16];
                var18 = var18.bind(var3)(var16);
                var16 = {};
                var16.guildId = var22;
                var16.channelType = var31;
                var16 = var20.bind(var3)(var18, var16);
                var14[1] = var16;
                var16 = _closure1_slot15;
                var18 = var16.GUILD_STAGE_VOICE;
                var16 = null;
                if (!(var31 !== var18)) {
                    _fun65581_ip = 2903;
                    continue _fun65581
                }
            case 2248:
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var21];
                var18 = var20.bind(var3)(var18);
                var18 = var18.CreateChannelMode;
                var18 = var18.PREMIUM_CHANNEL;
                var16 = null;
                if (!(var19 !== var18)) {
                    _fun65581_ip = 2903;
                    continue _fun65581
                }
            case 2286:
                var20 = _closure1_slot23;
                var19 = _closure1_slot22;
                var18 = {};
                var24 = _closure1_slot21;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = 52;
                var21 = var27[var21];
                var21 = var22.bind(var3)(var21);
                var22 = var21.TableRowGroup;
                var21 = {};
                var27 = _closure1_slot15;
                var27 = var27.GUILD_CATEGORY;
                if (!(var31 !== var27)) {
                    _fun65581_ip = 2424;
                    continue _fun65581
                }
            case 2342:
                var27 = _closure1_slot8;
                var27 = var27.bind(var3)(var31);
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var28 = 26;
                var29 = var34[var28];
                var29 = var33.bind(var3)(var29);
                var32 = var29.intl;
                var29 = var32.string;
                var28 = var34[var28];
                var28 = var33.bind(var3)(var28);
                var28 = var28.t;
                if (var27) {
                    _fun65581_ip = 2411;
                    continue _fun65581
                }
            case 2398:
                var27 = var28.hfbjIH;
                var27 = var29.bind(var32)(var27);
                _fun65581_ip = 2422;
                continue _fun65581;
            case 2411:
                var28 = var28.cLjvKg;
                var27 = var29.bind(var32)(var28);
            case 2422:
                _fun65581_ip = 2479;
                continue _fun65581;
            case 2424:
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                var28 = 26;
                var29 = var34[var28];
                var29 = var33.bind(var3)(var29);
                var32 = var29.intl;
                var29 = var32.string;
                var28 = var34[var28];
                var28 = var33.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.RQUk61;
                var27 = var29.bind(var32)(var28);
            case 2479:
                var21.description = var27;
                var29 = _closure1_slot21;
                var28 = _closure1_slot0;
                var32 = _closure1_slot2;
                var27 = 54;
                var27 = var32[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.TableSwitchRow;
                var27 = {};
                var32 = _closure1_slot15;
                var32 = var32.GUILD_CATEGORY;
                if (!(var31 !== var32)) {
                    _fun65581_ip = 2586;
                    continue _fun65581
                }
            case 2529:
                var35 = _closure1_slot0;
                var36 = _closure1_slot2;
                var32 = 26;
                var33 = var36[var32];
                var33 = var35.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var32 = var36[var32];
                var32 = var35.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.aUI70g;
                var32 = var33.bind(var34)(var32);
                _fun65581_ip = 2641;
                continue _fun65581;
            case 2586:
                var36 = _closure1_slot0;
                var37 = _closure1_slot2;
                var33 = 26;
                var34 = var37[var33];
                var34 = var36.bind(var3)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var33 = var37[var33];
                var33 = var36.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.lEPAZ5;
                var32 = var34.bind(var35)(var33);
            case 2641:
                var27.label = var32;
                var34 = _closure1_slot21;
                var33 = _closure1_slot0;
                var35 = _closure1_slot2;
                var32 = 55;
                var32 = var35[var32];
                var32 = var33.bind(var3)(var32);
                var33 = var32.LockIcon;
                var32 = {};
                var32 = var34.bind(var3)(var33, var32);
                var27.icon = var32;
                var27.value = var23;
                var30 = function arg0() {
                    var2 = _closure2_slot16;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var27.onValueChange = var30;
                var27 = var29.bind(var3)(var28, var27);
                var21.children = var27;
                var22 = var24.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var22 = null;
                if (!var23) {
                    _fun65581_ip = 2889;
                    continue _fun65581
                }
            case 2735:
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var32 = 46;
                var23 = var23[var32];
                var24 = var24.bind(var3)(var23);
                var23 = var24.canCreatePrivateChannel;
                var23 = var23.bind(var24)(var31, var26, var25);
                var22 = null;
                if (var23) {
                    _fun65581_ip = 2889;
                    continue _fun65581
                }
            case 2773:
                var25 = _closure1_slot21;
                var24 = _closure1_slot6;
                var23 = {};
                var26 = var12.errorMessage;
                var23.style = var26;
                var28 = _closure1_slot21;
                var27 = _closure1_slot1;
                var29 = _closure1_slot2;
                var33 = 56;
                var26 = var29[var33];
                var27 = var27.bind(var3)(var26);
                var26 = {};
                var30 = _closure1_slot0;
                var33 = var29[var33];
                var33 = var30.bind(var3)(var33);
                var33 = var33.HelpMessageTypes;
                var33 = var33.ERROR;
                var26.messageType = var33;
                var29 = var29[var32];
                var30 = var30.bind(var3)(var29);
                var29 = var30.getPrivateChannelHintText;
                var29 = var29.bind(var30)(var31);
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var23.children = var26;
                var22 = var25.bind(var3)(var24, var23);
            case 2889:
                var21[1] = var22;
                var18.children = var21;
                var16 = var20.bind(var3)(var19, var18);
            case 2903:
                var14[2] = var16;
                var10.children = var14;
                var9 = var13.bind(var3)(var11, var10);
            case 2917:
                var7[1] = var9;
                var9 = var15.message;
                var9 = var8 != var9;
                var8 = null;
                if (!var9) {
                    _fun65581_ip = 3036;
                    continue _fun65581
                }
            case 2935:
                var11 = _closure1_slot21;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var12.errorMessage;
                var9.style = var12;
                var14 = _closure1_slot21;
                var13 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 56;
                var12 = var18[var16];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var17 = _closure1_slot0;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.HelpMessageTypes;
                var16 = var16.ERROR;
                var12.messageType = var16;
                var15 = var15.message;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 3036:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var1;
    var0 = function arg0() {
        _fun65592: for (var _fun65592_ip = 0;;) switch (_fun65592_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot24;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var1 = var4.useRef;
                var1 = var1.bind(var4)(var2);
                var _closure2_slot1 = var1;
                var4 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 40;
                var1 = var18[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useNavigation;
                var12 = var1.bind(var4)();
                var _closure2_slot2 = var12;
                var6 = _closure1_slot11;
                var4 = var6.getGuild;
                var1 = var2.guildId;
                var10 = var4.bind(var6)(var1);
                var16 = _closure1_slot1;
                var4 = 36;
                var1 = var18[var4];
                var7 = var16.bind(var3)(var1);
                var11 = null;
                var6 = var11 != var10;
                var1 = 'Guild must not be null';
                var1 = var7.bind(var3)(var6, var1);
                var6 = _closure1_slot14;
                var1 = var6.getCurrentUser;
                var1 = var1.bind(var6)();
                var _closure2_slot3 = var1;
                var4 = var18[var4];
                var7 = var16.bind(var3)(var4);
                var6 = var11 != var1;
                var4 = 'AddMembers: user cannot be undefined';
                var4 = var7.bind(var3)(var6, var4);
                var7 = _closure1_slot12;
                var6 = var7.can;
                var4 = _closure1_slot17;
                var4 = var4.ADMINISTRATOR;
                var17 = var6.bind(var7)(var4, var10);
                var _closure2_slot4 = var17;
                var4 = _closure1_slot9;
                var15 = var4.bind(var3)(var10, var1);
                var _closure2_slot5 = var15;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var4 = {};
                var7 = var6.bind(var7)(var4);
                var6 = _closure1_slot3;
                var4 = 2;
                var8 = var6.bind(var3)(var7, var4);
                var7 = 0;
                var9 = var8[var7];
                var _closure2_slot6 = var9;
                var6 = 1;
                var8 = var8[var6];
                var14 = 41;
                var14 = var18[var14];
                var14 = var16.bind(var3)(var14);
                var2 = var2.onChannelCreated;
                var16 = var14.bind(var3)(var2);
                var14 = _closure1_slot3;
                var2 = 3;
                var2 = var14.bind(var3)(var16, var2);
                var7 = var2[var7];
                var _closure2_slot7 = var7;
                var16 = var2[var6];
                var14 = var2[var4];
                var _closure2_slot8 = var14;
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var4.bind(var6)(var2);
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(6);
                var2[0] = var17;
                var2[1] = var15;
                var2[2] = var12;
                var2[3] = var14;
                var2[4] = var9;
                var1 = var1.id;
                var2[5] = var1;
                var1 = function() { // Environment: var0
                    _fun65594: for (var _fun65594_ip = 0;;) switch (_fun65594_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.current;
                            var7 = var0.guildId;
                            var4 = var0.channelType;
                            var _closure3_slot0 = var4;
                            var9 = var0.name;
                            var8 = var0.categoryId;
                            var6 = var0.onChannelCreated;
                            var3 = var0.flags;
                            var11 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var13 = 48;
                            var10 = var0[var13];
                            var0 = undefined;
                            var14 = var11.bind(var0)(var10);
                            var12 = var14.permissionOverwritesForRoles;
                            var16 = new Array(0);
                            var15 = true;
                            var19 = var14;
                            var18 = var7;
                            var17 = var4;
                            var10 = var19[var12](var18, var17, var16, var15, var14);
                            var _closure3_slot1 = var10;
                            var11 = global;
                            var14 = var11.Object;
                            var12 = var14.values;
                            var11 = _closure2_slot6;
                            var12 = var12.bind(var14)(var11);
                            var11 = var12.forEach;
                            var5 = function(arg0) { // Environment: var5
                                _fun65595: for (var _fun65595_ip = 0;;) switch (_fun65595_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.row;
                                        var1 = var3.id;
                                        var0 = null;
                                        var0 = var0 != var1;
                                        if (!var0) {
                                            _fun65595_ip = 36;
                                            continue _fun65595
                                        }
                                    case 23:
                                        var2 = var3.id;
                                        var1 = '';
                                        var0 = var1 !== var2;
                                    case 36:
                                        if (!var0) {
                                            _fun65595_ip = 210;
                                            continue _fun65595
                                        }
                                    case 42:
                                        var1 = var3.rowType;
                                        var0 = _closure1_slot20;
                                        var0 = var0.ROLE;
                                        if (!(var1 !== var0)) {
                                            _fun65595_ip = 150;
                                            continue _fun65595
                                        }
                                    case 65:
                                        var1 = var3.rowType;
                                        var0 = _closure1_slot20;
                                        var0 = var0.MEMBER;
                                        if (!(var1 === var0)) {
                                            _fun65595_ip = 210;
                                            continue _fun65595
                                        }
                                    case 88:
                                        var2 = _closure3_slot1;
                                        var1 = var2.push;
                                        var7 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var5 = 48;
                                        var6 = var6[var5];
                                        var5 = undefined;
                                        var7 = var7.bind(var5)(var6);
                                        var6 = var7.permissionOverwriteForUser;
                                        var5 = var3.id;
                                        var0 = _closure3_slot0;
                                        var0 = var6.bind(var7)(var5, var0);
                                        var0 = var1.bind(var2)(var0);
                                        _fun65595_ip = 210;
                                        continue _fun65595;
                                    case 150:
                                        var2 = _closure3_slot1;
                                        var1 = var2.push;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var4 = 48;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var5 = var6.bind(var4)(var5);
                                        var4 = var5.permissionOverwriteForRole;
                                        var3 = var3.id;
                                        var0 = _closure3_slot0;
                                        var0 = var4.bind(var5)(var3, var0);
                                        var0 = var1.bind(var2)(var0);
                                    case 210:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var11.bind(var12)(var5);
                            var5 = _closure2_slot4;
                            if (var5) {
                                _fun65594_ip = 155;
                                continue _fun65594
                            }
                        case 151:
                            var5 = _closure2_slot5;
                        case 155:
                            if (var5) {
                                _fun65594_ip = 206;
                                continue _fun65594
                            }
                        case 158:
                            var11 = var10.push;
                            var12 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var13];
                            var13 = var12.bind(var0)(var5);
                            var12 = var13.permissionOverwriteForUser;
                            var5 = _closure2_slot3;
                            var5 = var5.id;
                            var5 = var12.bind(var13)(var5, var4);
                            var5 = var11.bind(var10)(var5);
                        case 206:
                            var5 = {};
                            var5.overwrites = var10;
                            var5.guildId = var7;
                            var5.channelType = var4;
                            var5.name = var9;
                            var5.categoryId = var8;
                            var5.flags = var3;
                            var3 = _closure1_slot15;
                            var3 = var3.GUILD_STAGE_VOICE;
                            if (!(var4 !== var3)) {
                                _fun65594_ip = 260;
                                continue _fun65594
                            }
                        case 249:
                            var3 = _closure2_slot8;
                            var3 = var3.bind(var0)(var5);
                            _fun65594_ip = 315;
                            continue _fun65594;
                        case 260:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = _closure1_slot27;
                            var2 = var1.ADD_MODERATORS;
                            var1 = {};
                            var18 = var1;
                            var17 = var5;
                            var5 = copyDataProperties(var18, var17);
                            var5 = 'guildId';
                            var1[var5] = var7;
                            var5 = 'onChannelCreated';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var2, var1);
                        case 315:
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var1, var2);
                var _closure2_slot9 = var6;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var12;
                var1[1] = var9;
                var1[2] = var7;
                var1[3] = var6;
                var0 = function() { // Environment: var0
                    _fun65596: for (var _fun65596_ip = 0;;) switch (_fun65596_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.current;
                            var3 = var0.channelType;
                            var9 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 26;
                            var6 = var1[var8];
                            var0 = undefined;
                            var6 = var9.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var1 = var1[var8];
                            var1 = var9.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1["5Wxrcd"];
                            var1 = var6.bind(var7)(var1);
                            var _closure3_slot0 = var1;
                            var1 = global;
                            var7 = var1.Object;
                            var6 = var7.keys;
                            var1 = _closure2_slot6;
                            var1 = var6.bind(var7)(var1);
                            var6 = var1.length;
                            var1 = 0;
                            if (!(var6 > var1)) {
                                _fun65596_ip = 244;
                                continue _fun65596
                            }
                        case 120:
                            var1 = _closure1_slot15;
                            var1 = var1.GUILD_STAGE_VOICE;
                            if (!(var3 !== var1)) {
                                _fun65596_ip = 188;
                                continue _fun65596
                            }
                        case 134:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var8];
                            var3 = var7.bind(var0)(var3);
                            var6 = var3.intl;
                            var3 = var6.string;
                            var1 = var1[var8];
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.CumH4u;
                            var1 = var3.bind(var6)(var1);
                            _fun65596_ip = 240;
                            continue _fun65596;
                        case 188:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var8];
                            var3 = var7.bind(var0)(var3);
                            var6 = var3.intl;
                            var3 = var6.string;
                            var2 = var2[var8];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2.PDTjLN;
                            var1 = var3.bind(var6)(var2);
                        case 240:
                            _closure3_slot0 = var1;
                        case 244:
                            var3 = _closure2_slot2;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = _closure2_slot7;
                            if (var4) {
                                _fun65596_ip = 272;
                                continue _fun65596
                            }
                        case 263:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot21;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 45;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var0.text = var4;
                                var4 = _closure2_slot9;
                                var0.onPress = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            _fun65596_ip = 279;
                            continue _fun65596;
                        case 272:
                            var4 = function() { // Environment: var5
                                var3 = _closure1_slot21;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 43;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderSubmittingIndicator;
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 279:
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var13.addMembersContainer;
                var0.style = var4;
                var4 = var16.message;
                var4 = var11 != var4;
                var6 = null;
                if (!var4) {
                    _fun65592_ip = 588;
                    continue _fun65592
                }
            case 472:
                var7 = var16.message;
                var4 = '';
                var6 = null;
                if (!(var4 !== var7)) {
                    _fun65592_ip = 588;
                    continue _fun65592
                }
            case 487:
                var12 = _closure1_slot21;
                var7 = _closure1_slot6;
                var4 = {};
                var13 = var13.errorMessage;
                var4.style = var13;
                var15 = _closure1_slot21;
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 56;
                var13 = var19[var17];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var18 = _closure1_slot0;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.HelpMessageTypes;
                var17 = var17.ERROR;
                var13.messageType = var17;
                var16 = var16.message;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var4.children = var13;
                var6 = var12.bind(var3)(var7, var4);
            case 588:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot21;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 57;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.AddMembersBody;
                var5 = {};
                var5.channel = var11;
                var5.guild = var10;
                var5.pendingAdditions = var9;
                var5.setPendingAdditions = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun65599: for (var _fun65599_ip = 0;;) switch (_fun65599_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = arg1;
                if (!(var0 == var1)) {
                    _fun65599_ip = 314;
                    continue _fun65599
                }
            case 15:
                if (!(var0 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 22:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 42:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 59:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_STAGE_VOICE;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 76:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 93:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 110:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 252;
                    continue _fun65599
                }
            case 127:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var4)) {
                    _fun65599_ip = 193;
                    continue _fun65599
                }
            case 141:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unsupported channelType: ';
                var6 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 193:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["ISN+NM"];
                var0 = var1.bind(var2)(var0);
                return var0;
            case 252:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["fUYU+j"];
                var0 = var1.bind(var2)(var0);
                return var0;
            case 314:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.dEaPc4;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var14.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
    var _closure1_slot7 = var7;
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot15 = var7;
    var8 = var4.GuildFeatures;
    var _closure1_slot16 = var8;
    var8 = var4.Permissions;
    var _closure1_slot17 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot18 = var8;
    var4 = var4.HelpdeskArticles;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RowType;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var8 = var4.Fragment;
    var _closure1_slot22 = var8;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var13 = 14;
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var13;
    var10.flex = var12;
    var4.addMembersContainer = var10;
    var10 = {};
    var10.marginBottom = var11;
    var4.errorMessage = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.flexRow = var10;
    var10 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var4.horizontalContainer = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot24 = var4;
    var4 = {};
    var9 = var7.GUILD_TEXT;
    var8 = {};
    var10 = 15;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.TextIcon;
    var8.IconComponent = var10;
    var4[var9] = var8;
    var9 = var7.GUILD_FORUM;
    var8 = {};
    var10 = 16;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.ForumIcon;
    var8.IconComponent = var10;
    var4[var9] = var8;
    var9 = var7.GUILD_VOICE;
    var8 = {};
    var10 = 17;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.VoiceNormalIcon;
    var8.IconComponent = var10;
    var4[var9] = var8;
    var9 = var7.GUILD_STAGE_VOICE;
    var8 = {};
    var10 = 18;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.StageIcon;
    var8.IconComponent = var10;
    var4[var9] = var8;
    var9 = var7.GUILD_ANNOUNCEMENT;
    var8 = {};
    var10 = 19;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.AnnouncementsIcon;
    var8.IconComponent = var10;
    var4[var9] = var8;
    var10 = var7.GUILD_MEDIA;
    var8 = {};
    var9 = 20;
    var11 = var6[var9];
    var11 = var5.bind(var0)(var11);
    var11 = var11.ImageIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var10 = var7.GUILD_TEXT;
    var8 = {};
    var11 = 21;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.TextLockIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var10 = var7.GUILD_FORUM;
    var8 = {};
    var11 = 22;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.ForumLockIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var10 = var7.GUILD_VOICE;
    var8 = {};
    var11 = 23;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.VoiceLockIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var10 = var7.GUILD_STAGE_VOICE;
    var8 = {};
    var11 = 24;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.StageLockIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var10 = var7.GUILD_ANNOUNCEMENT;
    var8 = {};
    var11 = 25;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.AnnouncementsLockIcon;
    var8.IconComponent = var11;
    var4[var10] = var8;
    var8 = var7.GUILD_MEDIA;
    var7 = {};
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.ImageIcon;
    var7.IconComponent = var9;
    var4[var8] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'CREATE_CHANNEL';
    var4.CREATE_CHANNEL = var7;
    var7 = 'ADD_MEMBERS';
    var4.ADD_MEMBERS = var7;
    var7 = 'ADD_MODERATORS';
    var4.ADD_MODERATORS = var7;
    var _closure1_slot27 = var4;
    var4 = 62;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/CreateChannelModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 60;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var1 = function() { // Environment: var1
            var0 = {};
            var1 = _closure1_slot27;
            var1 = var1.CREATE_CHANNEL;
            var0.name = var1;
            var1 = {};
            var15 = _closure2_slot0;
            var16 = var1;
            var2 = copyDataProperties(var16, var15);
            var0.params = var1;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = {};
            var2 = {};
            var4 = _closure1_slot27;
            var6 = var4.CREATE_CHANNEL;
            var4 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 58;
            var7 = var11[var12];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var7 = var7.ImpressionNames;
            var7 = var7.CHANNEL_ADD_INFO;
            var4.impressionName = var7;
            var7 = {};
            var8 = var11[var12];
            var8 = var10.bind(var9)(var8);
            var8 = var8.ImpressionGroups;
            var8 = var8.CHANNEL_ADD_FLOW;
            var7.impression_group = var8;
            var4.impressionProperties = var7;
            var7 = function arg0() {
                var3 = _closure1_slot21;
                var2 = _closure1_slot29;
                var1 = {};
                var4 = arg0;
                var5 = var1;
                var0 = copyDataProperties(var5, var4);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var4.render = var7;
            var2[var6] = var4;
            var4 = _closure1_slot27;
            var7 = var4.ADD_MEMBERS;
            var4 = {};
            var6 = 26;
            var8 = var11[var6];
            var8 = var10.bind(var9)(var8);
            var14 = var8.intl;
            var13 = var14.string;
            var8 = var11[var6];
            var8 = var10.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.dMJ3Y6;
            var8 = var13.bind(var14)(var8);
            var4.headerTitle = var8;
            var8 = var11[var12];
            var8 = var10.bind(var9)(var8);
            var8 = var8.ImpressionNames;
            var8 = var8.CHANNEL_ADD_MEMBERS;
            var4.impressionName = var8;
            var8 = {};
            var12 = var11[var12];
            var12 = var10.bind(var9)(var12);
            var12 = var12.ImpressionGroups;
            var12 = var12.CHANNEL_ADD_FLOW;
            var8.impression_group = var12;
            var4.impressionProperties = var8;
            var8 = function arg0() {
                var3 = _closure1_slot21;
                var2 = _closure1_slot30;
                var1 = {};
                var4 = arg0;
                var5 = var1;
                var0 = copyDataProperties(var5, var4);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var4.render = var8;
            var2[var7] = var4;
            var3 = _closure1_slot27;
            var4 = var3.ADD_MODERATORS;
            var3 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.n3bcy8;
            var6 = var7.bind(var8)(var6);
            var3.headerTitle = var6;
            var5 = function arg0() {
                var3 = _closure1_slot21;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 59;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var5 = arg0;
                var6 = var0;
                var4 = copyDataProperties(var6, var5);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var3.render = var5;
            var2[var4] = var3;
            var0.screens = var2;
            var0.initialStack = var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var5 = var1.screens;
        var4 = var1.initialStack;
        var2 = _closure1_slot21;
        var1 = _closure1_slot0;
        var0 = 61;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var0.initialRouteStack = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.CreateChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1376, 1416, 1372, 1410, 3082, 3091, 1613, 660, 5914, 33, 1297, 671, 4841, 4847, 4858, 4855, 4852, 4846, 4839, 4845, 4856, 4854, 4851, 1234, 3932, 5327, 1675, 4893, 5418, 5373, 5359, 4888, 566, 44, 4787, 4238, 8124, 1469, 8125, 4298, 4700, 8127, 5317, 8128, 22, 4232, 4071, 5384, 5397, 5358, 8131, 5411, 4853, 6437, 8132, 481, 8143, 4923, 5781, 2]);