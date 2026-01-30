// modules/guild_member_verification/MemberVerificationTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = function(arg0) { // Original name: isTermsFormField, environment: var3
        _fun27710: for (var _fun27710_ip = 0;;) switch (_fun27710_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun27710_ip = 35;
                    continue _fun27710
                }
            case 12:
                var2 = var1.field_type;
                var1 = _closure1_slot0;
                var1 = var1.TERMS;
                var0 = var2 === var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var8 = {};
    var0 = 'TERMS';
    var8.TERMS = var0;
    var0 = 'TEXT_INPUT';
    var8.TEXT_INPUT = var0;
    var0 = 'PARAGRAPH';
    var8.PARAGRAPH = var0;
    var0 = 'MULTIPLE_CHOICE';
    var8.MULTIPLE_CHOICE = var0;
    var0 = 'VERIFICATION';
    var8.VERIFICATION = var0;
    var _closure1_slot0 = var8;
    var7 = {};
    var0 = 'email';
    var7.EMAIL = var0;
    var0 = 'phone';
    var7.PHONE = var0;
    var6 = {};
    var0 = 'NEWEST';
    var6.TIMESTAMP_DESC = var0;
    var0 = 'OLDEST';
    var6.TIMESTAMP_ASC = var0;
    var5 = {};
    var0 = 'STARTED';
    var5.STARTED = var0;
    var0 = 'SUBMITTED';
    var5.SUBMITTED = var0;
    var0 = 'REJECTED';
    var5.REJECTED = var0;
    var0 = 'APPROVED';
    var5.APPROVED = var0;
    var1 = {};
    var0 = 'REGULAR';
    var1.REGULAR = var0;
    var0 = 'COMPACT';
    var1.COMPACT = var0;
    var9 = arg6;
    var0 = 0;
    var10 = var9[var0];
    var9 = arg1;
    var0 = undefined;
    var11 = var9.bind(var0)(var10);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_member_verification/MemberVerificationTypes.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = 25;
    var2.MAX_RESULTS_PER_PAGE = var9;
    var9 = 4;
    var2.MAX_VISIBLE_PAGES = var9;
    var2.VerificationFormFieldTypes = var8;
    var2.UserVerificationFieldPlatforms = var7;
    var2.GuildJoinRequestSortOrders = var6;
    var2.GuildJoinRequestApplicationStatuses = var5;
    var2.isTermsFormField = var4;
    var3 = function(arg0) { // Original name: hasNonTermsFormField, environment: var3
        _fun27711: for (var _fun27711_ip = 0;;) switch (_fun27711_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun27711_ip = 30;
                    continue _fun27711
                }
            case 12:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 30:
                return var0;
        }
    };
    var2.hasNonTermsFormField = var3;
    var2.VerificationFieldStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);