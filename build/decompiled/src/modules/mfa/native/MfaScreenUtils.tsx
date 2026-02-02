// modules/mfa/native/MfaScreenUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var1 = {};
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': null,
        'marginLeft': null,
        'marginRight': null,
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'alignItems': 'stretch'
    };
    var9 = 1;
    var11 = var5[var9];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.STATUS_BAR_HEIGHT;
    var9 = var11 - var9;
    var8.marginTop = var9;
    var9 = 2;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginLeft = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginRight = var11;
    var3.contentContainer = var8;
    var11 = 'center';
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.mfaContainerHeader = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginTop = var12;
    var3.mfaContainerHeaderContent = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var8.marginHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginBottom = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginTop = var12;
    var8.textAlign = var11;
    var3.mfaContainerFooter = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginTop = var11;
    var3.mfaContainerFooterMargin = var8;
    var8 = {
        'flexDirection': 'column',
        'alignSelf': 'stretch'
    };
    var3.inputContainer = var8;
    var8 = {
        'flexDirection': 'column',
        'alignSelf': 'stretch'
    };
    var3.smsContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignSelf': 'stretch'
    };
    var3.smsInput = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var8.borderRadius = var9;
    var3.radioItem = var8;
    var3 = var6.bind(var7)(var3);
    var1.useScreenStyles = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/MfaScreenUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1297, 4668, 671, 2]);