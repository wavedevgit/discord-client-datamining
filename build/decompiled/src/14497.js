// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var4 = var1.RegExp;
    var0 = undefined;
    var3 = '^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$';
    var7 = 'i';
    var5 = var4.bind(var0)(var3, var7);
    var4 = var1.RegExp;
    var3 = '^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b';
    var4 = var4.bind(var0)(var3, var7);
    var6 = var1.RegExp;
    var3 = '^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b';
    var3 = var6.bind(var0)(var3, var7);
    var7 = var1.RegExp;
    var6 = '-[0-9a-wy-z](?:-[a-z0-9]{2,8})+';
    var1 = 'ig';
    var1 = var7.bind(var0)(var6, var1);
    var2.expBCP47Syntax = var5;
    var2.expVariantDupes = var4;
    var2.expSingletonDupes = var3;
    var2.expExtSequences = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);