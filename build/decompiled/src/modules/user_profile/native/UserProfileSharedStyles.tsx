// modules/user_profile/native/UserProfileSharedStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var16 = 0;
    var1 = var5[var16];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var13 = var1.AVATAR_CONTAINER_SIZE;
    var12 = var1.AVATAR_CUSTOM_STATUS_GAP;
    var11 = var1.AVATAR_PADDING;
    var8 = var1.CARD_PADDING;
    var10 = var1.PROFILE_CONTENT_BOTTOM_PADDING;
    var14 = var1.PROFILE_SIDE_PADDING;
    var15 = 1;
    var1 = var5[var15];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createStyles;
    var1 = {};
    var7 = {};
    var9 = 'absolute';
    var7.position = var9;
    var17 = -var13;
    var9 = 2;
    var17 = var17 / var9;
    var7.top = var17;
    var17 = var14 - var11;
    var7.left = var17;
    var1.avatarPosition = var7;
    var7 = {};
    var7.width = var13;
    var7.height = var13;
    var7.borderRadius = var13;
    var7.padding = var11;
    var7.zIndex = var16;
    var1.avatarBackground = var7;
    var7 = {};
    var7.margin = var11;
    var7.zIndex = var15;
    var1.avatar = var7;
    var7 = {};
    var7.flexGrow = var15;
    var7.paddingHorizontal = var14;
    var7.paddingBottom = var10;
    var10 = 'visible';
    var7.overflow = var10;
    var1.profileContent = var7;
    var7 = {
        'marginTop': 6,
        'marginBottom': 12
    };
    var10 = 12;
    var11 = var13 - var11;
    var11 = var11 + var12;
    var7.marginLeft = var11;
    var1.customStatusBubble = var7;
    var7 = {};
    var11 = 4;
    var7.marginBottom = var11;
    var1.emojiOnlyCustomStatusBubble = var7;
    var7 = {
        'rowGap': 12,
        'paddingBottom': 12
    };
    var1.primaryInfo = var7;
    var7 = {};
    var7.paddingVertical = var10;
    var1.primaryButtons = var7;
    var10 = 16;
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
    var7.rowGap = var10;
    var1.cards = var7;
    var7 = {};
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6921, 1297, 671, 2]);