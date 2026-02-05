// modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'right';
    var8.textAlign = var9;
    var3.value = var8;
    var8 = {
        'display': 'flex',
        'flex': 0,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.trailingFlex = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun116490: for (var _fun116490_ip = 0;;) switch (_fun116490_ip) {
            case 0:
                var1 = _closure1_slot16;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var1 = var2[var1];
                var4 = var6.bind(var3)(var1);
                var1 = var4.useEnableCommunitySharedStyles;
                var9 = var1.bind(var4)();
                var1 = 12;
                var4 = var2[var1];
                var10 = var6.bind(var3)(var4);
                var8 = var10.useStateFromStoresObject;
                var4 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var8.bind(var10)(var7, var4);
                var4 = var4.guild;
                var _closure2_slot0 = var4;
                var1 = var2[var1];
                var8 = var6.bind(var3)(var1);
                var7 = var8.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    _fun116492: for (var _fun116492_ip = 0;;) switch (_fun116492_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot7;
                            var5 = var7.getChannel;
                            var2 = _closure2_slot0;
                            var6 = null;
                            var8 = var6 == var2;
                            var2 = undefined;
                            if (var8) {
                                _fun116492_ip = 42;
                                continue _fun116492
                            }
                        case 32:
                            var8 = _closure2_slot0;
                            var2 = var8.rulesChannelId;
                        case 42:
                            var2 = var5.bind(var7)(var2);
                            var0.rulesChannel = var2;
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var5 = _closure2_slot0;
                            var5 = var6 == var5;
                            var3 = undefined;
                            if (var5) {
                                _fun116492_ip = 84;
                                continue _fun116492
                            }
                        case 74:
                            var4 = _closure2_slot0;
                            var3 = var4.publicUpdatesChannelId;
                        case 84:
                            var1 = var1.bind(var2)(var3);
                            var0.publicUpdatesChannel = var1;
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6, var1);
                var1 = var6.rulesChannel;
                var _closure2_slot1 = var1;
                var6 = var6.publicUpdatesChannel;
                var _closure2_slot2 = var6;
                var7 = _closure1_slot1;
                var11 = 13;
                var2 = var2[var11];
                var2 = var7.bind(var3)(var2);
                var8 = true;
                var23 = var2.bind(var3)(var1, var8);
                var2 = null;
                if (!(var2 == var23)) {
                    _fun116490_ip = 242;
                    continue _fun116490
                }
            case 187:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 14;
                var10 = var14[var7];
                var10 = var13.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Cla0re;
                var23 = var10.bind(var12)(var7);
            case 242:
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var10.bind(var3)(var7);
                var18 = var7.bind(var3)(var6, var8);
                if (!(var2 == var18)) {
                    _fun116490_ip = 324;
                    continue _fun116490
                }
            case 269:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 14;
                var8 = var12[var7];
                var8 = var11.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Cla0re;
                var18 = var8.bind(var10)(var7);
            case 324:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 15;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.bind(var3)();
                var10 = _closure1_slot3;
                var7 = var10.useCallback;
                var11 = var2 == var4;
                var2 = undefined;
                if (var11) {
                    _fun116490_ip = 371;
                    continue _fun116490
                }
            case 366:
                var2 = var4.id;
            case 371:
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun116493: for (var _fun116493_ip = 0;;) switch (_fun116493_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var2 = var4.getChannels;
                            var1 = _closure2_slot0;
                            var5 = null;
                            var7 = var5 == var1;
                            var9 = undefined;
                            var1 = undefined;
                            if (var7) {
                                _fun116493_ip = 44;
                                continue _fun116493
                            }
                        case 35:
                            var6 = _closure2_slot0;
                            var1 = var6.id;
                        case 44:
                            var4 = var2.bind(var4)(var1);
                            var1 = {};
                            var2 = _closure1_slot12;
                            var1.value = var2;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 14;
                            var6 = var10[var2];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var2 = var10[var2];
                            var2 = var8.bind(var9)(var2);
                            var2 = var2.t;
                            var2 = var2.Cla0re;
                            var2 = var6.bind(var7)(var2);
                            var1.label = var2;
                            var2 = new Array(0);
                            if (!(var5 != var4)) {
                                _fun116493_ip = 168;
                                continue _fun116493
                            }
                        case 126:
                            var3 = _closure1_slot9;
                            var5 = var4[var3];
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.channel;
                                var1 = var0.type;
                                var0 = _closure1_slot13;
                                var0 = var0.GUILD_TEXT;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var6 = var0.channel;
                                var0 = {};
                                var1 = var6.id;
                                var0.value = var1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 13;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.computeChannelName;
                                var9 = _closure1_slot11;
                                var8 = _closure1_slot10;
                                var7 = true;
                                var11 = var5;
                                var10 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                var0.label = var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var0);
                        case 168:
                            var0 = new Array(1);
                            var0[0] = var1;
                            var11 = 1;
                            var13 = var0;
                            var12 = var2;
                            var1 = arraySpread(var13, var12, var11);
                            return var0;
                    }
                };
                var7 = var7.bind(var10)(var2, var4);
                var _closure2_slot3 = var7;
                var4 = _closure1_slot3;
                var10 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun116496: for (var _fun116496_ip = 0;;) switch (_fun116496_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 16;
                            var1 = var10[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var1 = 18;
                            var1 = var10[var1];
                            var3 = var9.bind(var0)(var1);
                            var1 = 17;
                            var2 = var10[var1];
                            var1 = var10.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 14;
                            var7 = var10[var1];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var1 = var10[var1];
                            var1 = var9.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.Yr6nGx;
                            var1 = var7.bind(var8)(var1);
                            var2.title = var1;
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                            var2.items = var1;
                            var1 = function arg0() {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 19;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.rulesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 16;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onItemSelect = var1;
                            var1 = _closure2_slot1;
                            var7 = null;
                            var9 = var7 == var1;
                            var1 = undefined;
                            if (var9) {
                                _fun116496_ip = 171;
                                continue _fun116496
                            }
                        case 162:
                            var8 = _closure2_slot1;
                            var1 = var8.id;
                        case 171:
                            if (!(var7 == var1)) {
                                _fun116496_ip = 179;
                                continue _fun116496
                            }
                        case 175:
                            var1 = _closure1_slot12;
                        case 179:
                            var2.selectedItem = var1;
                            var1 = 'SelectRulesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var17 = var10.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun116498: for (var _fun116498_ip = 0;;) switch (_fun116498_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 16;
                            var1 = var10[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var1 = 18;
                            var1 = var10[var1];
                            var3 = var9.bind(var0)(var1);
                            var1 = 17;
                            var2 = var10[var1];
                            var1 = var10.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 14;
                            var7 = var10[var1];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var1 = var10[var1];
                            var1 = var9.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.VqhxxN;
                            var1 = var7.bind(var8)(var1);
                            var2.title = var1;
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                            var2.items = var1;
                            var1 = function arg0() {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 19;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.publicUpdatesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 16;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onItemSelect = var1;
                            var1 = _closure2_slot2;
                            var7 = null;
                            var9 = var7 == var1;
                            var1 = undefined;
                            if (var9) {
                                _fun116498_ip = 171;
                                continue _fun116498
                            }
                        case 162:
                            var8 = _closure2_slot2;
                            var1 = var8.id;
                        case 171:
                            if (!(var7 == var1)) {
                                _fun116498_ip = 179;
                                continue _fun116498
                            }
                        case 175:
                            var1 = _closure1_slot12;
                        case 179:
                            var2.selectedItem = var1;
                            var1 = 'SelectUpdatesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot15;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 20;
                var0 = var16[var4];
                var0 = var15.bind(var3)(var0);
                var1 = var0.EnableCommunityModalScreen;
                var0 = {};
                var6 = false;
                var0.disableNextStep = var6;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var4 = var4.EnableCommunityModalSteps;
                var4 = var4.STEP_2;
                var0.currentStep = var4;
                var12 = _closure1_slot5;
                var4 = {};
                var6 = var9.content;
                var4.style = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot4;
                var5 = {};
                var11 = 'contain';
                var5.resizeMode = var11;
                var8 = var8.channelSetup;
                var5.source = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = 21;
                var8 = var16[var6];
                var8 = var15.bind(var3)(var8);
                var13 = var8.LegacyText;
                var8 = {};
                var11 = var9.header;
                var8.style = var11;
                var11 = 14;
                var14 = var16[var11];
                var14 = var15.bind(var3)(var14);
                var21 = var14.intl;
                var20 = var21.string;
                var14 = var16[var11];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.YtXpEh;
                var14 = var20.bind(var21)(var14);
                var8.children = var14;
                var8 = var7.bind(var3)(var13, var8);
                var5[1] = var8;
                var6 = var16[var6];
                var6 = var15.bind(var3)(var6);
                var8 = var6.LegacyText;
                var6 = {};
                var9 = var9.description;
                var6.style = var9;
                var9 = var16[var11];
                var9 = var15.bind(var3)(var9);
                var14 = var9.intl;
                var13 = var14.string;
                var9 = var16[var11];
                var9 = var15.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["J/fYR8"];
                var9 = var13.bind(var14)(var9);
                var6.children = var9;
                var6 = var7.bind(var3)(var8, var6);
                var5[2] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var12, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var14 = 22;
                var5 = var16[var14];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var8 = var16[var14];
                var8 = var15.bind(var3)(var8);
                var9 = var8.FormHint;
                var8 = {};
                var13 = var16[var11];
                var13 = var15.bind(var3)(var13);
                var21 = var13.intl;
                var20 = var21.string;
                var13 = var16[var11];
                var13 = var15.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["+Af+Vw"];
                var13 = var20.bind(var21)(var13);
                var8.children = var13;
                var8 = var7.bind(var3)(var9, var8);
                var5.hint = var8;
                var8 = var16[var14];
                var8 = var15.bind(var3)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var13 = var16[var11];
                var13 = var15.bind(var3)(var13);
                var21 = var13.intl;
                var20 = var21.string;
                var13 = var16[var11];
                var13 = var15.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.dYrhCO;
                var13 = var20.bind(var21)(var13);
                var8.label = var13;
                var20 = {};
                var13 = var19.trailingFlex;
                var20.style = var13;
                var13 = 23;
                var21 = var16[var13];
                var21 = var15.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var24 = var19.value;
                var21.style = var24;
                var21.children = var23;
                var22 = var7.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var22 = var16[var14];
                var22 = var15.bind(var3)(var22);
                var22 = var22.FormRow;
                var23 = var22.Arrow;
                var22 = {};
                var22 = var7.bind(var3)(var23, var22);
                var21[1] = var22;
                var20.children = var21;
                var20 = var2.bind(var3)(var12, var20);
                var8.trailing = var20;
                var8.onPress = var17;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = var16[var14];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var8 = var16[var14];
                var8 = var15.bind(var3)(var8);
                var9 = var8.FormHint;
                var8 = {};
                var17 = var16[var11];
                var17 = var15.bind(var3)(var17);
                var21 = var17.intl;
                var20 = var21.string;
                var17 = var16[var11];
                var17 = var15.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.ZFeonu;
                var17 = var20.bind(var21)(var17);
                var8.children = var17;
                var8 = var7.bind(var3)(var9, var8);
                var5.hint = var8;
                var8 = var16[var14];
                var8 = var15.bind(var3)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var17 = var16[var11];
                var17 = var15.bind(var3)(var17);
                var20 = var17.intl;
                var17 = var20.string;
                var11 = var16[var11];
                var11 = var15.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.vAyDGU;
                var11 = var17.bind(var20)(var11);
                var8.label = var11;
                var11 = {};
                var17 = var19.trailingFlex;
                var11.style = var17;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var17 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var19 = var19.value;
                var13.style = var19;
                var13.children = var18;
                var17 = var7.bind(var3)(var17, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.FormRow;
                var15 = var14.Arrow;
                var14 = {};
                var14 = var7.bind(var3)(var15, var14);
                var13[1] = var14;
                var11.children = var13;
                var11 = var2.bind(var3)(var12, var11);
                var8.trailing = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8175, 1372, 1671, 3100, 1621, 6772, 660, 33, 1297, 14854, 566, 4794, 1234, 14855, 3278, 5381, 1307, 8174, 14852, 4878, 5382, 3941, 2]);