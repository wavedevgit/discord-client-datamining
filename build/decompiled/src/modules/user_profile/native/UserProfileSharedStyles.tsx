// modules/user_profile/native/UserProfileSharedStyles.tsx
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
    var17 = 0;
    var1 = var5[var17];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var15 = var1.AVATAR_CONTAINER_SIZE;
    var14 = var1.AVATAR_CUSTOM_STATUS_GAP;
    var13 = var1.AVATAR_PADDING;
    var8 = var1.CARD_PADDING;
    var11 = var1.PROFILE_CONTENT_BOTTOM_PADDING;
    var12 = var1.PROFILE_SIDE_PADDING;
    var16 = 1;
    var1 = var5[var16];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createStyles;
    var1 = {};
    var7 = {};
    var9 = 'absolute';
    var7.position = var9;
    var18 = -var15;
    var9 = 2;
    var18 = var18 / var9;
    var7.top = var18;
    var18 = var12 - var13;
    var7.left = var18;
    var1.avatarPosition = var7;
    var7 = {};
    var7.width = var15;
    var7.height = var15;
    var7.borderRadius = var15;
    var7.padding = var13;
    var7.zIndex = var17;
    var1.avatarBackground = var7;
    var7 = {};
    var7.margin = var13;
    var7.zIndex = var16;
    var1.avatar = var7;
    var7 = {
        'flexGrow': 1,
        'paddingBottom': null,
        'overflow': 'visible'
    };
    var7.paddingBottom = var11;
    var1.profileContentWrapper = var7;
    var7 = {};
    var7.paddingHorizontal = var12;
    var1.profileContent = var7;
    var7 = {
        'marginTop': 6,
        'marginBottom': 12
    };
    var11 = 12;
    var13 = var15 - var13;
    var13 = var13 + var14;
    var7.marginLeft = var13;
    var1.customStatusBubble = var7;
    var7 = {};
    var13 = 4;
    var7.marginBottom = var13;
    var1.emojiOnlyCustomStatusBubble = var7;
    var7 = {
        'rowGap': 12,
        'paddingBottom': 12
    };
    var1.primaryInfo = var7;
    var7 = {};
    var7.paddingVertical = var11;
    var1.primaryButtons = var7;
    var11 = 16;
    var7 = {
        'flexDirection': 'row',
        'position': 'absolute',
        'top': 16,
        'right': 16,
        'gap': 8,
        'zIndex': 2
    };
    var1.bannerButtons = var7;
    var7 = {};
    var7.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var7.marginBottom = var12;
    var1.profileTablist = var7;
    var7 = {};
    var7.rowGap = var11;
    var1.cards = var7;
    var7 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var7.borderRadius = var9;
    var7.padding = var8;
    var1.card = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileSharedStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7047, 1297, 671, 2]);