// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = {};
    var2 = {
        'message': 'Parameters required for initializing the module are missing',
        'type': 'Initialization essentials missing'
    };
    var0.initializationException = var2;
    var2 = {
        'message': 'Dimensions cannot be undefined or null, check if LayoutProvider returns irregular values',
        'type': 'ItemBoundsException'
    };
    var0.itemBoundsException = var2;
    var2 = {
        'message': 'RecyclerListView items always require a type, check if LayoutProvider returns irregular values',
        'type': 'ItemTypeNullException'
    };
    var0.itemTypeNullException = var2;
    var2 = {
        'message': 'RecyclerListView needs to have a bounded size. Currently height or, width is 0.Consider adding style={{flex:1}} or, fixed dimensions',
        'type': 'LayoutException'
    };
    var0.layoutException = var2;
    var2 = {
        'message': "Unable to detect the running platform, if you're trying to run recyclerlistview in browser make sure process.env.RLV_ENV is set to browser in webpack config",
        'type': 'PlatformNotDetectedException'
    };
    var0.platformNotDetectedException = var2;
    var2 = {
        'message': 'missing datasource or layout provider, cannot proceed without it',
        'type': 'UnresolvedDependenciesException'
    };
    var0.unresolvedDependenciesException = var2;
    var2 = {
        'message': 'When using StickyContainer, RecyclerListView needs to use ref as a function and not as a string.',
        'type': 'RefNotAsFunctionException'
    };
    var0.refNotAsFunctionException = var2;
    var2 = {
        'message': 'StickyContainer can only have a single child of type RecyclerListView.',
        'type': 'WrongStickyChildTypeException'
    };
    var0.wrongStickyChildTypeException = var2;
    var2 = {
        'message': 'onVisibleIndexesChanged has been deprecated. Please use onVisibleIndicesChanged instead.',
        'type': 'usingOldVisibleIndexesChangedParam'
    };
    var0.usingOldVisibleIndexesChangedParam = var2;
    var2 = {
        'message': "The sticky indices array passed to StickyContainer isn't sorted in ascending order.",
        'type': 'stickyIndicesArraySortError'
    };
    var0.stickyIndicesArraySortError = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);