package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSBottomTabsManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSBottomTabsManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSBottomTabsManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1873119606:
                if (str.equals("tabBarTintColor")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1716883528:
                if (str.equals("tabBarItemLabelVisibilityMode")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1583805635:
                if (str.equals("tabBarControllerMode")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1167805191:
                if (str.equals("tabBarItemIconColor")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1140765365:
                if (str.equals("tabBarItemActiveIndicatorColor")) {
                    c10 = 4;
                    break;
                }
                break;
            case -727132909:
                if (str.equals("tabBarItemTitleFontColorActive")) {
                    c10 = 5;
                    break;
                }
                break;
            case -149697865:
                if (str.equals("tabBarBackgroundColor")) {
                    c10 = 6;
                    break;
                }
                break;
            case -141083017:
                if (str.equals("tabBarItemTitleFontSize")) {
                    c10 = 7;
                    break;
                }
                break;
            case -93216851:
                if (str.equals("tabBarItemTitleFontColor")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -78279173:
                if (str.equals("tabBarItemTitleFontStyle")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 144476014:
                if (str.equals("tabBarMinimizeBehavior")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 278168456:
                if (str.equals("tabBarHidden")) {
                    c10 = 11;
                    break;
                }
                break;
            case 595595083:
                if (str.equals("nativeContainerBackgroundColor")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 676974377:
                if (str.equals("tabBarItemActiveIndicatorEnabled")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 697418079:
                if (str.equals("tabBarItemIconColorActive")) {
                    c10 = 14;
                    break;
                }
                break;
            case 1458977038:
                if (str.equals("controlNavigationStateInJS")) {
                    c10 = 15;
                    break;
                }
                break;
            case 1478227034:
                if (str.equals("tabBarItemTitleFontFamily")) {
                    c10 = 16;
                    break;
                }
                break;
            case 1935822306:
                if (str.equals("tabBarItemRippleColor")) {
                    c10 = 17;
                    break;
                }
                break;
            case 1968495470:
                if (str.equals("tabBarItemTitleFontWeight")) {
                    c10 = 18;
                    break;
                }
                break;
            case 2018161757:
                if (str.equals("tabBarItemTitleFontSizeActive")) {
                    c10 = 19;
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        String str2 = null;
        switch (c10) {
            case 0:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 1:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemLabelVisibilityMode(t10, (String) obj);
                return;
            case 2:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarControllerMode(t10, (String) obj);
                return;
            case 3:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemIconColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 4:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemActiveIndicatorColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 5:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemTitleFontColorActive(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 6:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 7:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSBottomTabsManagerInterface.setTabBarItemTitleFontSize(t10, f10);
                return;
            case '\b':
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemTitleFontColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\t':
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface2 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsManagerInterface2.setTabBarItemTitleFontStyle(t10, str2);
                return;
            case '\n':
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarMinimizeBehavior(t10, (String) obj);
                return;
            case 11:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface3 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsManagerInterface3.setTabBarHidden(t10, z11);
                return;
            case '\f':
                ((RNSBottomTabsManagerInterface) this.mViewManager).setNativeContainerBackgroundColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\r':
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface4 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsManagerInterface4.setTabBarItemActiveIndicatorEnabled(t10, z10);
                return;
            case 14:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemIconColorActive(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 15:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface5 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSBottomTabsManagerInterface5.setControlNavigationStateInJS(t10, z11);
                return;
            case 16:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface6 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsManagerInterface6.setTabBarItemTitleFontFamily(t10, str2);
                return;
            case 17:
                ((RNSBottomTabsManagerInterface) this.mViewManager).setTabBarItemRippleColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface7 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSBottomTabsManagerInterface7.setTabBarItemTitleFontWeight(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                RNSBottomTabsManagerInterface rNSBottomTabsManagerInterface8 = (RNSBottomTabsManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSBottomTabsManagerInterface8.setTabBarItemTitleFontSizeActive(t10, f10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
