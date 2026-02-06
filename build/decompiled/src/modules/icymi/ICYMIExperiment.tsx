// modules/icymi/ICYMIExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var7 = function arg0() {
        _fun70933: for (var _fun70933_ip = 0;;) switch (_fun70933_ip) {
            case 0:
                var1 = arg0;
                var7 = arguments[1];
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun70933_ip = 14;
                    continue _fun70933
                }
            case 12:
                var7 = true;
            case 14:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot3;
                var6 = var3.bind(var4)(var0);
                var5 = _closure1_slot4;
                var4 = var5.useExperiment;
                var3 = {};
                var3.location = var1;
                var0 = {};
                var0.autoTrackExposure = var7;
                var0.disable = var6;
                var0 = var4.bind(var5)(var3, var0);
                var4 = _closure1_slot6;
                var3 = var4.useExperiment;
                var2 = {};
                var2.location = var1;
                var1 = {};
                var5 = false;
                var1.autoTrackExposure = var5;
                var5 = var0.enabled;
                var5 = !var5;
                if (var5) {
                    _fun70933_ip = 118;
                    continue _fun70933
                }
            case 116:
                var5 = true;
            case 118:
                var1.disable = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = var0.enabled;
                return var0;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function arg0() {
        _fun70934: for (var _fun70934_ip = 0;;) switch (_fun70934_ip) {
            case 0:
                var5 = arguments[1];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun70934_ip = 11;
                    continue _fun70934
                }
            case 9:
                var5 = true;
            case 11:
                var3 = _closure1_slot2;
                var2 = var3.get;
                var1 = _closure1_slot3;
                var4 = var2.bind(var3)(var1);
                var3 = _closure1_slot4;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var5;
                var0.disable = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var _closure1_slot8 = var6;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var16 = true;
    var1.value = var16;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var12[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var12[var1];
    var1 = var11.bind(var0)(var1);
    var10 = var1.CommonTriggerPoints;
    var9 = 'hide_icymi_tab';
    var _closure1_slot3 = var9;
    var1 = 2;
    var4 = var12[var1];
    var8 = var11.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2024-07_icymi',
        'label': 'In-case-you-missed-it tab'
    };
    var10 = var10.CONNECTION_OPEN_MOBILE;
    var4.commonTriggerPoint = var10;
    var10 = {};
    var15 = false;
    var10.enabled = var15;
    var4.defaultConfig = var10;
    var13 = {
        'id': 1,
        'label': 'enables the new icymi tab'
    };
    var10 = {};
    var10.enabled = var16;
    var13.config = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var4.treatments = var10;
    var8 = var5.bind(var8)(var4);
    var _closure1_slot4 = var8;
    var4 = var12[var1];
    var10 = var11.bind(var0)(var4);
    var5 = var10.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2024-07_icymi_negative_items',
        'label': 'icymi negative content (debugging only)'
    };
    var13 = {};
    var13.enabled = var15;
    var4.defaultConfig = var13;
    var14 = {
        'id': 1,
        'label': 'allow negative items only'
    };
    var13 = {};
    var13.enabled = var16;
    var14.config = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var4.treatments = var13;
    var5 = var5.bind(var10)(var4);
    var4 = var12[var1];
    var13 = var11.bind(var0)(var4);
    var10 = var13.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-05_icymi_new_conversation_summaries',
        'label': 'New conversation summary in ICYMI'
    };
    var14 = {};
    var14.contentGenerationEnabled = var15;
    var4.defaultConfig = var14;
    var17 = {
        'id': 1,
        'label': 'New conversation summary types in ICYMI'
    };
    var14 = {};
    var14.contentGenerationEnabled = var16;
    var17.config = var14;
    var14 = new Array(1);
    var14[0] = var17;
    var4.treatments = var14;
    var4 = var10.bind(var13)(var4);
    var _closure1_slot5 = var4;
    var1 = var12[var1];
    var13 = var11.bind(var0)(var1);
    var10 = var13.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-10_icymi_desktop_client',
        'label': 'ICYMI desktop client'
    };
    var14 = {};
    var14.icymiDesktopEnabled = var15;
    var1.defaultConfig = var14;
    var15 = {
        'id': 1,
        'label': 'Enable ICYMI desktop client'
    };
    var14 = {};
    var14.icymiDesktopEnabled = var16;
    var15.config = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var1.treatments = var14;
    var1 = var10.bind(var13)(var1);
    var _closure1_slot6 = var1;
    var10 = 4;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/icymi/ICYMIExperiment.tsx';
    var10 = var11.bind(var12)(var10);
    var2.ICYMI_LAB_FEATURE = var9;
    var2.ICYMIExperiment = var8;
    var2.useICYMIEnabled = var7;
    var2.getICYMIEnabled = var6;
    var2.ICYMINegativeExperiment = var5;
    var2.ICYMINewConversationSummaryExperiment = var4;
    var4 = function arg0() {
        _fun70935: for (var _fun70935_ip = 0;;) switch (_fun70935_ip) {
            case 0:
                var0 = arg0;
                var5 = arguments[1];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun70935_ip = 14;
                    continue _fun70935
                }
            case 12:
                var5 = false;
            case 14:
                var3 = _closure1_slot7;
                var2 = false;
                var4 = var3.bind(var4)(var0, var2);
                var3 = _closure1_slot5;
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var5;
                var4 = !var4;
                var0.disable = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useICYMINewConversationSummaryExperiment = var4;
    var3 = function arg0() {
        _fun70936: for (var _fun70936_ip = 0;;) switch (_fun70936_ip) {
            case 0:
                var0 = arg0;
                var5 = arguments[1];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun70936_ip = 14;
                    continue _fun70936
                }
            case 12:
                var5 = false;
            case 14:
                var3 = _closure1_slot8;
                var2 = false;
                var4 = var3.bind(var4)(var0, var2);
                var3 = _closure1_slot5;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var5;
                var4 = !var4;
                var0.disable = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getICYMINewConversationSummaryExperiment = var3;
    var2.ICYMIDesktopExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8907, 1591, 3117, 8909, 2]);