// modules/user_settings/native/defs/CopyClientInfoSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun85574: for (var _fun85574_ip = 0;;) switch (_fun85574_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                var3 = 'N/A';
                var0 = var3;
                if (var2) {
                    _fun85574_ip = 35;
                    continue _fun85574
                }
            case 21:
                var2 = '';
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun85574_ip = 35;
                    continue _fun85574
                }
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = function() {
        _fun85575: for (var _fun85575_ip = 0;;) switch (_fun85575_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentBuildOverride;
                var0 = var0.bind(var2)();
                var2 = var0.overrides;
                var7 = null;
                var0 = var7 == var2;
                var3 = undefined;
                var5 = undefined;
                if (var0) {
                    _fun85575_ip = 66;
                    continue _fun85575
                }
            case 36:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.DEVICE_FIELD;
                var5 = var2[var0];
            case 66:
                var0 = _closure1_slot7;
                var2 = var0.Manifest;
                var0 = var2.trim;
                var0 = var0.bind(var2)();
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                var2 = 'N/A';
                var4 = var2;
                if (!var0) {
                    _fun85575_ip = 119;
                    continue _fun85575
                }
            case 109:
                var0 = _closure1_slot7;
                var4 = var0.Manifest;
            case 119:
                var0 = _closure1_slot8;
                var6 = _closure1_slot7;
                var6 = var6.Build;
                var6 = var0.bind(var3)(var6);
                var7 = var7 != var5;
                if (!var7) {
                    _fun85575_ip = 150;
                    continue _fun85575
                }
            case 145:
                var2 = var5.id;
            case 150:
                var5 = var0.bind(var3)(var2);
                var0 = {};
                var2 = _closure1_slot8;
                var7 = _closure1_slot7;
                var7 = var7.Version;
                var7 = var2.bind(var3)(var7);
                var0.appVersion = var7;
                var0.buildNumber = var6;
                var0.buildOverride = var5;
                var0.manifest = var4;
                var1 = _closure1_slot7;
                var1 = var1.ReleaseChannel;
                var1 = var2.bind(var3)(var1);
                var0.releaseChannel = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 5;
        var1 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.copy;
        var1 = arg0;
        var1 = var4.bind(var5)(var1);
        var1 = 6;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.presentCopiedToClipboard;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun85577: for (var _fun85577_ip = 0;;) switch (_fun85577_ip) {
            case 0:
                var3 = _closure1_slot6;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 7;
                var0 = var9[var0];
                var2 = undefined;
                var0 = var10.bind(var2)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = _closure1_slot4;
                var4 = 8;
                var4 = var9[var4];
                var4 = var10.bind(var2)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var16 = 9;
                var7 = var9[var16];
                var7 = var10.bind(var2)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var9[var16];
                var7 = var10.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.Na2lF9;
                var7 = var8.bind(var12)(var7);
                var4.title = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot6;
                var8 = 10;
                var4 = var9[var8];
                var4 = var10.bind(var2)(var4);
                var4 = var4.ActionSheetRow;
                var5 = var4.Group;
                var4 = {};
                var14 = _closure1_slot4;
                var7 = var9[var8];
                var7 = var10.bind(var2)(var7);
                var12 = var7.ActionSheetRow;
                var7 = {};
                var15 = var9[var16];
                var15 = var10.bind(var2)(var15);
                var18 = var15.intl;
                var17 = var18.string;
                var15 = var9[var16];
                var15 = var10.bind(var2)(var15);
                var15 = var15.t;
                var15 = var15.H66MEk;
                var15 = var17.bind(var18)(var15);
                var7.label = var15;
                var17 = _closure1_slot9;
                var15 = var17.bind(var2)();
                var15 = var15.appVersion;
                var7.subLabel = var15;
                var15 = function() {
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.appVersion;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onPress = var15;
                var12 = var14.bind(var2)(var12, var7);
                var7 = new Array(6);
                var7[0] = var12;
                var15 = _closure1_slot4;
                var12 = var9[var8];
                var12 = var10.bind(var2)(var12);
                var14 = var12.ActionSheetRow;
                var12 = {};
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18.zuaWIt;
                var18 = var19.bind(var20)(var18);
                var12.label = var18;
                var18 = var17.bind(var2)();
                var18 = var18.buildNumber;
                var12.subLabel = var18;
                var18 = function() {
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.buildNumber;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var18;
                var12 = var15.bind(var2)(var14, var12);
                var7[1] = var12;
                var15 = _closure1_slot4;
                var12 = var9[var8];
                var12 = var10.bind(var2)(var12);
                var14 = var12.ActionSheetRow;
                var12 = {};
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18["YD/2+H"];
                var18 = var19.bind(var20)(var18);
                var12.label = var18;
                var18 = var17.bind(var2)();
                var18 = var18.releaseChannel;
                var12.subLabel = var18;
                var18 = function() {
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.releaseChannel;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var18;
                var12 = var15.bind(var2)(var14, var12);
                var7[2] = var12;
                var15 = _closure1_slot4;
                var12 = var9[var8];
                var12 = var10.bind(var2)(var12);
                var14 = var12.ActionSheetRow;
                var12 = {};
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18["4bhpIV"];
                var18 = var19.bind(var20)(var18);
                var12.label = var18;
                var18 = var17.bind(var2)();
                var18 = var18.manifest;
                var12.subLabel = var18;
                var18 = function() {
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.manifest;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var18;
                var12 = var15.bind(var2)(var14, var12);
                var7[3] = var12;
                var15 = _closure1_slot4;
                var12 = var9[var8];
                var12 = var10.bind(var2)(var12);
                var14 = var12.ActionSheetRow;
                var12 = {};
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var9[var16];
                var18 = var10.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18.Wj3LW4;
                var18 = var19.bind(var20)(var18);
                var12.label = var18;
                var17 = var17.bind(var2)();
                var17 = var17.buildOverride;
                var12.subLabel = var17;
                var17 = function() {
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var1.buildOverride;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var17;
                var12 = var15.bind(var2)(var14, var12);
                var7[4] = var12;
                var23 = 11;
                var9 = var9[var23];
                var10 = var10.bind(var2)(var9);
                var9 = var10.isFabric;
                var10 = var9.bind(var10)();
                var9 = null;
                if (!var10) {
                    _fun85577_ip = 895;
                    continue _fun85577
                }
            case 723:
                var14 = _closure1_slot6;
                var12 = _closure1_slot5;
                var10 = {};
                var18 = _closure1_slot4;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = var20[var8];
                var15 = var22.bind(var2)(var15);
                var17 = var15.ActionSheetRow;
                var15 = {
                    'label': 'React Native New Architecture',
                    'subLabel': 'Enabled'
                };
                var21 = 'Enabled';
                var19 = function() {
                    var2 = _closure1_slot10;
                    var0 = undefined;
                    var1 = 'React Native New Architecture is enabled.';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var19;
                var17 = var18.bind(var2)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var19 = _closure1_slot4;
                var17 = var20[var8];
                var17 = var22.bind(var2)(var17);
                var18 = var17.ActionSheetRow;
                var17 = {};
                var24 = 'Bridgeless mode';
                var17.label = var24;
                var20 = var20[var23];
                var20 = var22.bind(var2)(var20);
                var22 = var20.isBridgeless;
                var20 = 'Disabled';
                if (!var22) {
                    _fun85577_ip = 859;
                    continue _fun85577
                }
            case 856:
                var20 = var21;
            case 859:
                var17.subLabel = var20;
                var20 = function() {
                    _fun85584: for (var _fun85584_ip = 0;;) switch (_fun85584_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.isBridgeless;
                            var5 = 'disabled';
                            if (!var1) {
                                _fun85584_ip = 46;
                                continue _fun85584
                            }
                        case 42:
                            var5 = 'enabled';
                        case 46:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var3 = 'Bridgeless is ';
                            var1 = '.';
                            var1 = var4.bind(var3)(var5, var1);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var17.onPress = var20;
                var17 = var19.bind(var2)(var18, var17);
                var15[1] = var17;
                var10.children = var15;
                var9 = var14.bind(var2)(var12, var10);
            case 895:
                var7[5] = var9;
                var4.children = var7;
                var5 = var6.bind(var2)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot4;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var8];
                var5 = var15.bind(var2)(var5);
                var5 = var5.ActionSheetRow;
                var6 = var5.Group;
                var5 = {};
                var9 = true;
                var5.hasIcons = var9;
                var10 = _closure1_slot4;
                var8 = var12[var8];
                var8 = var15.bind(var2)(var8);
                var9 = var8.ActionSheetRow;
                var8 = {};
                var17 = _closure1_slot4;
                var13 = 12;
                var13 = var12[var13];
                var13 = var15.bind(var2)(var13);
                var14 = var13.CopyIcon;
                var13 = {};
                var13 = var17.bind(var2)(var14, var13);
                var8.icon = var13;
                var13 = var12[var16];
                var13 = var15.bind(var2)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var2)(var12);
                var12 = var12.t;
                var12 = var12["7dqZ6H"];
                var12 = var13.bind(var14)(var12);
                var8.label = var12;
                var11 = function() {
                    var2 = _closure1_slot9;
                    var0 = undefined;
                    var3 = var2.bind(var0)();
                    var14 = var3.appVersion;
                    var13 = var3.buildNumber;
                    var21 = var3.releaseChannel;
                    var17 = var3.buildOverride;
                    var2 = _closure1_slot10;
                    var19 = var3.manifest;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var5 = var4[var1];
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.getDeviceInfo;
                    var8 = var5.bind(var6)();
                    var1 = var4[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getSystemVersion;
                    var23 = var1.bind(var3)();
                    var1 = global;
                    var3 = var1.HermesInternal;
                    var6 = var3.concat;
                    var26 = 'Device: ';
                    var24 = ' OS ';
                    var22 = ';';
                    var25 = var8;
                    var15 = var26[var6](var25, var24, var23, var22, var21);
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var26 = 'App: ';
                    var24 = ' (';
                    var22 = ') ';
                    var20 = '; Manifest: ';
                    var18 = '; Build Override: ';
                    var16 = '; ';
                    var25 = var14;
                    var23 = var13;
                    var1 = var26[var8](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var11;
                var8 = var10.bind(var2)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var2)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot4 = var4;
    var4 = var3.Fragment;
    var _closure1_slot5 = var4;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = arg3;
    var4 = var3.bind(var0)(var4);
    var3 = var4.getConstants;
    var3 = var3.bind(var4)();
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createPressable;
    var3 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Na2lF9;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.title = var10;
    var10 = null;
    var3.parent = var10;
    var10 = 15;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.ClipboardListIcon;
    var3.IconComponent = var10;
    var9 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.openLazy;
        var1 = global;
        var5 = var1.Promise;
        var2 = var5.resolve;
        var1 = {};
        var6 = _closure1_slot11;
        var1.default = var6;
        var2 = var2.bind(var5)(var1);
        var1 = 'ClientClientInfoActionSheet';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var3.onPress = var9;
    var9 = 16;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.DeveloperMode;
    var9 = var9.useSetting;
    var3.usePredicate = var9;
    var3.withArrow = var8;
    var3 = var4.bind(var7)(var3);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/CopyClientInfoSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getClientInfoString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9750, 33, 1594, 3239, 9976, 5255, 3108, 5173, 5176, 1234, 7696, 3872, 3219, 1309, 8945, 7389, 1348, 2]);