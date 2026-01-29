// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0) { // Original name: defaultButtonStyles, environment: var0
        var2 = arg0;
        var0 = {};
        var1 = {
            'position': 'absolute',
            'bottom': 30,
            'right': 30,
            'backgroundColor': null,
            'padding': 15,
            'borderRadius': 40,
            'justifyContent': 'center',
            'alignItems': 'center',
            'elevation': 5,
            'shadowColor': null,
            'shadowOffset': null,
            'shadowOpacity': 0.5,
            'shadowRadius': 3,
            'flexDirection': 'row',
            'borderWidth': 1
        };
        var3 = var2.background;
        var1.backgroundColor = var3;
        var3 = var2.border;
        var1.shadowColor = var3;
        var3 = {
            'width': 1,
            'height': 2
        };
        var1.shadowOffset = var3;
        var3 = var2.border;
        var1.borderColor = var3;
        var0.triggerButton = var1;
        var1 = {};
        var3 = var2.foreground;
        var1.color = var3;
        var3 = 18;
        var1.fontSize = var3;
        var0.triggerText = var1;
        var1 = {
            'width': 24,
            'height': 24,
            'padding': 2,
            'marginEnd': 6
        };
        var2 = var2.sentryLogo;
        var1.tintColor = var2;
        var0.triggerIcon = var1;
        return var0;
    };
    var3 = function(arg0) { // Original name: defaultStyles, environment: var0
        var2 = arg0;
        var0 = {};
        var1 = {
            'flex': 1,
            'padding': 20
        };
        var3 = var2.background;
        var1.backgroundColor = var3;
        var0.container = var1;
        var1 = {
            'fontSize': 24,
            'fontWeight': 'bold',
            'marginBottom': 20,
            'textAlign': 'left',
            'flex': 1
        };
        var3 = var2.foreground;
        var1.color = var3;
        var0.title = var1;
        var1 = {
            'marginBottom': 4,
            'fontSize': 16
        };
        var3 = 16;
        var4 = var2.foreground;
        var1.color = var4;
        var0.label = var1;
        var1 = {
            'height': 50,
            'borderColor': null,
            'borderWidth': 1,
            'borderRadius': 5,
            'paddingHorizontal': 10,
            'marginBottom': 15,
            'fontSize': 16
        };
        var4 = var2.border;
        var1.borderColor = var4;
        var4 = var2.foreground;
        var1.color = var4;
        var0.input = var1;
        var1 = {
            'height': 100,
            'textAlignVertical': 'top'
        };
        var4 = var2.foreground;
        var1.color = var4;
        var0.textArea = var1;
        var1 = {
            'backgroundColor': null,
            'padding': 15,
            'borderRadius': 5,
            'alignItems': 'center',
            'flex': 1,
            'borderWidth': 1
        };
        var4 = var2.background;
        var1.backgroundColor = var4;
        var4 = var2.border;
        var1.borderColor = var4;
        var0.screenshotButton = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'width': '100%',
            'marginBottom': 20
        };
        var0.screenshotContainer = var1;
        var1 = {
            'width': 50,
            'height': 50,
            'borderRadius': 5,
            'marginRight': 10
        };
        var0.screenshotThumbnail = var1;
        var1 = {};
        var4 = var2.foreground;
        var1.color = var4;
        var1.fontSize = var3;
        var0.screenshotText = var1;
        var1 = {
            'backgroundColor': null,
            'padding': 15,
            'borderRadius': 5,
            'alignItems': 'center',
            'borderWidth': 1,
            'borderColor': null,
            'marginTop': 4294967286,
            'marginBottom': 20
        };
        var4 = var2.background;
        var1.backgroundColor = var4;
        var4 = var2.border;
        var1.borderColor = var4;
        var0.takeScreenshotButton = var1;
        var1 = {};
        var4 = var2.foreground;
        var1.color = var4;
        var1.fontSize = var3;
        var0.takeScreenshotText = var1;
        var1 = {
            'backgroundColor': null,
            'paddingVertical': 15,
            'borderRadius': 5,
            'alignItems': 'center',
            'marginBottom': 10
        };
        var4 = var2.accentBackground;
        var1.backgroundColor = var4;
        var0.submitButton = var1;
        var1 = {};
        var4 = var2.accentForeground;
        var1.color = var4;
        var4 = 18;
        var1.fontSize = var4;
        var0.submitText = var1;
        var1 = {
            'backgroundColor': null,
            'padding': 15,
            'borderRadius': 5,
            'alignItems': 'center',
            'borderWidth': 1
        };
        var4 = var2.background;
        var1.backgroundColor = var4;
        var4 = var2.border;
        var1.borderColor = var4;
        var0.cancelButton = var1;
        var1 = {};
        var4 = var2.foreground;
        var1.color = var4;
        var1.fontSize = var3;
        var0.cancelText = var1;
        var1 = {
            'flexDirection': 'row',
            'width': '100%'
        };
        var0.titleContainer = var1;
        var1 = {
            'width': 40,
            'height': 40
        };
        var2 = var2.sentryLogo;
        var1.tintColor = var2;
        var0.sentryLogo = var1;
        return var0;
    };
    var1.default = var3;
    var1.defaultButtonStyles = var2;
    var1.defaultScreenshotButtonStyles = var2;
    var2 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var1.modalWrapper = var2;
    var0 = function(arg0) { // Original name: modalSheetContainer, environment: var0
        var0 = {
            'backgroundColor': null,
            'borderTopLeftRadius': 16,
            'borderTopRightRadius': 16,
            'overflow': 'hidden',
            'alignSelf': 'stretch',
            'shadowColor': '#000',
            'shadowOffset': null,
            'shadowOpacity': 0.1,
            'shadowRadius': 4,
            'elevation': 5,
            'flex': 1
        };
        var1 = arg0;
        var1 = var1.background;
        var0.backgroundColor = var1;
        var1 = {
            'width': 0,
            'height': 4294967293
        };
        var0.shadowOffset = var1;
        return var0;
    };
    var1.modalSheetContainer = var0;
    var0 = {};
    var2 = 64;
    var0.height = var2;
    var1.topSpacer = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);