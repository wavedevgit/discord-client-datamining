package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNSBottomTabsScreenManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setBadgeValue(T t10, String str);

    void setBottomScrollEdgeEffect(T t10, String str);

    void setDrawableIconResourceName(T t10, String str);

    void setIconImageSource(T t10, ReadableMap readableMap);

    void setIconResourceName(T t10, String str);

    void setIconType(T t10, String str);

    void setImageIconResource(T t10, ReadableMap readableMap);

    void setIsFocused(T t10, boolean z10);

    void setIsTitleUndefined(T t10, boolean z10);

    void setLeftScrollEdgeEffect(T t10, String str);

    void setOrientation(T t10, String str);

    void setOverrideScrollViewContentInsetAdjustmentBehavior(T t10, boolean z10);

    void setRightScrollEdgeEffect(T t10, String str);

    void setScrollEdgeAppearance(T t10, Dynamic dynamic);

    void setSelectedIconImageSource(T t10, ReadableMap readableMap);

    void setSelectedIconResourceName(T t10, String str);

    void setSpecialEffects(T t10, ReadableMap readableMap);

    void setStandardAppearance(T t10, Dynamic dynamic);

    void setSystemItem(T t10, String str);

    void setTabBarItemAccessibilityLabel(T t10, String str);

    void setTabBarItemBadgeBackgroundColor(T t10, Integer num);

    void setTabBarItemBadgeTextColor(T t10, Integer num);

    void setTabBarItemTestID(T t10, String str);

    void setTabKey(T t10, String str);

    void setTitle(T t10, String str);

    void setTopScrollEdgeEffect(T t10, String str);

    void setUserInterfaceStyle(T t10, String str);
}
