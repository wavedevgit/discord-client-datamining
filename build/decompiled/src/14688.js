// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var6 = var1.bind(var0)(var3);
    var3 = {
        'VERIFIED': '0',
        'SUPERVISED': '1',
        'SUPERVISED_APPROVAL_PENDING': '2',
        'SUPERVISED_APPROVAL_DENIED': '3',
        'UNKNOWN': '4'
    };
    var5 = var3.VERIFIED;
    var4 = {};
    var1 = 'VERIFIED';
    var5 = var6.bind(var0)(var4, var5, var1);
    var4 = var3.SUPERVISED;
    var1 = 'SUPERVISED';
    var5 = var6.bind(var0)(var5, var4, var1);
    var4 = var3.SUPERVISED_APPROVAL_PENDING;
    var1 = 'SUPERVISED_APPROVAL_PENDING';
    var5 = var6.bind(var0)(var5, var4, var1);
    var4 = var3.SUPERVISED_APPROVAL_DENIED;
    var1 = 'SUPERVISED_APPROVAL_DENIED';
    var5 = var6.bind(var0)(var5, var4, var1);
    var4 = var3.UNKNOWN;
    var1 = 'UNKNOWN';
    var1 = var6.bind(var0)(var5, var4, var1);
    var2.PlayAgeRangeDeclarationUserStatus = var3;
    var2.PlayAgeRangeDeclarationUserStatusString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77]);