// modules/application_widget/ApplicationWidgetConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: createExperiment, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.createApexExperiment;
        var0 = {};
        var3 = arg0;
        var0.name = var3;
        var3 = 'user';
        var0.kind = var3;
        var3 = {};
        var5 = {};
        var4 = false;
        var5.enabled = var4;
        var3[0] = var5;
        var5 = {};
        var6 = true;
        var5.enabled = var6;
        var3[1] = var5;
        var0.variations = var3;
        var3 = {};
        var3.enabled = var4;
        var0.defaultConfig = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0) { // Original name: ApplicationWidgetConfig, environment: var4
            _fun92961: for (var _fun92961_ip = 0;;) switch (_fun92961_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2, var3);
                    var3 = var1.application_id;
                    var2.applicationId = var3;
                    var3 = var1.widget_template_id;
                    var2.widgetTemplateId = var3;
                    var5 = _closure1_slot4;
                    var3 = var1.view_experiment;
                    var3 = var5.bind(var0)(var3);
                    var2.viewExperiment = var3;
                    var3 = var1.edit_experiment;
                    var3 = var5.bind(var0)(var3);
                    var2.editExperiment = var3;
                    var5 = var1.coachmark_experiment;
                    var3 = null;
                    var5 = var3 != var5;
                    var3 = undefined;
                    if (!var5) {
                        _fun92961_ip = 134;
                        continue _fun92961
                    }
                case 119:
                    var5 = _closure1_slot4;
                    var4 = var1.coachmark_experiment;
                    var3 = var5.bind(var0)(var4);
                case 134:
                    var2.coachmarkExperiment = var3;
                    var3 = var1.edit_profile_upsell_image;
                    var2.editProfileUpsellImage = var3;
                    var3 = var1.hero_placeholder_image;
                    var2.heroPlaceholderImage = var3;
                    var3 = var1.mini_preview_image;
                    var2.miniPreviewImage = var3;
                    var3 = var1.edit_profile_unlinked_dc;
                    var2.editProfileUnlinkedDc = var3;
                    var3 = var1.edit_profile_linked_dc;
                    var2.editProfileLinkedDc = var3;
                    var1 = var1.suggested_widget_linked_dc;
                    var2.suggestedWidgetLinkedDc = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isEligibleForEditProfileUpsell';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun92962: for (var _fun92962_ip = 0;;) switch (_fun92962_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.editProfileLinkedDc;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun92962_ip = 28;
                        continue _fun92962
                    }
                case 18:
                    var1 = var1.editProfileUnlinkedDc;
                    var0 = var2 != var1;
                case 28:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'isEligibleForSuggestions';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.suggestedWidgetLinkedDc;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_widget/ApplicationWidgetConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ApplicationWidgetConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1301, 2]);