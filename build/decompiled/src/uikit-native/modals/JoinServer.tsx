// uikit-native/modals/JoinServer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function() {
        var0 = _closure1_slot11;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var8.separator;
        var0.style = var4;
        var7 = _closure1_slot8;
        var6 = _closure1_slot4;
        var4 = {};
        var9 = var8.innerSeparator;
        var4.style = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var9 = _closure1_slot8;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var6 = 6;
        var6 = var14[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-sm/semibold',
            'color': 'text-muted'
        };
        var10 = var8.orText;
        var6.style = var10;
        var10 = 7;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.HEuagM;
        var10 = var11.bind(var12)(var10);
        var6.children = var10;
        var6 = var9.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var8.innerSeparator;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var7 = 0;
    var8 = var6[var7];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var11 = 2;
    var4 = var6[var11];
    var4 = var5.bind(var0)(var4);
    var8 = var4.CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT;
    var _closure1_slot6 = var8;
    var4 = var4.CreateGuildModalStates;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.jsxs;
    var _closure1_slot9 = var8;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10.flexGrow = var11;
    var12 = 5;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var10.minHeight = var14;
    var4.growSpacing = var10;
    var10 = {};
    var10.flexGrow = var11;
    var11 = var6[var12];
    var11 = var13.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.paddingHorizontal = var11;
    var11 = var6[var12];
    var11 = var13.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.paddingBottom = var11;
    var4.container = var10;
    var10 = {};
    var11 = var6[var12];
    var11 = var13.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10.borderRadius = var11;
    var4.textInput = var10;
    var10 = {
        'height': 1,
        'flexGrow': 2
    };
    var11 = var6[var12];
    var11 = var13.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var10.backgroundColor = var11;
    var4.innerSeparator = var10;
    var11 = 'center';
    var10 = {
        'paddingVertical': 12,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.separator = var10;
    var10 = {
        'textAlign': 'center',
        'marginHorizontal': null,
        'textTransform': 'uppercase'
    };
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10.marginHorizontal = var12;
    var4.orText = var10;
    var10 = {};
    var10.textAlign = var11;
    var4.header = var10;
    var11 = 8;
    var10 = {
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var4.description = var10;
    var10 = {};
    var10.marginTop = var11;
    var4.exampleText = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = ['https://discord.gg/hTKzmak', 'hTKzmak', 'https://discord.gg/wumpus-friends'];
    var _closure1_slot12 = var4;
    var4 = var4[var7];
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/JoinServer.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun61009: for (var _fun61009_ip = 0;;) switch (_fun61009_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.error;
                var20 = var0.inviteString;
                var15 = var0.onInviteChange;
                var18 = var0.onDone;
                var19 = var0.submitting;
                var0 = _closure1_slot11;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.insets;
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var1 = 10;
                var1 = var11[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var8 = var1.height;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot7;
                    var0 = var0.JOIN_STUDENT_HUB;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var5 = var14.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var6.bottom;
                var6 = 5;
                var6 = var11[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var6 = var7 + var6;
                var5.paddingBottom = var6;
                var4[1] = var5;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = _closure1_slot6;
                var7 = var8 <= var7;
                var8 = null;
                if (var7) {
                    _fun61009_ip = 503;
                    continue _fun61009
                }
            case 261:
                var11 = _closure1_slot9;
                var9 = _closure1_slot10;
                var7 = {};
                var22 = _closure1_slot8;
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var16 = 6;
                var13 = var28[var16];
                var13 = var27.bind(var3)(var13);
                var17 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = var14.header;
                var13.style = var24;
                var24 = 7;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var29 = var25.intl;
                var26 = var29.string;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.jlfuFW;
                var25 = var26.bind(var29)(var25);
                var13.children = var25;
                var17 = var22.bind(var3)(var17, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var22 = _closure1_slot8;
                var16 = var28[var16];
                var16 = var27.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var25 = var14.description;
                var16.style = var25;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var28[var24];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.lVvN3A;
                var24 = var25.bind(var26)(var24);
                var16.children = var24;
                var16 = var22.bind(var3)(var17, var16);
                var13[1] = var16;
                var7.children = var13;
                var8 = var11.bind(var3)(var9, var7);
            case 503:
                var7 = new Array(3);
                var7[0] = var8;
                var11 = _closure1_slot8;
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 11;
                var8 = var17[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var16 = _closure1_slot0;
                var13 = 7;
                var22 = var17[var13];
                var22 = var16.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var17[var13];
                var22 = var16.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.qreV25;
                var22 = var24.bind(var25)(var22);
                var8.label = var22;
                var8.error = var21;
                var8.value = var20;
                var8.onChangeText = var15;
                var15 = _closure1_slot13;
                var8.placeholder = var15;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var21 = var15.intl;
                var20 = var21.string;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.qreV25;
                var15 = var20.bind(var21)(var15);
                var8.accessibilityLabel = var15;
                var15 = true;
                var8.autoFocus = var15;
                var15 = 'none';
                var8.autoCapitalize = var15;
                var15 = false;
                var8.autoCorrect = var15;
                var15 = 'join';
                var8.returnKeyType = var15;
                var15 = var14.textInput;
                var8.textStyle = var15;
                var8.onSubmitEditing = var18;
                var8 = var11.bind(var3)(var9, var8);
                var7[1] = var8;
                var11 = _closure1_slot8;
                var8 = 6;
                var8 = var17[var8];
                var8 = var16.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var15 = var14.exampleText;
                var8.style = var15;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var22 = var15.intl;
                var21 = var22.format;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var20 = var15.vwWaTe;
                var15 = {};
                var25 = _closure1_slot12;
                var24 = 0;
                var24 = var25[var24];
                var15.example1 = var24;
                var24 = 1;
                var24 = var25[var24];
                var15.example2 = var24;
                var24 = 2;
                var24 = var25[var24];
                var15.example3 = var24;
                var23 = function arg0, arg1() {
                    var4 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15.exampleHook = var23;
                var15 = var21.bind(var22)(var20, var15);
                var8.children = var15;
                var8 = var11.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot10;
                var5 = {};
                var11 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = var14.growSpacing;
                var8.style = var14;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var15 = _closure1_slot8;
                var9 = 12;
                var11 = var17[var9];
                var11 = var16.bind(var3)(var11);
                var14 = var11.Button;
                var11 = {};
                var20 = 'lg';
                var11.size = var20;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["+H/coT"];
                var20 = var21.bind(var22)(var20);
                var11.text = var20;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["+H/coT"];
                var20 = var21.bind(var22)(var20);
                var11.accessibilityLabel = var20;
                var11.loading = var19;
                var11.disabled = var19;
                var11.onPress = var18;
                var11 = var15.bind(var3)(var14, var11);
                var8[1] = var11;
                var15 = _closure1_slot8;
                var14 = _closure1_slot14;
                var11 = {};
                var11 = var15.bind(var3)(var14, var11);
                var8[2] = var11;
                var11 = _closure1_slot8;
                var9 = var17[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {
                    'size': 'lg',
                    'variant': 'secondary'
                };
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var18 = var14.intl;
                var15 = var18.string;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["MOqX/G"];
                var14 = var15.bind(var18)(var14);
                var9.text = var14;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["MOqX/G"];
                var13 = var14.bind(var15)(var13);
                var9.accessibilityLabel = var13;
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.OrSeparator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7546, 33, 1297, 671, 3941, 1234, 4893, 1469, 1464, 5882, 4084, 2]);