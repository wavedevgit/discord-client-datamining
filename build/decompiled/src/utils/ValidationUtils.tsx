// utils/ValidationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
    var _closure1_slot0 = var1;
    var1 = /^((https:\\/\\ / ) ? (discord\.gg\\ / ) | (discord\.com\\ / )(invite\\ / ) ? ) ? [A - Za - z0 - 9] {
    8,
    8
}
$ / ;
var _closure1_slot1 = var1;
var1 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
var _closure1_slot2 = var1;
var1 = /^(.*)#[0-9]{1,5}$/;
var _closure1_slot3 = var1;
var1 = /^(https:\\/\\ / ) ? (discord\.com\\ / discovery\\ / game\\ / )([0 - 9 - ] + )\\ / ? /;
var _closure1_slot4 = var1;
var1 = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'];
var _closure1_slot5 = var1;
var1 = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
var _closure1_slot6 = var1;
var1 = {};
var3 = function(arg0) { // Original name: isEmail, environment: var0
    var2 = _closure1_slot0;
    var1 = var2.test;
    var0 = arg0;
    var0 = var1.bind(var2)(var0);
    return var0;
};
var1.isEmail = var3;
var3 = function(arg0) { // Original name: isInvite, environment: var0
    var2 = _closure1_slot1;
    var1 = var2.test;
    var0 = arg0;
    var0 = var1.bind(var2)(var0);
    return var0;
};
var1.isInvite = var3;
var3 = function(arg0) { // Original name: isPhoneNumber, environment: var0
    var2 = _closure1_slot2;
    var1 = var2.test;
    var0 = arg0;
    var0 = var1.bind(var2)(var0);
    return var0;
};
var1.isPhoneNumber = var3;
var3 = function(arg0) { // Original name: isUserTagLike, environment: var0
    _fun51561: for (var _fun51561_ip = 0;;) switch (_fun51561_ip) {
        case 0:
            var4 = _closure1_slot3;
            var3 = var4.exec;
            var2 = arg0;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if (!(var2 != var3)) {
                _fun51561_ip = 41;
                continue _fun51561
            }
        case 29:
            var4 = var3.length;
            var2 = 1;
            if (!(!(var4 > var2))) {
                _fun51561_ip = 45;
                continue _fun51561
            }
        case 41:
            var4 = false;
            return var4;
        case 45:
            var3 = var3[var2];
            var _closure2_slot0 = var3;
            var4 = _closure1_slot5;
            var2 = var4.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure2_slot0;
                var1 = var2.includes;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var4)(var0);
            var2 = _closure1_slot6;
            var1 = var2.includes;
            var1 = var1.bind(var2)(var3);
            var0 = !var0;
            if (!var0) {
                _fun51561_ip = 96;
                continue _fun51561
            }
        case 93:
            var0 = !var1;
        case 96:
            return var0;
    }
};
var1.isUserTagLike = var3;
var0 = function(arg0) { // Original name: isDiscoveryLink, environment: var0
    var2 = _closure1_slot4;
    var1 = var2.test;
    var0 = arg0;
    var0 = var1.bind(var2)(var0);
    return var0;
};
var1.isDiscoveryLink = var0;
var3 = arg6;
var0 = 0;
var4 = var3[var0];
var3 = arg1;
var0 = undefined;
var5 = var3.bind(var0)(var4);
var4 = var5.fileFinishedImporting;
var3 = 'utils/ValidationUtils.tsx';
var3 = var4.bind(var5)(var3);
var2.default = var1;
return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);