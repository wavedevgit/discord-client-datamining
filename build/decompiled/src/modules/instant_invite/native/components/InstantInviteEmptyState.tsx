// modules/instant_invite/native/components/InstantInviteEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var12 = 4;
    var3 = var5[var12];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.container = var8;
    var8 = {
        'padding': 0,
        'marginBottom': 16
    };
    var3.emptyStateContainer = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.emptyStateArt = var8;
    var8 = {};
    var8.marginBottom = var12;
    var3.emptyStateTitle = var8;
    var8 = {
        'maxWidth': '100%',
        'flexDirection': 'row',
        'marginBottom': 8,
        'gap': 8
    };
    var3.linkContainer = var8;
    var8 = {};
    var8.flexShrink = var11;
    var3.inviteInput = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.expireCaption = var8;
    var8 = {
        'width': 48,
        'height': 48,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.settingsButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InstantInviteEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun67305: for (var _fun67305_ip = 0;;) switch (_fun67305_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.link;
                var9 = var0.onCopy;
                var8 = var0.onShare;
                var16 = var0.onPressSettings;
                var0 = _closure1_slot7;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 6;
                var0 = var17[var0];
                var4 = var20.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var1 = _closure1_slot4;
                    var0 = var1.getInviteSettings;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var15 = _closure1_slot5;
                var14 = _closure1_slot1;
                var4 = 7;
                var4 = var17[var4];
                var5 = var14.bind(var3)(var4);
                var4 = {};
                var6 = var11.emptyStateContainer;
                var4.containerStyle = var6;
                var6 = var11.emptyStateArt;
                var4.imageStyle = var6;
                var6 = var11.emptyStateTitle;
                var4.titleStyle = var6;
                var6 = 8;
                var6 = var17[var6];
                var6 = var14.bind(var3)(var6);
                var4.source = var6;
                var13 = 9;
                var6 = var17[var13];
                var6 = var20.bind(var3)(var6);
                var19 = var6.intl;
                var18 = var19.string;
                var6 = var17[var13];
                var6 = var20.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.tQc0l8;
                var6 = var18.bind(var19)(var6);
                var4.title = var6;
                var6 = var17[var13];
                var6 = var20.bind(var3)(var6);
                var19 = var6.intl;
                var18 = var19.string;
                var6 = var17[var13];
                var6 = var20.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.DXgdcD;
                var6 = var18.bind(var19)(var6);
                var4.body = var6;
                var5 = var15.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var5 = {};
                var6 = var11.linkContainer;
                var5.style = var6;
                var6 = 10;
                var6 = var17[var6];
                var14 = var14.bind(var3)(var6);
                var6 = {
                    'accessibilityRole': 'button',
                    'onPress': null,
                    'editable': false,
                    'value': null,
                    'style': null,
                    'forceAccessibleContainer': true
                };
                var17 = 'button';
                var6.onPress = var9;
                var9 = null;
                var18 = var9 != var12;
                var9 = '';
                if (!var18) {
                    _fun67305_ip = 367;
                    continue _fun67305
                }
            case 364:
                var9 = var12;
            case 367:
                var6.value = var9;
                var9 = var11.inviteInput;
                var6.style = var9;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var18 = 11;
                var18 = var9[var18];
                var18 = var12.bind(var3)(var18);
                var18 = var18.ClearButtonVisibility;
                var18 = var18.NEVER;
                var6.clearButtonVisibility = var18;
                var14 = var15.bind(var3)(var14, var6);
                var6 = new Array(2);
                var6[0] = var14;
                var7 = _closure1_slot5;
                var14 = 12;
                var14 = var9[var14];
                var14 = var12.bind(var3)(var14);
                var15 = var14.PressableOpacity;
                var14 = {};
                var18 = var9[var13];
                var18 = var12.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var9[var13];
                var18 = var12.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["3D5yo/"];
                var18 = var19.bind(var20)(var18);
                var14.accessibilityLabel = var18;
                var14.accessibilityRole = var17;
                var14.onPress = var16;
                var16 = var11.settingsButton;
                var14.style = var16;
                var16 = 13;
                var16 = var9[var16];
                var16 = var12.bind(var3)(var16);
                var17 = var16.SettingsIcon;
                var16 = {};
                var16 = var7.bind(var3)(var17, var16);
                var14.children = var16;
                var14 = var7.bind(var3)(var15, var14);
                var6[1] = var14;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var5 = 14;
                var5 = var9[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var11 = var11.expireCaption;
                var5.style = var11;
                var10 = function() { // Environment: var10
                    _fun67307: for (var _fun67307_ip = 0;;) switch (_fun67307_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun67307_ip = 287;
                                continue _fun67307
                            }
                        case 16:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var8 = 15;
                            var4 = var3[var8];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.getMaxAgeOptionByValue;
                            var4 = _closure2_slot0;
                            var4 = var4.maxAge;
                            var4 = var5.bind(var6)(var4);
                            var7 = var0 != var4;
                            var5 = '';
                            var6 = var5;
                            if (!var7) {
                                _fun67307_ip = 98;
                                continue _fun67307
                            }
                        case 76:
                            var7 = var4.descriptiveLabel;
                            var9 = var0 != var7;
                            var4 = var5;
                            if (!var9) {
                                _fun67307_ip = 95;
                                continue _fun67307
                            }
                        case 92:
                            var4 = var7;
                        case 95:
                            var6 = var4;
                        case 98:
                            var7 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var8];
                            var4 = var7.bind(var3)(var4);
                            var8 = var4.getMaxUsesOptions;
                            var7 = var8.find;
                            var4 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure2_slot0;
                                var0 = var0.maxUses;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var7.bind(var8)(var4);
                            var7 = var0 != var4;
                            if (!var7) {
                                _fun67307_ip = 153;
                                continue _fun67307
                            }
                        case 147:
                            var5 = var4.descriptiveLabel;
                        case 153:
                            var2 = _closure2_slot0;
                            var4 = var2.maxAge;
                            var2 = 0;
                            if (!(var2 !== var4)) {
                                _fun67307_ip = 204;
                                continue _fun67307
                            }
                        case 169:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 9;
                            var2 = var7[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.t;
                            var4 = var2.dqPWMN;
                            _fun67307_ip = 237;
                            continue _fun67307;
                        case 204:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 9;
                            var2 = var8[var2];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.t;
                            var4 = var2["99ISmn"];
                        case 237:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.intl;
                            var2 = var3.format;
                            var1 = {};
                            var1.maxAge = var6;
                            var1.maxUses = var5;
                            var1 = var2.bind(var3)(var4, var1);
                            return var1;
                        case 287:
                            return var0;
                    }
                };
                var10 = var10.bind(var3)();
                var5.children = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = 16;
                var5 = var9[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Ej3B3Y;
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8288, 33, 1297, 671, 566, 8313, 8314, 1234, 5842, 5364, 4858, 5326, 3895, 8289, 4037, 2]);