// modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: getComponentPropsForScreen, environment: var1
        _fun117351: for (var _fun117351_ip = 0;;) switch (_fun117351_ip) {
            case 0:
                var7 = arg0;
                var0 = arg1;
                var1 = var0[var7];
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var2 = null;
                var4 = var2 != var1;
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var0 = 'Props not provided in screen map for scene ';
                var0 = var6.bind(var0)(var7);
                var0 = var5.bind(var3)(var4, var0);
                var0 = var1.getRuntimeProps;
                var0 = var2 == var0;
                if (var0) {
                    _fun117351_ip = 94;
                    continue _fun117351
                }
            case 84:
                var0 = var1.getRuntimeProps;
                var3 = var0.bind(var1)();
            case 94:
                if (!(var2 == var3)) {
                    _fun117351_ip = 100;
                    continue _fun117351
                }
            case 98:
                var3 = {};
            case 100:
                var0 = {};
                var8 = arg2;
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var1;
                var4 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var1 = var1.extraProps;
                if (!(var2 == var1)) {
                    _fun117351_ip = 146;
                    continue _fun117351
                }
            case 142:
                var1 = new Array(0);
            case 146:
                var9 = var0;
                var8 = var1;
                var1 = copyDataProperties(var9, var8);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: getScreenPropsForScene, environment: var1
        _fun117352: for (var _fun117352_ip = 0;;) switch (_fun117352_ip) {
            case 0:
                var2 = arg1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun117352_ip = 24;
                    continue _fun117352
                }
            case 9:
                var0 = arg0;
                var0 = var2[var0];
                if (!(var1 == var0)) {
                    _fun117352_ip = 22;
                    continue _fun117352
                }
            case 20:
                var0 = {};
            case 22:
                return var0;
            case 24:
                var0 = {};
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: getHeaderRight, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot8;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var0 = 7;
            var0 = var8[var0];
            var2 = undefined;
            var0 = var7.bind(var2)(var0);
            var1 = var0.HeaderActionButton;
            var0 = {};
            var5 = _closure1_slot1;
            var4 = 8;
            var4 = var8[var4];
            var4 = var5.bind(var2)(var4);
            var0.source = var4;
            var4 = function() { // Original name: onPress, environment: var4
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onPress = var4;
            var4 = 9;
            var5 = var8[var4];
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var2)(var4);
            var4 = var4.t;
            var4 = var4.cpT0Cq;
            var4 = var5.bind(var6)(var4);
            var0.accessibilityLabel = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: buildInitialRouteStack, environment: var1
        _fun117356: for (var _fun117356_ip = 0;;) switch (_fun117356_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var6 = undefined;
                var4 = var1.bind(var6)(var0);
                var1 = var2.length;
                var0 = 0;
                var3 = var1 > var0;
                var1 = 'At least one step must be provided to RoleTierEditScenesModal';
                var1 = var4.bind(var6)(var3, var1);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun117356_ip = 116;
                    continue _fun117356
                }
            case 60:
                var1 = new Array(0);
                var3 = var2.length;
                var3 = var0 < var3;
                var4 = 0;
                if (!var3) {
                    _fun117356_ip = 114;
                    continue _fun117356
                }
            case 78:
                var3 = var2[var4];
                var7 = var1.push;
                var6 = {};
                var6.name = var3;
                var6 = var7.bind(var1)(var6);
                if (!(var3 !== var5)) {
                    _fun117356_ip = 114;
                    continue _fun117356
                }
            case 102:
                var4 = var4 + 1;
                var3 = var2.length;
                if (var4 < var3) {
                    _fun117356_ip = 78;
                    continue _fun117356
                }
            case 114:
                return var1;
            case 116:
                var1 = {};
                var0 = var2[var0];
                var1.name = var0;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: orderify, environment: var1
        _fun117357: for (var _fun117357_ip = 0;;) switch (_fun117357_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = 1;
                var3 = var1 + var0;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun117357_ip = 47;
                    continue _fun117357
                }
            case 24:
                var0 = {};
                var5 = var0;
                var4 = var2;
                var1 = copyDataProperties(var5, var4);
                var1 = 'stepNumber';
                var0[var1] = var3;
                _fun117357_ip = 62;
                continue _fun117357;
            case 47:
                var1 = {};
                var1.stepNumber = var3;
                var1.scene = var2;
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: buildScreenMap, environment: var1
        _fun117358: for (var _fun117358_ip = 0;;) switch (_fun117358_ip) {
            case 0:
                var3 = arg0;
                var13 = var3.steps;
                var5 = var3.stepScreenPropsMap;
                var12 = null;
                var2 = Object.create(var12);
                var6 = 0;
                var2.steps = var6;
                var2.stepScreenPropsMap = var6;
                var20 = {};
                var19 = var3;
                var18 = var2;
                var4 = copyDataProperties(var20, var19, var18);
                var3 = {};
                var2 = var13.map;
                var1 = _closure1_slot16;
                var11 = var2.bind(var13)(var1);
                var1 = global;
                var7 = var1.Math;
                var2 = var7.max;
                var8 = var11.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.stepNumber;
                    return var0;
                };
                var19 = var8.bind(var11)(var1);
                var1 = new Array(0);
                var20 = var1;
                var18 = 0;
                var8 = arraySpread(var20, var19, var18);
                var20 = var2;
                var19 = var1;
                var18 = var7;
                var10 = apply(var20, var19, var18);
                var1 = var13.length;
                var1 = var6 < var1;
                var9 = 'nextStep';
                var8 = 'stepsCount';
                var7 = 1;
                if (!var1) {
                    _fun117358_ip = 230;
                    continue _fun117358
                }
            case 146:
                var1 = var11[var6];
                var14 = var1.scene;
                var1 = var6 + var7;
                var15 = var11[var1];
                var16 = var12 == var15;
                var1 = undefined;
                if (var16) {
                    _fun117358_ip = 179;
                    continue _fun117358
                }
            case 173:
                var1 = var15.scene;
            case 179:
                var16 = var12 != var1;
                var15 = null;
                if (!var16) {
                    _fun117358_ip = 191;
                    continue _fun117358
                }
            case 188:
                var15 = var1;
            case 191:
                var1 = {};
                var19 = var11[var6];
                var20 = var1;
                var16 = copyDataProperties(var20, var19);
                var1[var9] = var15;
                var1[var8] = var10;
                var3[var14] = var1;
                var6 = var6 + 1;
                var1 = var13.length;
                if (var6 < var1) {
                    _fun117358_ip = 146;
                    continue _fun117358
                }
            case 230:
                var1 = function(arg0, arg1, arg2, arg3) { // Original name: getScreens, environment: var0
                    var12 = arg2;
                    var8 = arg3;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var9 = {};
                    var0 = true;
                    var9.fullscreen = var0;
                    var0 = function() { // Original name: headerTitle, environment: var3
                        var0 = null;
                        return var0;
                    };
                    var9.headerTitle = var0;
                    var0 = {};
                    var1 = _closure1_slot7;
                    var2 = var1.GATING;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var4 = copyDataProperties(var15, var14);
                    var11 = _closure1_slot14;
                    var4 = _closure1_slot7;
                    var4 = var4.GATING;
                    var7 = undefined;
                    var4 = var11.bind(var7)(var4, var12);
                    var10 = 'headerRight';
                    var1[var10] = var4;
                    var6 = _closure1_slot13;
                    var4 = _closure1_slot7;
                    var4 = var4.GATING;
                    var14 = var6.bind(var7)(var4, var8);
                    var15 = var1;
                    var4 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.GATING;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 10;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4 = 'render';
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.GROUP;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var13 = copyDataProperties(var15, var14);
                    var13 = _closure1_slot7;
                    var13 = var13.GROUP;
                    var13 = var11.bind(var7)(var13, var12);
                    var1[var10] = var13;
                    var13 = _closure1_slot7;
                    var13 = var13.GROUP;
                    var14 = var6.bind(var7)(var13, var8);
                    var15 = var1;
                    var13 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.GROUP;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 11;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.CHANNEL_BENEFITS;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var13 = copyDataProperties(var15, var14);
                    var13 = _closure1_slot7;
                    var13 = var13.CHANNEL_BENEFITS;
                    var13 = var11.bind(var7)(var13, var12);
                    var1[var10] = var13;
                    var13 = _closure1_slot7;
                    var13 = var13.CHANNEL_BENEFITS;
                    var14 = var6.bind(var7)(var13, var8);
                    var15 = var1;
                    var13 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.CHANNEL_BENEFITS;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 12;
                        var0 = var5[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.GuildRoleSubscriptionTierChannelBenefitsModal;
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.INTANGIBLE_BENEFITS;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var13 = copyDataProperties(var15, var14);
                    var13 = _closure1_slot7;
                    var13 = var13.INTANGIBLE_BENEFITS;
                    var13 = var11.bind(var7)(var13, var12);
                    var1[var10] = var13;
                    var13 = _closure1_slot7;
                    var13 = var13.INTANGIBLE_BENEFITS;
                    var14 = var6.bind(var7)(var13, var8);
                    var15 = var1;
                    var13 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.INTANGIBLE_BENEFITS;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 12;
                        var0 = var5[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.GuildRoleSubscriptionTierIntangibleBenefitsModal;
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.CONFIRMATION;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var13 = copyDataProperties(var15, var14);
                    var13 = _closure1_slot7;
                    var13 = var13.CONFIRMATION;
                    var13 = var11.bind(var7)(var13, var12);
                    var1[var10] = var13;
                    var13 = _closure1_slot7;
                    var13 = var13.CONFIRMATION;
                    var14 = var6.bind(var7)(var13, var8);
                    var15 = var1;
                    var13 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.CONFIRMATION;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 13;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.DESIGN;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var13 = copyDataProperties(var15, var14);
                    var13 = _closure1_slot7;
                    var13 = var13.DESIGN;
                    var13 = var11.bind(var7)(var13, var12);
                    var1[var10] = var13;
                    var13 = _closure1_slot7;
                    var13 = var13.DESIGN;
                    var14 = var6.bind(var7)(var13, var8);
                    var15 = var1;
                    var13 = copyDataProperties(var15, var14);
                    var13 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.DESIGN;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 14;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var13;
                    var0[var2] = var1;
                    var1 = _closure1_slot7;
                    var2 = var1.DETAILS;
                    var1 = {};
                    var15 = var1;
                    var14 = var9;
                    var9 = copyDataProperties(var15, var14);
                    var9 = _closure1_slot7;
                    var9 = var9.DETAILS;
                    var9 = var11.bind(var7)(var9, var12);
                    var1[var10] = var9;
                    var5 = _closure1_slot7;
                    var5 = var5.DETAILS;
                    var14 = var6.bind(var7)(var5, var8);
                    var15 = var1;
                    var5 = copyDataProperties(var15, var14);
                    var3 = function() { // Original name: render, environment: var3
                        var5 = _closure1_slot12;
                        var1 = _closure1_slot7;
                        var4 = var1.DETAILS;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4, var2, var1);
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 15;
                        var0 = var5[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1[var4] = var3;
                    var0[var2] = var1;
                    return var0;
                };
                var18 = arg1;
                var21 = undefined;
                var20 = var3;
                var19 = var4;
                var17 = var5;
                var0 = var21[var1](var20, var19, var18, var17, var16);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useCurrentTierEditScene;
    var _closure1_slot5 = var6;
    var3 = var3.useResetTierEditState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'alignSelf': 'center',
        'height': 48
    };
    var3.stepsIndicator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: RoleTierEditScenesModal, environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var0 = _closure1_slot11;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var1 = var2.modalKey;
        var _closure2_slot1 = var1;
        var0 = var2.steps;
        var _closure2_slot2 = var0;
        var2 = var2.onClose;
        var _closure2_slot3 = var2;
        var2 = _closure1_slot5;
        var2 = var2.bind(var3)();
        var8 = _closure1_slot3;
        var7 = 2;
        var2 = var8.bind(var3)(var2, var7);
        var6 = 0;
        var4 = var2[var6];
        var _closure2_slot4 = var4;
        var10 = 1;
        var2 = var2[var10];
        var _closure2_slot5 = var2;
        var2 = _closure1_slot6;
        var2 = var2.bind(var3)();
        var _closure2_slot6 = var2;
        var4 = _closure1_slot4;
        var2 = var4.useState;
        var2 = var2.bind(var4)(var6);
        var2 = var8.bind(var3)(var2, var7);
        var9 = var2[var6];
        var2 = var2[var10];
        var _closure2_slot7 = var2;
        var6 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 16;
        var2 = var12[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var13 = var2.top;
        var7 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var15
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.popWithKey;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var7.bind(var4)(var1, var2);
        var _closure2_slot8 = var1;
        var1 = function(arg0) { // Original name: handleClose, environment: var15
            _fun117371: for (var _fun117371_ip = 0;;) switch (_fun117371_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun117371_ip = 27;
                        continue _fun117371
                    }
                case 13:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var2)(var0);
                case 27:
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var _closure2_slot9 = var1;
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var15
            var2 = _closure2_slot2;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun117373: for (var _fun117373_ip = 0;;) switch (_fun117373_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = 'string';
                        var2 = typeof var1;
                        var0 = var1;
                        if (!(var3 !== var2)) {
                            _fun117373_ip = 23;
                            continue _fun117373
                        }
                    case 17:
                        var0 = var1.scene;
                    case 23:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var2.bind(var4)(var0, var1);
        var _closure2_slot10 = var8;
        var0 = 18;
        var0 = var12[var0];
        var1 = var6.bind(var3)(var0);
        var0 = function() { // Environment: var15
            var0 = {};
            var6 = _closure1_slot17;
            var5 = _closure2_slot0;
            var3 = _closure2_slot9;
            var4 = undefined;
            var3 = var6.bind(var4)(var5, var3);
            var0.screens = var3;
            var3 = _closure1_slot15;
            var2 = _closure2_slot10;
            var1 = _closure2_slot4;
            var1 = var3.bind(var4)(var2, var1);
            var0.initialStack = var1;
            return var0;
        };
        var0 = var1.bind(var3)(var0);
        var17 = var0.screens;
        var16 = var0.initialStack;
        var2 = _closure1_slot10;
        var1 = _closure1_slot9;
        var0 = {};
        var14 = _closure1_slot8;
        var18 = _closure1_slot0;
        var4 = 19;
        var4 = var12[var4];
        var4 = var18.bind(var3)(var4);
        var7 = var4.Navigator;
        var4 = {};
        var4.screens = var17;
        var4.initialRouteStack = var16;
        var15 = function(arg0) { // Original name: onWillFocus, environment: var15
            _fun117375: for (var _fun117375_ip = 0;;) switch (_fun117375_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.route;
                    var4 = var0.name;
                    var _closure3_slot0 = var4;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun117375_ip = 77;
                        continue _fun117375
                    }
                case 26:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    var4 = _closure2_slot10;
                    var3 = var4.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = 0;
                    if (!(var1 >= var3)) {
                        _fun117375_ip = 77;
                        continue _fun117375
                    }
                case 68:
                    var0 = _closure2_slot7;
                    var0 = var0.bind(var2)(var1);
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.onWillFocus = var15;
        var15 = 9;
        var16 = var12[var15];
        var16 = var18.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var12[var15];
        var15 = var18.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15["13/7kX"];
        var15 = var16.bind(var17)(var15);
        var4.headerBackTitle = var15;
        var7 = var14.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot8;
        var5 = 20;
        var5 = var12[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var12 = var11.stepsIndicator;
        var11 = new Array(2);
        var11[0] = var12;
        var12 = {};
        var12.top = var13;
        var11[1] = var12;
        var5.style = var11;
        var9 = var9 + var10;
        var5.current = var9;
        var8 = var8.length;
        var5.total = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 14907, 5596, 33, 1297, 44, 5283, 5284, 1234, 14920, 14906, 14921, 14941, 14944, 14946, 1568, 4524, 4890, 5747, 14948, 2]);