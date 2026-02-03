// modules/voice_panel/native/VoicePanelStateContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var9 = global;
    var6 = var9.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var14 = 0;
    var3 = var5[var14];
    var1 = metroImportAll;
    var0 = undefined;
    var6 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var12 = var1.VoicePanelModes;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var17 = var1.CONTROLS_HEIGHT;
    var18 = var1.VoicePanelControlsModes;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var13 = var1.MorphablePanelModes;
    var3 = var6.createContext;
    var1 = {};
    var7 = 'context-not-initialized';
    var1.channelId = var7;
    var7 = 4;
    var10 = var5[var7];
    var15 = var4.bind(var0)(var10);
    var11 = var15.createFakeSharedValue;
    var10 = false;
    var11 = var11.bind(var15)(var10);
    var1.connected = var11;
    var11 = var5[var7];
    var16 = var4.bind(var0)(var11);
    var15 = var16.createFakeSharedValue;
    var11 = {
        'width': 0,
        'height': 0
    };
    var11 = var15.bind(var16)(var11);
    var1.contentDimensions = var11;
    var11 = var5[var7];
    var16 = var4.bind(var0)(var11);
    var15 = var16.createFakeSharedValue;
    var11 = {};
    var18 = var18.FLOATING_DEFAULT;
    var11.mode = var18;
    var11.locked = var10;
    var11.height = var17;
    var11.pushToTalk = var10;
    var11 = var15.bind(var16)(var11);
    var1.controlsSpecs = var11;
    var11 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.dismissDrawer: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.dismissPanel = var11;
    var11 = {};
    var11.current = var0;
    var1.dismissToPIPGestureRef = var11;
    var11 = var5[var7];
    var15 = var4.bind(var0)(var11);
    var11 = var15.createFakeSharedValue;
    var11 = var11.bind(var15)(var10);
    var1.dragScrolling = var11;
    var11 = var5[var7];
    var16 = var4.bind(var0)(var11);
    var15 = var16.createFakeSharedValue;
    var11 = null;
    var15 = var15.bind(var16)(var11);
    var1.focused = var15;
    var15 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.generateStateLocker: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.generateStateLocker = var15;
    var1.guildId = var0;
    var15 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.hideControls: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.hideControls = var15;
    var1.isCall = var10;
    var15 = var5[var7];
    var16 = var4.bind(var0)(var15);
    var15 = var16.createFakeSharedValue;
    var15 = var15.bind(var16)(var10);
    var1.isFocusedVideoZoomed = var15;
    var15 = 5;
    var16 = var5[var15];
    var15 = arg2;
    var17 = var15.bind(var0)(var16);
    var15 = var17.prototype;
    var16 = Object.create(var15, {
        constructor: {
            value: var17
        }
    });
    var21 = 'invalid';
    var22 = var16;
    var15 = new var22[var17](var21, var20);
    var15 = var15 instanceof Object ? var15 : var16;
    var1.layoutManager = var15;
    var15 = var5[var7];
    var17 = var4.bind(var0)(var15);
    var16 = var17.createFakeSharedValue;
    var15 = var12.PANEL;
    var15 = var16.bind(var17)(var15);
    var1.mode = var15;
    var15 = var5[var7];
    var16 = var4.bind(var0)(var15);
    var15 = var16.createFakeSharedValue;
    var13 = var13.PANEL;
    var13 = var15.bind(var16)(var13);
    var1.morphablePanelMode = var13;
    var9 = var9.Set;
    var13 = var9.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var9
        }
    });
    var22 = var13;
    var9 = new var22[var9](var21);
    var9 = var9 instanceof Object ? var9 : var13;
    var1.mountedCards = var9;
    var9 = var5[var7];
    var15 = var4.bind(var0)(var9);
    var13 = var15.createFakeSharedValue;
    var9 = {
        'top': 0,
        'bottom': 0
    };
    var9 = var13.bind(var15)(var9);
    var1.pipAvoidanceSpecs = var9;
    var9 = {};
    var9.current = var11;
    var13 = function() {
        var0 = 0;
        return var0;
    };
    var9.getTag = var13;
    var1.pipContainerRef = var9;
    var9 = var5[var7];
    var13 = var4.bind(var0)(var9);
    var9 = var13.createFakeSharedValue;
    var9 = var9.bind(var13)(var14);
    var1.preJoinContentSize = var9;
    var9 = var5[var7];
    var15 = var4.bind(var0)(var9);
    var13 = var15.createFakeSharedValue;
    var9 = 6;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.EMPTY_SAFE_AREA_INSETS;
    var9 = var13.bind(var15)(var9);
    var1.safeArea = var9;
    var9 = var5[var7];
    var13 = var4.bind(var0)(var9);
    var9 = var13.createFakeSharedValue;
    var9 = var9.bind(var13)(var14);
    var1.scrollPosition = var9;
    var9 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.setControlsMode: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setControlsMode = var9;
    var9 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.setFocused: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setFocused = var9;
    var9 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.showControls: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setIsFocusedVideoZoomed = var9;
    var9 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.setMode: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setMode = var9;
    var9 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.showFloatingCTA: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setShowFloatingCTA = var9;
    var8 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.showControls: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.showControls = var8;
    var8 = var5[var7];
    var9 = var4.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var11);
    var1.showFloatingCTA = var8;
    var8 = {};
    var1.streamOutputSinkStack = var8;
    var8 = var5[var7];
    var11 = var4.bind(var0)(var8);
    var9 = var11.createFakeSharedValue;
    var8 = {
        'width': 0,
        'height': 0,
        'landscape': false
    };
    var8 = var9.bind(var11)(var8);
    var1.windowDimensions = var8;
    var8 = var5[var7];
    var11 = var4.bind(var0)(var8);
    var9 = var11.createFakeSharedValue;
    var8 = {
        'drawerWidth': 0,
        'drawerHeight': 0,
        'drawerX': 0,
        'drawerY': 0,
        'pipX': 0,
        'pipY': 0,
        'animated': true
    };
    var12 = var12.PANEL;
    var8.mode = var12;
    var8 = var9.bind(var11)(var8);
    var1.wrapperDimensions = var8;
    var8 = var5[var7];
    var9 = var4.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var10);
    var1.useReducedMotion = var8;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createFakeSharedValue;
    var7 = {
        'gestureActive': false,
        'x': 0,
        'y': 0
    };
    var7 = var8.bind(var9)(var7);
    var1.wrapperOffset = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/VoicePanelStateContext.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11803, 11801, 11804, 5250, 11805, 1570, 2]);