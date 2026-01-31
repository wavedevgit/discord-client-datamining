// modules/guild_member_verification/MemberVerificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.AUTOMATIC_APPROVAL_FORM_FIELDS;
    var _closure1_slot2 = var6;
    var3 = var3.MANUAL_APPROVAL_FORM_FIELDS;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/MemberVerificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun44152: for (var _fun44152_ip = 0;;) switch (_fun44152_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.required;
                var2 = var1.response;
                var4 = var1.field_type;
                if (var0) {
                    _fun44152_ip = 28;
                    continue _fun44152
                }
            case 24:
                var0 = true;
                return var0;
            case 28:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun44152_ip = 311;
                    continue _fun44152
                }
            case 37:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 2;
                var3 = var1[var6];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.VerificationFormFieldTypes;
                var3 = var3.TERMS;
                if (!(var3 !== var4)) {
                    _fun44152_ip = 296;
                    continue _fun44152
                }
            case 81:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var1)(var3);
                var3 = var3.VerificationFormFieldTypes;
                var3 = var3.VERIFICATION;
                if (!(var3 !== var4)) {
                    _fun44152_ip = 296;
                    continue _fun44152
                }
            case 117:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var1)(var3);
                var3 = var3.VerificationFormFieldTypes;
                var3 = var3.TEXT_INPUT;
                if (!(var3 !== var4)) {
                    _fun44152_ip = 262;
                    continue _fun44152
                }
            case 150:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var1)(var3);
                var3 = var3.VerificationFormFieldTypes;
                var3 = var3.PARAGRAPH;
                if (!(var3 !== var4)) {
                    _fun44152_ip = 262;
                    continue _fun44152
                }
            case 183:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var1)(var3);
                var3 = var3.VerificationFormFieldTypes;
                var3 = var3.MULTIPLE_CHOICE;
                if (!(var3 !== var4)) {
                    _fun44152_ip = 249;
                    continue _fun44152
                }
            case 216:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var3 = var3.bind(var1)(var0);
                var0 = var3.assertNever;
                var0 = var0.bind(var3)(var4);
                return var0;
            case 249:
                var3 = 'number';
                var0 = typeof var2;
                var0 = var3 === var0;
                return var0;
            case 262:
                var3 = 'string';
                var0 = typeof var2;
                var0 = var3 === var0;
                if (!var0) {
                    _fun44152_ip = 294;
                    continue _fun44152
                }
            case 276:
                var3 = var2.trim;
                var4 = var3.bind(var2)();
                var3 = '';
                var0 = var3 !== var4;
            case 294:
                return var0;
            case 296:
                var0 = global;
                var0 = var0.Boolean;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 311:
                var0 = false;
                return var0;
        }
    };
    var2.isValidFormResponse = var3;
    var3 = function(arg0) { // Original name: removeInternalFields, environment: var1
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.field_type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.VerificationFormFieldTypes;
            var0 = var0.VERIFICATION;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.removeInternalFields = var3;
    var3 = function(arg0) { // Original name: isAutomaticApprovalFormField, environment: var1
        _fun44155: for (var _fun44155_ip = 0;;) switch (_fun44155_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot2;
                var1 = var2.has;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun44155_ip = 32;
                    continue _fun44155
                }
            case 26:
                var0 = var3.field_type;
            case 32:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.isAutomaticApprovalFormField = var3;
    var3 = function(arg0) { // Original name: isManualApprovalFormField, environment: var1
        _fun44156: for (var _fun44156_ip = 0;;) switch (_fun44156_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot3;
                var1 = var2.has;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun44156_ip = 32;
                    continue _fun44156
                }
            case 26:
                var0 = var3.field_type;
            case 32:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.isManualApprovalFormField = var3;
    var1 = function(arg0) { // Original name: guildHasVerificationGate, environment: var1
        _fun44157: for (var _fun44157_ip = 0;;) switch (_fun44157_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun44157_ip = 41;
                    continue _fun44157
                }
            case 12:
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot4;
                var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var2.guildHasVerificationGate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4789, 660, 3175, 1304, 2]);