// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48279: for (var _fun48279_ip = 0;;) switch (_fun48279_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var0 = undefined;
            var2.styles = var0;
            var1 = dependencyMap;
            var6 = 0;
            var3 = var1[var6];
            var1 = require;
            var7 = var1.bind(var0)(var3);
            var4 = var7.StyleSheet;
            var3 = var4.create;
            var1 = {};
            var5 = {
                'marginTop': 20,
                'alignItems': 'center',
                'position': 'absolute'
            };
            var1.stepNumber = var5;
            var5 = {
                'zIndex': 1,
                'width': '100%'
            };
            var1.sliderMainContainer = var5;
            var5 = {};
            var8 = 40;
            var5.height = var8;
            var1.defaultSlideriOS = var5;
            var5 = {};
            var1.defaultSlider = var5;
            var5 = {
                'flex': 1,
                'flexDirection': 'row',
                'justifyContent': 'space-between',
                'top': null,
                'zIndex': 2
            };
            var7 = var7.Platform;
            var8 = var7.OS;
            var7 = 'ios';
            if (!(var7 === var8)) {
                _fun48279_ip = 171;
                continue _fun48279
            }
        case 168:
            var6 = 10;
        case 171:
            var5.top = var6;
            var1.stepsIndicator = var5;
            var5 = {
                'alignItems': 'center',
                'alignContent': 'center',
                'alignSelf': 'center',
                'justifyContent': 'center',
                'position': 'absolute',
                'zIndex': 3
            };
            var1.trackMarkContainer = var5;
            var5 = {
                'position': 'absolute',
                'zIndex': 3,
                'justifyContent': 'center',
                'alignItems': 'center',
                'alignContent': 'center'
            };
            var1.thumbImageContainer = var5;
            var5 = {
                'alignContent': 'center',
                'alignItems': 'center',
                'position': 'absolute'
            };
            var1.thumbImage = var5;
            var5 = {
                'alignItems': 'center',
                'alignContent': 'center'
            };
            var1.stepIndicatorElement = var5;
            var5 = {
                'height': 20,
                'width': 5,
                'backgroundColor': '#CCCCCC'
            };
            var1.defaultIndicatorMarked = var5;
            var5 = {
                'height': 10,
                'width': 2,
                'backgroundColor': '#C0C0C0'
            };
            var1.defaultIndicatorIdle = var5;
            var1 = var3.bind(var4)(var1);
            var2.styles = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);