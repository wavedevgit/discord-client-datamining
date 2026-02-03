// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94000: for (var _fun94000_ip = 0;;) switch (_fun94000_ip) {
        case 0:
            var0 = global;
            var0 = var0.Number;
            var0 = var0.MAX_SAFE_INTEGER;
            if (var0) {
                _fun94000_ip = 27;
                continue _fun94000
            }
        case 17:
            var0 = 9007199254740991.0;
        case 27:
            var1 = {
                'MAX_LENGTH': 256,
                'MAX_SAFE_COMPONENT_LENGTH': 16,
                'MAX_SAFE_BUILD_LENGTH': 250,
                'MAX_SAFE_INTEGER': null,
                'RELEASE_TYPES': null,
                'SEMVER_SPEC_VERSION': '2.0.0',
                'FLAG_INCLUDE_PRERELEASE': 1,
                'FLAG_LOOSE': 2
            };
            var1.MAX_SAFE_INTEGER = var0;
            var0 = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
            var1.RELEASE_TYPES = var0;
            var0 = module;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);