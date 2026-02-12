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
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'right';
    var9.textAlign = var10;
    var3.value = var9;
    var9 = {
        'display': 'flex',
        'flex': 0,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.trailingFlex = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = 11;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FormRow;
    var8 = var6.Arrow;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot17 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FormRow;
    var6 = var3.Arrow;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot18 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun117712: for (var _fun117712_ip = 0;;) switch (_fun117712_ip) {
            case 0:
                var1 = _closure1_slot16;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var1 = var2[var1];
                var4 = var5.bind(var3)(var1);
                var1 = var4.useEnableCommunitySharedStyles;
                var9 = var1.bind(var4)();
                var1 = 13;
                var4 = var2[var1];
                var8 = var5.bind(var3)(var4);
                var7 = var8.useStateFromStoresObject;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var7.bind(var8)(var6, var4);
                var4 = var4.guild;
                var _closure2_slot0 = var4;
                var1 = var2[var1];
                var7 = var5.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    _fun117714: for (var _fun117714_ip = 0;;) switch (_fun117714_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot7;
                            var5 = var7.getChannel;
                            var2 = _closure2_slot0;
                            var6 = null;
                            var8 = var6 == var2;
                            var2 = undefined;
                            if (var8) {
                                _fun117714_ip = 42;
                                continue _fun117714
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
                                _fun117714_ip = 84;
                                continue _fun117714
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
                var5 = var6.bind(var7)(var5, var1);
                var1 = var5.rulesChannel;
                var _closure2_slot1 = var1;
                var5 = var5.publicUpdatesChannel;
                var _closure2_slot2 = var5;
                var6 = _closure1_slot1;
                var10 = 14;
                var2 = var2[var10];
                var2 = var6.bind(var3)(var2);
                var7 = true;
                var24 = var2.bind(var3)(var1, var7);
                var2 = null;
                if (!(var2 == var24)) {
                    _fun117712_ip = 242;
                    continue _fun117712
                }
            case 187:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 15;
                var8 = var13[var6];
                var8 = var12.bind(var3)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Cla0re;
                var24 = var8.bind(var11)(var6);
            case 242:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var8.bind(var3)(var6);
                var16 = var6.bind(var3)(var5, var7);
                if (!(var2 == var16)) {
                    _fun117712_ip = 324;
                    continue _fun117712
                }
            case 269:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 15;
                var7 = var11[var6];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Cla0re;
                var16 = var7.bind(var8)(var6);
            case 324:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 16;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var8 = var6.bind(var3)();
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var10 = var2 == var4;
                var2 = undefined;
                if (var10) {
                    _fun117712_ip = 371;
                    continue _fun117712
                }
            case 366:
                var2 = var4.id;
            case 371:
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun117715: for (var _fun117715_ip = 0;;) switch (_fun117715_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var2 = var4.getChannels;
                            var1 = _closure2_slot0;
                            var5 = null;
                            var7 = var5 == var1;
                            var9 = undefined;
                            var1 = undefined;
                            if (var7) {
                                _fun117715_ip = 44;
                                continue _fun117715
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
                            var2 = 15;
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
                                _fun117715_ip = 168;
                                continue _fun117715
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
                                var2 = 14;
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
                var6 = var6.bind(var7)(var2, var4);
                var _closure2_slot3 = var6;
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun117718: for (var _fun117718_ip = 0;;) switch (_fun117718_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 17;
                            var1 = var10[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var1 = 19;
                            var1 = var10[var1];
                            var3 = var9.bind(var0)(var1);
                            var1 = 18;
                            var2 = var10[var1];
                            var1 = var10.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 15;
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
                                var0 = 20;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.rulesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 17;
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
                                _fun117718_ip = 171;
                                continue _fun117718
                            }
                        case 162:
                            var8 = _closure2_slot1;
                            var1 = var8.id;
                        case 171:
                            if (!(var7 == var1)) {
                                _fun117718_ip = 179;
                                continue _fun117718
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
                var20 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun117720: for (var _fun117720_ip = 0;;) switch (_fun117720_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 17;
                            var1 = var10[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.openLazy;
                            var9 = _closure1_slot0;
                            var1 = 19;
                            var1 = var10[var1];
                            var3 = var9.bind(var0)(var1);
                            var1 = 18;
                            var2 = var10[var1];
                            var1 = var10.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 15;
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
                                var0 = 20;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.publicUpdatesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 17;
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
                                _fun117720_ip = 171;
                                continue _fun117720
                            }
                        case 162:
                            var8 = _closure2_slot2;
                            var1 = var8.id;
                        case 171:
                            if (!(var7 == var1)) {
                                _fun117720_ip = 179;
                                continue _fun117720
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
                var18 = _closure1_slot2;
                var4 = 21;
                var0 = var18[var4];
                var0 = var15.bind(var3)(var0);
                var1 = var0.EnableCommunityModalScreen;
                var0 = {};
                var5 = false;
                var0.disableNextStep = var5;
                var4 = var18[var4];
                var4 = var15.bind(var3)(var4);
                var4 = var4.EnableCommunityModalSteps;
                var4 = var4.STEP_2;
                var0.currentStep = var4;
                var12 = _closure1_slot5;
                var4 = {};
                var5 = var9.content;
                var4.style = var5;
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
                var6 = 22;
                var8 = var18[var6];
                var8 = var15.bind(var3)(var8);
                var13 = var8.LegacyText;
                var8 = {};
                var11 = var9.header;
                var8.style = var11;
                var11 = 15;
                var19 = var18[var11];
                var19 = var15.bind(var3)(var19);
                var22 = var19.intl;
                var21 = var22.string;
                var19 = var18[var11];
                var19 = var15.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.YtXpEh;
                var19 = var21.bind(var22)(var19);
                var8.children = var19;
                var8 = var7.bind(var3)(var13, var8);
                var5[1] = var8;
                var6 = var18[var6];
                var6 = var15.bind(var3)(var6);
                var8 = var6.LegacyText;
                var6 = {};
                var9 = var9.description;
                var6.style = var9;
                var9 = var18[var11];
                var9 = var15.bind(var3)(var9);
                var19 = var9.intl;
                var13 = var19.string;
                var9 = var18[var11];
                var9 = var15.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["J/fYR8"];
                var9 = var13.bind(var19)(var9);
                var6.children = var9;
                var6 = var7.bind(var3)(var8, var6);
                var5[2] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var12, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var8 = 11;
                var5 = var18[var8];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var9 = var18[var8];
                var9 = var15.bind(var3)(var9);
                var13 = var9.FormHint;
                var9 = {};
                var19 = var18[var11];
                var19 = var15.bind(var3)(var19);
                var22 = var19.intl;
                var21 = var22.string;
                var19 = var18[var11];
                var19 = var15.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["+Af+Vw"];
                var19 = var21.bind(var22)(var19);
                var9.children = var19;
                var9 = var7.bind(var3)(var13, var9);
                var5.hint = var9;
                var9 = var18[var8];
                var9 = var15.bind(var3)(var9);
                var19 = var9.FormRow;
                var9 = {};
                var13 = var18[var11];
                var13 = var15.bind(var3)(var13);
                var22 = var13.intl;
                var21 = var22.string;
                var13 = var18[var11];
                var13 = var15.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.dYrhCO;
                var13 = var21.bind(var22)(var13);
                var9.label = var13;
                var21 = {};
                var13 = var17.trailingFlex;
                var21.style = var13;
                var13 = 23;
                var22 = var18[var13];
                var22 = var15.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var25 = var17.value;
                var22.style = var25;
                var22.children = var24;
                var23 = var7.bind(var3)(var23, var22);
                var22 = new Array(2);
                var22[0] = var23;
                var23 = _closure1_slot17;
                var22[1] = var23;
                var21.children = var22;
                var21 = var2.bind(var3)(var12, var21);
                var9.trailing = var21;
                var9.onPress = var20;
                var9 = var7.bind(var3)(var19, var9);
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = var18[var8];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var9 = var18[var8];
                var9 = var15.bind(var3)(var9);
                var19 = var9.FormHint;
                var9 = {};
                var20 = var18[var11];
                var20 = var15.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var18[var11];
                var20 = var15.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.ZFeonu;
                var20 = var21.bind(var22)(var20);
                var9.children = var20;
                var9 = var7.bind(var3)(var19, var9);
                var5.hint = var9;
                var8 = var18[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var19 = var18[var11];
                var19 = var15.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var11 = var18[var11];
                var11 = var15.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.vAyDGU;
                var11 = var19.bind(var20)(var11);
                var8.label = var11;
                var11 = {};
                var19 = var17.trailingFlex;
                var11.style = var19;
                var13 = var18[var13];
                var13 = var15.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var17 = var17.value;
                var13.style = var17;
                var13.children = var16;
                var15 = var7.bind(var3)(var15, var13);
                var13 = new Array(2);
                var13[0] = var15;
                var14 = _closure1_slot18;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8285, 1372, 1673, 3102, 1621, 6847, 660, 33, 1297, 5441, 15002, 566, 4768, 1234, 15003, 3279, 5496, 1307, 8284, 15000, 4852, 3938, 2]);