// modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ExperimentOverrideActionSheet, environment: var1
        var1 = arg0;
        var9 = var1.id;
        var _closure2_slot0 = var9;
        var11 = var1.experiment;
        var _closure2_slot1 = var11;
        var10 = var1.override;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() { // Environment: var0
            _fun78617: for (var _fun78617_ip = 0;;) switch (_fun78617_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun78617_ip = 19;
                        continue _fun78617
                    }
                case 13:
                    var0 = new Array(0);
                    _fun78617_ip = 59;
                    continue _fun78617;
                case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getExperimentVariantsForDevTools;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 59:
                    return var0;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var9;
        var2[1] = var11;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun78618: for (var _fun78618_ip = 0;;) switch (_fun78618_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun78618_ip = 130;
                        continue _fun78618
                    }
                case 15:
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var1](var5);
                    var4 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot2;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var3
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.set;
                        var0 = var3.id;
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = new Array(0);
                    var _closure3_slot1 = var0;
                    var2 = var4.forEach;
                    var1 = function(arg0) { // Environment: var3
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var0 = {};
                        var4 = var4.label;
                        var0.label = var4;
                        var3 = function() { // Original name: onPress, environment: var3
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var2 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.hideActionSheet;
                            var2 = 'ExperimentOverrideSheet';
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure1_slot0;
                            var1 = 18;
                            var1 = var3[var1];
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.overrideBucket;
                            var2 = _closure2_slot1;
                            var3 = var2.system;
                            var2 = _closure2_slot0;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                        };
                        var0.onPress = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var4)(var1);
                    var2 = var0.push;
                    var1 = {
                        'label': 'Clear Override',
                        'isDestructive': true
                    };
                    var3 = function() { // Original name: onPress, environment: var3
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 17;
                        var2 = var3[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var2);
                        var4 = var5.hideActionSheet;
                        var2 = 'ExperimentOverrideSheet';
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot0;
                        var1 = 18;
                        var1 = var3[var1];
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.overrideBucket;
                        var2 = _closure2_slot1;
                        var3 = var2.system;
                        var2 = _closure2_slot0;
                        var1 = null;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var1.onPress = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                case 130:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var8 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hideActionSheet;
            var1 = 'ExperimentOverrideSheet';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var7 = var2.bind(var3)(var1, var0);
        var3 = _closure1_slot8;
        var5 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 19;
        var0 = var12[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var14 = _closure1_slot8;
        var6 = 20;
        var6 = var12[var6];
        var6 = var5.bind(var2)(var6);
        var13 = var6.BottomSheetTitleHeader;
        var6 = {};
        var15 = var11.title;
        var6.title = var15;
        var6.subtitle = var9;
        var6 = var14.bind(var2)(var13, var6);
        var0.header = var6;
        var6 = _closure1_slot8;
        var4 = 21;
        var4 = var12[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.ExperimentDetails;
        var4 = {};
        var4.experiment = var11;
        var4.override = var10;
        var4.id = var9;
        var4.options = var8;
        var4.onCopyLink = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExperimentEmbedType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: ConnectedExperimentOverrideActionSheet, environment: var1
        _fun78624: for (var _fun78624_ip = 0;;) switch (_fun78624_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.id;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 8;
                var5 = var3[var4];
                var4 = undefined;
                var6 = var2.bind(var4)(var5);
                var5 = var6.useLegacyExperiments;
                var5 = var5.bind(var6)();
                var12 = var5.experiments;
                var _closure2_slot1 = var12;
                var11 = var5.overridesInfo;
                var _closure2_slot2 = var11;
                var5 = 9;
                var5 = var3[var5];
                var6 = var2.bind(var4)(var5);
                var5 = var6.useApexExperiments;
                var6 = var5.bind(var6)();
                var5 = var6.experiments;
                var _closure2_slot3 = var5;
                var10 = var6.overridesInfo;
                var _closure2_slot4 = var10;
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var6 = new Array(3);
                var6[0] = var12;
                var6[1] = var5;
                var6[2] = var7;
                var5 = function() { // Environment: var0
                    _fun78625: for (var _fun78625_ip = 0;;) switch (_fun78625_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var1 = var1[var0];
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun78625_ip = 33;
                                continue _fun78625
                            }
                        case 21:
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = var3[var2];
                        case 33:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun78625_ip = 45;
                                continue _fun78625
                            }
                        case 42:
                            var0 = var1;
                        case 45:
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var5, var6);
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var7;
                var0 = function() { // Environment: var0
                    _fun78626: for (var _fun78626_ip = 0;;) switch (_fun78626_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var1 = var1[var0];
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun78626_ip = 33;
                                continue _fun78626
                            }
                        case 21:
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot0;
                            var1 = var3[var2];
                        case 33:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun78626_ip = 45;
                                continue _fun78626
                            }
                        case 42:
                            var0 = var1;
                        case 45:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var0, var5);
                var0 = 22;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCanSeeExperimentEmbeds;
                var2 = var0.bind(var2)();
                var3 = null;
                var8 = var3 != var6;
                var0 = null;
                if (!var8) {
                    _fun78624_ip = 255;
                    continue _fun78624
                }
            case 220:
                var0 = null;
                if (!var2) {
                    _fun78624_ip = 255;
                    continue _fun78624
                }
            case 225:
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var1.id = var7;
                var1.experiment = var6;
                var1.override = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 255:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: createExperimentEmbed, environment: var1
        _fun78627: for (var _fun78627_ip = 0;;) switch (_fun78627_ip) {
            case 0:
                var10 = arg0;
                var7 = arg1;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 6;
                var2 = var12[var2];
                var8 = undefined;
                var2 = var3.bind(var8)(var2);
                var3 = var2.bind(var8)(var7);
                var2 = var3.colors;
                var5 = var3.baseColors;
                var9 = _closure1_slot0;
                var15 = 7;
                var3 = var12[var15];
                var4 = var9.bind(var8)(var3);
                var3 = var4.getExperimentFromEmbedURL;
                var3 = var3.bind(var4)(var10);
                var4 = var12[var15];
                var6 = var9.bind(var8)(var4);
                var4 = var6.getExperimentTreatmentFromEmbedURL;
                var11 = var4.bind(var6)(var10);
                var _closure2_slot0 = var11;
                var4 = 8;
                var4 = var12[var4];
                var6 = var9.bind(var8)(var4);
                var4 = var6.getLegacyExperiments;
                var4 = var4.bind(var6)();
                var10 = var4.experiments;
                var6 = var4.overridesInfo;
                var4 = 9;
                var4 = var12[var4];
                var9 = var9.bind(var8)(var4);
                var4 = var9.getApexExperiments;
                var4 = var4.bind(var9)();
                var12 = var4.experiments;
                var9 = var4.overridesInfo;
                var4 = null;
                var13 = var4 != var3;
                var14 = null;
                if (!var13) {
                    _fun78627_ip = 194;
                    continue _fun78627
                }
            case 179:
                var10 = var10[var3];
                if (!(var4 == var10)) {
                    _fun78627_ip = 191;
                    continue _fun78627
                }
            case 187:
                var10 = var12[var3];
            case 191:
                var14 = var10;
            case 194:
                if (!(var4 != var3)) {
                    _fun78627_ip = 1021;
                    continue _fun78627
                }
            case 201:
                if (!(var4 != var14)) {
                    _fun78627_ip = 1021;
                    continue _fun78627
                }
            case 208:
                var6 = var6[var3];
                if (!(var4 == var6)) {
                    _fun78627_ip = 220;
                    continue _fun78627
                }
            case 216:
                var6 = var9[var3];
            case 220:
                var10 = var4 != var6;
                var9 = null;
                if (!var10) {
                    _fun78627_ip = 232;
                    continue _fun78627
                }
            case 229:
                var9 = var6;
            case 232:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var15];
                var10 = var10.bind(var8)(var6);
                var6 = var10.getExperimentBuckets;
                var10 = var6.bind(var10)(var14);
                var6 = var10.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var6.bind(var10)(var0);
                if (!(var4 == var0)) {
                    _fun78627_ip = 293;
                    continue _fun78627
                }
            case 281:
                var6 = _closure1_slot6;
                var10 = var6.EXPERIMENT;
                _fun78627_ip = 303;
                continue _fun78627;
            case 293:
                var6 = _closure1_slot6;
                var10 = var6.EXPERIMENT_TREATMENT;
            case 303:
                var12 = _closure1_slot5;
                var6 = var12.getId;
                var17 = var6.bind(var12)();
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var13 = 13;
                var13 = var6[var13];
                var16 = var12.bind(var8)(var13);
                var13 = var16.getExperimentServerAssignment;
                var13 = var13.bind(var16)(var14, var17);
                var6 = var6[var15];
                var12 = var12.bind(var8)(var6);
                var6 = var12.getExperimentServerAssignmentLabel;
                var12 = var6.bind(var12)(var14, var13);
                var6 = _closure1_slot6;
                var6 = var6.EXPERIMENT_TREATMENT;
                if (!(var10 !== var6)) {
                    _fun78627_ip = 673;
                    continue _fun78627
                }
            case 387:
                var6 = {};
                var19 = var6;
                var18 = var5;
                var10 = copyDataProperties(var19, var18);
                var13 = 'EXPERIMENT';
                var10 = 'headerText';
                var6[var10] = var13;
                var10 = 'titleText';
                var6[var10] = var3;
                var13 = var2.titleColor;
                var10 = 'titleColor';
                var6[var10] = var13;
                if (!(var4 == var9)) {
                    _fun78627_ip = 466;
                    continue _fun78627
                }
            case 440:
                var10 = global;
                var10 = var10.HermesInternal;
                var13 = var10.concat;
                var10 = 'Server Assignment: ';
                var13 = var13.bind(var10)(var12);
                _fun78627_ip = 496;
                continue _fun78627;
            case 466:
                var15 = var9.variantId;
                var10 = global;
                var10 = var10.HermesInternal;
                var14 = var10.concat;
                var10 = 'Client Override Applied: Treatment ';
                var13 = var14.bind(var10)(var15);
            case 496:
                var10 = 'subtitle';
                var6[var10] = var13;
                var13 = var2.subtitleColor;
                var10 = 'subtitleColor';
                var6[var10] = var13;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 14;
                var10 = var16[var10];
                var14 = var13.bind(var8)(var10);
                var13 = var14.getAssetUriForEmbed;
                var15 = _closure1_slot1;
                var10 = 15;
                var10 = var16[var10];
                var10 = var15.bind(var8)(var10);
                var13 = var13.bind(var14)(var10);
                var10 = 'thumbnailUrl';
                var6[var10] = var13;
                var13 = var2.backgroundColor;
                var10 = 'thumbnailBackgroundColor';
                var6[var10] = var13;
                var13 = var2.acceptLabelGreenColor;
                var10 = 'acceptLabelColor';
                var6[var10] = var13;
                var13 = var2.acceptLabelGreenBackgroundColor;
                var10 = 'acceptLabelBackgroundColor';
                var6[var10] = var13;
                var13 = 'View Experiment Details';
                var10 = 'acceptLabelText';
                var6[var10] = var13;
                var13 = true;
                var10 = 'embedCanBeTapped';
                var6[var10] = var13;
                var10 = _closure1_slot7;
                var13 = var10.GUILD;
                var10 = 'type';
                var6[var10] = var13;
                return var6;
            case 673:
                if (!(var4 == var0)) {
                    _fun78627_ip = 703;
                    continue _fun78627
                }
            case 677:
                var6 = global;
                var6 = var6.HermesInternal;
                var10 = var6.concat;
                var6 = 'Server Config: ';
                var10 = var10.bind(var6)(var12);
                _fun78627_ip = 708;
                continue _fun78627;
            case 703:
                var10 = var0.label;
            case 708:
                var6 = var4 != var9;
                if (!var6) {
                    _fun78627_ip = 719;
                    continue _fun78627
                }
            case 715:
                var6 = var4 != var0;
            case 719:
                if (!var6) {
                    _fun78627_ip = 737;
                    continue _fun78627
                }
            case 722:
                var9 = var9.variantId;
                var0 = var0.value;
                var6 = var9 === var0;
            case 737:
                var0 = {};
                var19 = var0;
                var18 = var5;
                var9 = copyDataProperties(var19, var18);
                var12 = 'EXPERIMENT TREATMENT';
                var9 = 'headerText';
                var0[var9] = var12;
                var9 = 'titleText';
                var0[var9] = var3;
                var12 = var2.titleColor;
                var9 = 'titleColor';
                var0[var9] = var12;
                var9 = 'subtitle';
                var0[var9] = var10;
                var10 = var2.subtitleColor;
                var9 = 'subtitleColor';
                var0[var9] = var10;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 14;
                var9 = var14[var9];
                var12 = var10.bind(var8)(var9);
                var10 = var12.getAssetUriForEmbed;
                var13 = _closure1_slot1;
                var9 = 15;
                var9 = var14[var9];
                var9 = var13.bind(var8)(var9);
                var10 = var10.bind(var12)(var9);
                var9 = 'thumbnailUrl';
                var0[var9] = var10;
                var10 = var2.backgroundColor;
                var9 = 'thumbnailBackgroundColor';
                var0[var9] = var10;
                if (var6) {
                    _fun78627_ip = 893;
                    continue _fun78627
                }
            case 885:
                var10 = var2.acceptLabelGreenColor;
                _fun78627_ip = 899;
                continue _fun78627;
            case 893:
                var10 = var2.clearLabelRedColor;
            case 899:
                var9 = 'acceptLabelColor';
                var0[var9] = var10;
                if (var6) {
                    _fun78627_ip = 919;
                    continue _fun78627
                }
            case 911:
                var10 = var2.acceptLabelGreenBackgroundColor;
                _fun78627_ip = 925;
                continue _fun78627;
            case 919:
                var10 = var2.clearLabelRedBackgroundColor;
            case 925:
                var9 = 'acceptLabelBackgroundColor';
                var0[var9] = var10;
                var9 = global;
                var9 = var9.HermesInternal;
                var10 = var9.concat;
                if (var6) {
                    _fun78627_ip = 965;
                    continue _fun78627
                }
            case 952:
                var6 = 'Apply Treatment ';
                var9 = var10.bind(var6)(var11);
                _fun78627_ip = 976;
                continue _fun78627;
            case 965:
                var6 = 'Clear Treatment ';
                var9 = var10.bind(var6)(var11);
            case 976:
                var6 = 'acceptLabelText';
                var0[var6] = var9;
                var9 = true;
                var6 = 'embedCanBeTapped';
                var0[var6] = var9;
                var6 = _closure1_slot7;
                var9 = var6.GUILD;
                var6 = 'type';
                var0[var6] = var9;
                return var0;
            case 1021:
                var0 = {};
                var19 = var0;
                var18 = var5;
                var5 = copyDataProperties(var19, var18);
                var6 = 'EXPERIMENT';
                var5 = 'headerText';
                var0[var5] = var6;
                var6 = var4 == var3;
                var4 = 'Unknown Experiment';
                var5 = var4;
                if (var6) {
                    _fun78627_ip = 1065;
                    continue _fun78627
                }
            case 1062:
                var5 = var3;
            case 1065:
                var3 = 'titleText';
                var0[var3] = var5;
                var5 = var2.titleColor;
                var3 = 'titleColor';
                var0[var3] = var5;
                var3 = 'subtitle';
                var0[var3] = var4;
                var4 = var2.subtitleColor;
                var3 = 'subtitleColor';
                var0[var3] = var4;
                var4 = 'This client is missing this experiment. You may need to open the surface where the experiment is used first.';
                var3 = 'bodyText';
                var0[var3] = var4;
                var4 = var2.bodyTextColor;
                var3 = 'bodyTextColor';
                var0[var3] = var4;
                var5 = _closure1_slot4;
                var4 = var5.resolveAssetSource;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 10;
                var3 = var9[var3];
                var6 = var6.bind(var8)(var3);
                var3 = var6.isThemeDark;
                var3 = var3.bind(var6)(var7);
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var3) {
                    _fun78627_ip = 1209;
                    continue _fun78627
                }
            case 1195:
                var3 = 12;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                _fun78627_ip = 1221;
                continue _fun78627;
            case 1209:
                var6 = 11;
                var6 = var9[var6];
                var3 = var7.bind(var8)(var6);
            case 1221:
                var3 = var4.bind(var5)(var3);
                var4 = var3.uri;
                var3 = 'thumbnailUrl';
                var0[var3] = var4;
                var3 = var2.thumbnailBackgroundColor;
                var2 = 'thumbnailBackgroundColor';
                var0[var2] = var3;
                var1 = _closure1_slot7;
                var2 = var1.GUILD;
                var1 = 'type';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createExperimentEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1216, 1591, 3294, 33, 9971, 3287, 9754, 9755, 3116, 9972, 9973, 9974, 6603, 9975, 3289, 3237, 1600, 4887, 5167, 9976, 9753, 2]);