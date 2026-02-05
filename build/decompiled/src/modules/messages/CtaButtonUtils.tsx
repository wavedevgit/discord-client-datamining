// modules/messages/CtaButtonUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var0 = 'mark_as_false_positive';
    var3.MARK_AS_FALSE_POSITIVE = var0;
    var0 = 'age_verification_retry';
    var3.AGE_VERIFICATION_RETRY = var0;
    var _closure1_slot2 = var3;
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/CtaButtonUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.CtaButtonType = var3;
    var3 = function arg0, arg1() {
        _fun89181: for (var _fun89181_ip = 0;;) switch (_fun89181_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.shouldRenderReportFalsePositiveButton;
                var2 = var2.bind(var3)(var5);
                if (var2) {
                    _fun89181_ip = 93;
                    continue _fun89181
                }
            case 41:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.isAgeVerificationMessageWithRetryCta;
                var2 = arg1;
                var2 = var3.bind(var4)(var2, var5);
                var0 = undefined;
                if (!var2) {
                    _fun89181_ip = 91;
                    continue _fun89181
                }
            case 81:
                var2 = _closure1_slot2;
                var0 = var2.AGE_VERIFICATION_RETRY;
            case 91:
                _fun89181_ip = 103;
                continue _fun89181;
            case 93:
                var1 = _closure1_slot2;
                var0 = var1.MARK_AS_FALSE_POSITIVE;
            case 103:
                return var0;
        }
    };
    var2.getCtaButtonType = var3;
    var1 = function arg0, arg1() {
        _fun89182: for (var _fun89182_ip = 0;;) switch (_fun89182_ip) {
            case 0:
                var6 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var2 = var5[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var2);
                var2 = var3.useShouldRenderReportFalsePositiveButton;
                var3 = var2.bind(var3)(var6);
                var2 = 1;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.isAgeVerificationMessageWithRetryCta;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var6);
                if (var3) {
                    _fun89182_ip = 85;
                    continue _fun89182
                }
            case 68:
                var0 = undefined;
                if (!var2) {
                    _fun89182_ip = 83;
                    continue _fun89182
                }
            case 73:
                var2 = _closure1_slot2;
                var0 = var2.AGE_VERIFICATION_RETRY;
            case 83:
                _fun89182_ip = 95;
                continue _fun89182;
            case 85:
                var1 = _closure1_slot2;
                var0 = var1.MARK_AS_FALSE_POSITIVE;
            case 95:
                return var0;
        }
    };
    var2.useCtaButtonType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11601, 4248, 2]);