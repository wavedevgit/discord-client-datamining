// modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot10 = var6;
    var6 = var3.MODERATOR_PERMISSIONS;
    var _closure1_slot11 = var6;
    var3 = var3.MODERATOR_PERMISSIONS_FLAG;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot13 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot14 = var6;
    var3 = var3.UserNotificationSettings;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun116268: for (var _fun116268_ip = 0;;) switch (_fun116268_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 8;
                var0 = var2[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var1 = _closure1_slot8;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var22 = var0.guild;
                var _closure2_slot0 = var22;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var26 = null;
                var4 = var26 == var22;
                var0 = undefined;
                if (var4) {
                    _fun116268_ip = 93;
                    continue _fun116268
                }
            case 87:
                var0 = var22.defaultMessageNotifications;
            case 93:
                var0 = var1.bind(var2)(var0);
                var6 = _closure1_slot4;
                var5 = 1;
                var0 = var6.bind(var3)(var0, var5);
                var2 = 0;
                var0 = var0[var2];
                var _closure2_slot1 = var0;
                var1 = _closure1_slot15;
                var1 = var1.ONLY_MENTIONS;
                var21 = var0 === var1;
                var4 = _closure1_slot5;
                var7 = var4.useState;
                var1 = false;
                var1 = var7.bind(var4)(var1);
                var7 = 2;
                var1 = var6.bind(var3)(var1, var7);
                var18 = var1[var2];
                var17 = var1[var5];
                var8 = var4.useState;
                var10 = _closure1_slot11;
                var9 = var10.some;
                var1 = function(arg0) { // Environment: var30
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.canEveryone;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = var9.bind(var10)(var1);
                var1 = !var1;
                var1 = var8.bind(var4)(var1);
                var1 = var6.bind(var3)(var1, var7);
                var25 = var1[var2];
                var23 = var1[var5];
                var1 = var4.useState;
                var1 = var1.bind(var4)(var25);
                var1 = var6.bind(var3)(var1, var5);
                var24 = var1[var2];
                var2 = var4.useCallback;
                var1 = var26 == var22;
                var5 = undefined;
                if (var1) {
                    _fun116268_ip = 257;
                    continue _fun116268
                }
            case 251:
                var5 = var22.defaultMessageNotifications;
            case 257:
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function(arg0) { // Environment: var30
                    _fun116271: for (var _fun116271_ip = 0;;) switch (_fun116271_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun116271_ip = 53;
                                continue _fun116271
                            }
                        case 6:
                            var3 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var3;
                            var2 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun116271_ip = 36;
                                continue _fun116271
                            }
                        case 26:
                            var1 = _closure2_slot0;
                            var4 = var1.defaultMessageNotifications;
                        case 36:
                            var1 = _closure1_slot15;
                            var1 = var1.ONLY_MENTIONS;
                            if (!(var4 === var1)) {
                                _fun116271_ip = 124;
                                continue _fun116271
                            }
                        case 53:
                            if (var0) {
                                _fun116271_ip = 69;
                                continue _fun116271
                            }
                        case 56:
                            var4 = _closure2_slot1;
                            var1 = null;
                            var0 = var1 == var4;
                        case 69:
                            if (var0) {
                                _fun116271_ip = 172;
                                continue _fun116271
                            }
                        case 72:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.updateGuild;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var0.defaultMessageNotifications = var5;
                            var0 = var1.bind(var4)(var0);
                            _fun116271_ip = 172;
                            continue _fun116271;
                        case 124:
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 10;
                            var0 = var4[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.updateGuild;
                            var0 = {};
                            var3 = _closure1_slot15;
                            var3 = var3.ONLY_MENTIONS;
                            var0.defaultMessageNotifications = var3;
                            var0 = var1.bind(var2)(var0);
                        case 172:
                            var0 = undefined;
                            return var0;
                    }
                };
                var20 = var2.bind(var4)(var0, var1);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var30
                    _fun116272: for (var _fun116272_ip = 0;;) switch (_fun116272_ip) {
                        case 0:
                            var1 = arg0;
                            var11 = null;
                            var2 = var11 != var1;
                            var0 = undefined;
                            var3 = undefined;
                            if (!var2) {
                                _fun116272_ip = 34;
                                continue _fun116272
                            }
                        case 16:
                            var4 = _closure1_slot9;
                            var2 = var4.getEveryoneRole;
                            var3 = var2.bind(var4)(var1);
                        case 34:
                            if (!(var11 != var3)) {
                                _fun116272_ip = 338;
                                continue _fun116272
                            }
                        case 41:
                            var2 = global;
                            var5 = var2.Set;
                            var14 = var1.features;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var15 = var4;
                            var2 = new var15[var5](var14, var13);
                            var10 = var2 instanceof Object ? var2 : var4;
                            var5 = var10.add;
                            var4 = _closure1_slot13;
                            var4 = var4.COMMUNITY;
                            var4 = var5.bind(var10)(var4);
                            var5 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var4 = 11;
                            var4 = var8[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.remove;
                            var5 = var3.permissions;
                            var4 = _closure1_slot12;
                            var4 = var6.bind(var7)(var5, var4);
                            var5 = {};
                            var14 = var5;
                            var13 = var3;
                            var6 = copyDataProperties(var14, var13);
                            var6 = 'permissions';
                            var5[var6] = var4;
                            var7 = _closure1_slot1;
                            var6 = 10;
                            var6 = var8[var6];
                            var9 = var7.bind(var0)(var6);
                            var8 = var9.saveGuild;
                            var7 = var1.id;
                            var6 = {};
                            var6.features = var10;
                            var10 = var1.rulesChannelId;
                            if (!(var11 == var10)) {
                                _fun116272_ip = 209;
                                continue _fun116272
                            }
                        case 205:
                            var10 = _closure1_slot10;
                        case 209:
                            var6.rulesChannelId = var10;
                            var10 = var1.safetyAlertsChannelId;
                            var6.safetyAlertsChannelId = var10;
                            var10 = var1.verificationLevel;
                            var6.verificationLevel = var10;
                            var10 = var1.explicitContentFilter;
                            var6.explicitContentFilter = var10;
                            var10 = var1.publicUpdatesChannelId;
                            if (!(var11 == var10)) {
                                _fun116272_ip = 261;
                                continue _fun116272
                            }
                        case 257:
                            var10 = _closure1_slot10;
                        case 261:
                            var6.publicUpdatesChannelId = var10;
                            var10 = var1.defaultMessageNotifications;
                            var6.defaultMessageNotifications = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var3 = var3.permissions;
                            if (!(var4 !== var3)) {
                                _fun116272_ip = 338;
                                continue _fun116272
                            }
                        case 293:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 12;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.saveRoleSettings;
                            var2 = var1.id;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 338:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var4 = var2.bind(var4)(var1, var0);
                var9 = _closure1_slot1;
                var27 = _closure1_slot3;
                var0 = 13;
                var0 = var27[var0];
                var0 = var9.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var28 = _closure1_slot0;
                var0 = 14;
                var0 = var27[var0];
                var1 = var28.bind(var3)(var0);
                var0 = var1.useEnableCommunitySharedStyles;
                var10 = var0.bind(var1)();
                var2 = _closure1_slot17;
                var5 = 15;
                var0 = var27[var5];
                var0 = var28.bind(var3)(var0);
                var1 = var0.EnableCommunityModalScreen;
                var0 = {};
                var5 = var27[var5];
                var5 = var28.bind(var3)(var5);
                var5 = var5.EnableCommunityModalSteps;
                var5 = var5.STEP_3;
                var0.currentStep = var5;
                var0.onSuccess = var4;
                var4 = !var18;
                var0.disableNextStep = var4;
                var8 = 16;
                var4 = var27[var8];
                var4 = var28.bind(var3)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var27[var8];
                var4 = var28.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.XGl4ba;
                var4 = var5.bind(var6)(var4);
                var0.buttonText = var4;
                var6 = _closure1_slot7;
                var4 = {};
                var5 = var10.content;
                var4.style = var5;
                var14 = _closure1_slot16;
                var7 = _closure1_slot6;
                var5 = {};
                var13 = 'contain';
                var5.resizeMode = var13;
                var11 = var11.finishingTouches;
                var5.source = var11;
                var5 = var14.bind(var3)(var7, var5);
                var7 = new Array(3);
                var7[0] = var5;
                var5 = 17;
                var11 = var27[var5];
                var11 = var28.bind(var3)(var11);
                var13 = var11.LegacyText;
                var11 = {};
                var15 = var10.header;
                var11.style = var15;
                var15 = var27[var8];
                var15 = var28.bind(var3)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var27[var8];
                var15 = var28.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["Pj/s/a"];
                var15 = var16.bind(var19)(var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var13, var11);
                var7[1] = var11;
                var11 = var27[var5];
                var11 = var28.bind(var3)(var11);
                var13 = var11.LegacyText;
                var11 = {};
                var15 = var10.description;
                var11.style = var15;
                var15 = var27[var8];
                var15 = var28.bind(var3)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var27[var8];
                var15 = var28.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["IL7/no"];
                var15 = var16.bind(var19)(var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var13, var11);
                var7[2] = var11;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var13 = 18;
                var6 = var27[var13];
                var6 = var28.bind(var3)(var6);
                var11 = var6.FormSection;
                var6 = {};
                var19 = 19;
                var7 = var27[var19];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.formSwitchDisabled = var21;
                var15 = var27[var13];
                var15 = var28.bind(var3)(var15);
                var16 = var15.FormSwitchRow;
                var15 = {};
                var29 = var27[var8];
                var29 = var28.bind(var3)(var29);
                var31 = var29.intl;
                var29 = var31.format;
                var27 = var27[var8];
                var27 = var28.bind(var3)(var27);
                var27 = var27.t;
                var28 = var27.K8Eg4P;
                var27 = {};
                var32 = function() {
                    var0 = null;
                    return var0;
                };
                var27.infoHook = var32;
                var27 = var29.bind(var31)(var28, var27);
                var15.label = var27;
                var27 = var26 == var22;
                var26 = undefined;
                if (var27) {
                    _fun116268_ip = 863;
                    continue _fun116268
                }
            case 857:
                var26 = var22.defaultMessageNotifications;
            case 863:
                var22 = _closure1_slot15;
                var22 = var22.ONLY_MENTIONS;
                var22 = var26 === var22;
                var15.value = var22;
                var15.disabled = var21;
                var15.onValueChange = var20;
                var15 = var14.bind(var3)(var16, var15);
                var7.children = var15;
                var7 = var14.bind(var3)(var9, var7);
                var16 = new Array(3);
                var16[0] = var7;
                var7 = _closure1_slot16;
                var9 = _closure1_slot0;
                var15 = _closure1_slot3;
                var14 = var15[var13];
                var14 = var9.bind(var3)(var14);
                var20 = var14.FormDivider;
                var14 = {};
                var14 = var7.bind(var3)(var20, var14);
                var16[1] = var14;
                var14 = _closure1_slot1;
                var19 = var15[var19];
                var20 = var14.bind(var3)(var19);
                var19 = {};
                var19.formSwitchDisabled = var24;
                var21 = var15[var13];
                var21 = var9.bind(var3)(var21);
                var22 = var21.FormSwitchRow;
                var21 = {};
                var26 = var15[var8];
                var26 = var9.bind(var3)(var26);
                var29 = var26.intl;
                var28 = var29.format;
                var26 = var15[var8];
                var26 = var9.bind(var3)(var26);
                var26 = var26.t;
                var27 = var26.v8qCoG;
                var26 = {};
                var30 = function() {
                    var0 = null;
                    return var0;
                };
                var26.infoHook = var30;
                var26 = var28.bind(var29)(var27, var26);
                var21.label = var26;
                var21.value = var25;
                var21.disabled = var24;
                var21.onValueChange = var23;
                var21 = var7.bind(var3)(var22, var21);
                var19.children = var21;
                var19 = var7.bind(var3)(var20, var19);
                var16[2] = var19;
                var6.children = var16;
                var6 = var2.bind(var3)(var11, var6);
                var4[1] = var6;
                var6 = var15[var13];
                var6 = var9.bind(var3)(var6);
                var11 = var6.FormSection;
                var6 = {};
                var16 = var15[var8];
                var16 = var9.bind(var3)(var16);
                var20 = var16.intl;
                var19 = var20.string;
                var16 = var15[var8];
                var16 = var9.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["k+b2Cf"];
                var16 = var19.bind(var20)(var16);
                var6.title = var16;
                var13 = var15[var13];
                var13 = var9.bind(var3)(var13);
                var16 = var13.FormSwitchRow;
                var13 = {};
                var19 = var15[var8];
                var19 = var9.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var15[var8];
                var19 = var9.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["9AG3wI"];
                var19 = var20.bind(var21)(var19);
                var13.label = var19;
                var13.value = var18;
                var13.onValueChange = var17;
                var13 = var7.bind(var3)(var16, var13);
                var6.children = var13;
                var6 = var7.bind(var3)(var11, var6);
                var4[2] = var6;
                var5 = var15[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var10 = var10.formHint;
                var5.style = var10;
                var10 = var15[var8];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["BwbW/Q"];
                var8 = {};
                var13 = 20;
                var16 = var15[var13];
                var18 = var14.bind(var3)(var16);
                var17 = var18.getArticleURL;
                var12 = _closure1_slot14;
                var16 = var12.PUBLIC_GUILD_GUILDLINES;
                var16 = var17.bind(var18)(var16);
                var8.communityGuidelines = var16;
                var13 = var15[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.getArticleURL;
                var12 = var12.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES;
                var12 = var13.bind(var14)(var12);
                var8.typesOfGuilds = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8148, 1665, 6747, 660, 33, 566, 3087, 8147, 484, 14760, 14799, 14798, 14796, 1234, 4871, 5373, 14808, 1675, 2]);