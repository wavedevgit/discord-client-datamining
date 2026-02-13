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
        'message': '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `undefined`.',
        'type': 'InvariantViolation'
    };
    var0.refreshBooleanMissing = var2;
    var2 = {
        'message': 'sticky headers are not supported when list is in horizontal mode. Remove `stickyHeaderIndices` prop.',
        'type': 'NotSupportedException'
    };
    var0.stickyWhileHorizontalNotSupported = var2;
    var2 = {
        'message': 'numColumns is not supported when list is in horizontal mode. Please remove or set numColumns to 1.',
        'type': 'NotSupportedException'
    };
    var0.columnsWhileHorizontalNotSupported = var2;
    var2 = {
        'message': 'You can set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold. Specifying both is not supported.',
        'type': 'MultipleViewabilityThresholdTypesException'
    };
    var0.multipleViewabilityThresholdTypesNotSupported = var2;
    var2 = {
        'message': 'optimizeItemArrangement has been enabled on `MasonryFlashList` but overrideItemLayout is not set.',
        'type': 'InvariantViolation'
    };
    var0.overrideItemLayoutRequiredForMasonryOptimization = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);