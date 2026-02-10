package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNSBottomTabsManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setControlNavigationStateInJS(T t10, boolean z10);

    void setNativeContainerBackgroundColor(T t10, Integer num);

    void setTabBarBackgroundColor(T t10, Integer num);

    void setTabBarControllerMode(T t10, String str);

    void setTabBarHidden(T t10, boolean z10);

    void setTabBarItemActiveIndicatorColor(T t10, Integer num);

    void setTabBarItemActiveIndicatorEnabled(T t10, boolean z10);

    void setTabBarItemIconColor(T t10, Integer num);

    void setTabBarItemIconColorActive(T t10, Integer num);

    void setTabBarItemLabelVisibilityMode(T t10, String str);

    void setTabBarItemRippleColor(T t10, Integer num);

    void setTabBarItemTitleFontColor(T t10, Integer num);

    void setTabBarItemTitleFontColorActive(T t10, Integer num);

    void setTabBarItemTitleFontFamily(T t10, String str);

    void setTabBarItemTitleFontSize(T t10, float f10);

    void setTabBarItemTitleFontSizeActive(T t10, float f10);

    void setTabBarItemTitleFontStyle(T t10, String str);

    void setTabBarItemTitleFontWeight(T t10, String str);

    void setTabBarMinimizeBehavior(T t10, String str);

    void setTabBarTintColor(T t10, Integer num);
}
