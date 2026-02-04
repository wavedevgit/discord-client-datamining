// modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.VerificationLevels;
    var _closure1_slot8 = var6;
    var3 = var3.GuildExplicitContentFilterTypes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun116285: for (var _fun116285_ip = 0;;) switch (_fun116285_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = var3.useEnableCommunitySharedStyles;
                var10 = var0.bind(var3)();
                var0 = 7;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStateFromStoresObject;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var1 = _closure1_slot7;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var5)(var1, var0);
                var21 = var0.guild;
                var _closure2_slot0 = var21;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var12 = var0.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var0 = null;
                var5 = var0 == var21;
                var1 = undefined;
                if (var5) {
                    _fun116285_ip = 135;
                    continue _fun116285
                }
            case 129:
                var1 = var21.verificationLevel;
            case 135:
                if (!(var0 == var1)) {
                    _fun116285_ip = 149;
                    continue _fun116285
                }
            case 139:
                var5 = _closure1_slot8;
                var1 = var5.NONE;
            case 149:
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot3;
                var6 = 1;
                var1 = var1.bind(var4)(var2, var6);
                var2 = 0;
                var3 = var1[var2];
                var _closure2_slot1 = var3;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var8 = var0 == var21;
                var1 = undefined;
                if (var8) {
                    _fun116285_ip = 201;
                    continue _fun116285
                }
            case 195:
                var1 = var21.explicitContentFilter;
            case 201:
                if (!(var0 == var1)) {
                    _fun116285_ip = 215;
                    continue _fun116285
                }
            case 205:
                var8 = _closure1_slot9;
                var1 = var8.ALL_MEMBERS;
            case 215:
                var5 = var5.bind(var7)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var5, var6);
                var2 = var1[var2];
                var _closure2_slot2 = var2;
                var1 = _closure1_slot8;
                var1 = var1.NONE;
                var25 = var3 !== var1;
                var1 = _closure1_slot9;
                var1 = var1.ALL_MEMBERS;
                var19 = var2 === var1;
                var1 = var0 == var21;
                var0 = null;
                if (var1) {
                    _fun116285_ip = 1185;
                    continue _fun116285
                }
            case 278:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 9;
                var1 = var7[var5];
                var1 = var6.bind(var4)(var1);
                var2 = var1.EnableCommunityModalScreen;
                var1 = {};
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.EnableCommunityModalSteps;
                var5 = var5.STEP_1;
                var1.currentStep = var5;
                var6 = var21.explicitContentFilter;
                var5 = _closure1_slot9;
                var5 = var5.ALL_MEMBERS;
                var5 = var6 !== var5;
                if (var5) {
                    _fun116285_ip = 379;
                    continue _fun116285
                }
            case 359:
                var7 = var21.verificationLevel;
                var6 = _closure1_slot8;
                var6 = var6.NONE;
                var5 = var7 === var6;
            case 379:
                var1.disableNextStep = var5;
                var11 = _closure1_slot11;
                var7 = _closure1_slot6;
                var5 = {};
                var6 = var10.content;
                var5.style = var6;
                var8 = _closure1_slot10;
                var9 = _closure1_slot5;
                var6 = {};
                var13 = 'contain';
                var6.resizeMode = var13;
                var12 = var12.safetyCheck;
                var6.source = var12;
                var6 = var8.bind(var4)(var9, var6);
                var14 = new Array(3);
                var14[0] = var6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 10;
                var9 = var13[var6];
                var9 = var12.bind(var4)(var9);
                var16 = var9.LegacyText;
                var15 = {};
                var9 = var10.header;
                var15.style = var9;
                var9 = 11;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var23 = var17.intl;
                var22 = var23.string;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.QrjLYl;
                var17 = var22.bind(var23)(var17);
                var15.children = var17;
                var15 = var8.bind(var4)(var16, var15);
                var14[1] = var15;
                var15 = var13[var6];
                var15 = var12.bind(var4)(var15);
                var16 = var15.LegacyText;
                var15 = {};
                var17 = var10.description;
                var15.style = var17;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var23 = var17.intl;
                var22 = var23.string;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.i1STwu;
                var17 = var22.bind(var23)(var17);
                var15.children = var17;
                var15 = var8.bind(var4)(var16, var15);
                var14[2] = var15;
                var5.children = var14;
                var7 = var11.bind(var4)(var7, var5);
                var5 = new Array(5);
                var5[0] = var7;
                var16 = 12;
                var7 = var13[var16];
                var7 = var12.bind(var4)(var7);
                var11 = var7.FormSection;
                var7 = {};
                var15 = _closure1_slot1;
                var14 = 13;
                var17 = var13[var14];
                var22 = var15.bind(var4)(var17);
                var17 = {};
                var17.formSwitchDisabled = var25;
                var23 = var13[var16];
                var23 = var12.bind(var4)(var23);
                var24 = var23.FormSwitchRow;
                var23 = {};
                var26 = var13[var9];
                var26 = var12.bind(var4)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var13[var9];
                var26 = var12.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26["rkA56+"];
                var26 = var27.bind(var28)(var26);
                var23.label = var26;
                var27 = var21.verificationLevel;
                var26 = _closure1_slot8;
                var26 = var26.NONE;
                var26 = var27 !== var26;
                var23.value = var26;
                var23.disabled = var25;
                var25 = function arg0() {
                    _fun116287: for (var _fun116287_ip = 0;;) switch (_fun116287_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun116287_ip = 36;
                                continue _fun116287
                            }
                        case 6:
                            var1 = _closure2_slot0;
                            var2 = var1.verificationLevel;
                            var1 = _closure1_slot8;
                            var1 = var1.LOW;
                            if (!(!(var2 < var1))) {
                                _fun116287_ip = 91;
                                continue _fun116287
                            }
                        case 36:
                            if (var0) {
                                _fun116287_ip = 141;
                                continue _fun116287
                            }
                        case 39:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateGuild;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var0.verificationLevel = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun116287_ip = 141;
                            continue _fun116287;
                        case 91:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateGuild;
                            var0 = {};
                            var3 = _closure1_slot8;
                            var3 = var3.LOW;
                            var0.verificationLevel = var3;
                            var0 = var1.bind(var2)(var0);
                        case 141:
                            var0 = undefined;
                            return var0;
                    }
                };
                var23.onValueChange = var25;
                var23 = var8.bind(var4)(var24, var23);
                var17.children = var23;
                var17 = var8.bind(var4)(var22, var17);
                var7.children = var17;
                var7 = var8.bind(var4)(var11, var7);
                var5[1] = var7;
                var7 = var13[var6];
                var7 = var12.bind(var4)(var7);
                var11 = var7.LegacyText;
                var7 = {};
                var17 = var10.formHint;
                var7.style = var17;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var23 = var17.intl;
                var22 = var23.string;
                var17 = var13[var9];
                var17 = var12.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.fHiGA0;
                var17 = var22.bind(var23)(var17);
                var7.children = var17;
                var7 = var8.bind(var4)(var11, var7);
                var5[2] = var7;
                var7 = var13[var16];
                var7 = var12.bind(var4)(var7);
                var11 = var7.FormSection;
                var7 = {};
                var14 = var13[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14.formSwitchDisabled = var19;
                var16 = var13[var16];
                var16 = var12.bind(var4)(var16);
                var17 = var16.FormSwitchRow;
                var16 = {};
                var22 = var13[var9];
                var22 = var12.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var13[var9];
                var22 = var12.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.zOuzl7;
                var22 = var23.bind(var24)(var22);
                var16.label = var22;
                var21 = var21.explicitContentFilter;
                var20 = _closure1_slot9;
                var20 = var20.ALL_MEMBERS;
                var20 = var21 === var20;
                var16.value = var20;
                var16.disabled = var19;
                var18 = function arg0() {
                    _fun116288: for (var _fun116288_ip = 0;;) switch (_fun116288_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun116288_ip = 36;
                                continue _fun116288
                            }
                        case 6:
                            var1 = _closure2_slot0;
                            var2 = var1.explicitContentFilter;
                            var1 = _closure1_slot9;
                            var1 = var1.ALL_MEMBERS;
                            if (!(!(var2 < var1))) {
                                _fun116288_ip = 91;
                                continue _fun116288
                            }
                        case 36:
                            if (var0) {
                                _fun116288_ip = 141;
                                continue _fun116288
                            }
                        case 39:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateGuild;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.explicitContentFilter = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun116288_ip = 141;
                            continue _fun116288;
                        case 91:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateGuild;
                            var0 = {};
                            var3 = _closure1_slot9;
                            var3 = var3.ALL_MEMBERS;
                            var0.explicitContentFilter = var3;
                            var0 = var1.bind(var2)(var0);
                        case 141:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16.onValueChange = var18;
                var16 = var8.bind(var4)(var17, var16);
                var14.children = var16;
                var14 = var8.bind(var4)(var15, var14);
                var7.children = var14;
                var7 = var8.bind(var4)(var11, var7);
                var5[3] = var7;
                var6 = var13[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var10 = var10.formHint;
                var6.style = var10;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.b0MaDV;
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[4] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1185:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8156, 660, 33, 14807, 566, 14808, 14805, 4876, 1234, 5378, 14817, 8155, 2]);