package com.swmansion.rnscreens.gamma.tabs;

import android.content.Context;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerDelegate;
import com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = TabScreenViewManager.REACT_CLASS)
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u001f\b\u0007\u0018\u0000 E2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001FB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\tH\u0014¢\u0006\u0004\b\u000b\u0010\fJ\u0015\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00020\rH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ\u001b\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00110\u0010H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u001f\u0010\u0016\u001a\u00020\u00152\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u0014\u001a\u00020\u0002H\u0014¢\u0006\u0004\b\u0016\u0010\u0017J\u001f\u0010\u001a\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b\u001a\u0010\u001bJ\u001f\u0010\u001c\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b\u001c\u0010\u001bJ!\u0010\u001e\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0004\b\u001e\u0010\u001fJ#\u0010 \u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b \u0010!J#\u0010#\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\"H\u0016¢\u0006\u0004\b#\u0010$J#\u0010%\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b%\u0010!J#\u0010&\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\"H\u0016¢\u0006\u0004\b&\u0010$J#\u0010'\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b'\u0010!J\u001f\u0010)\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020(H\u0017¢\u0006\u0004\b)\u0010*J!\u0010+\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b+\u0010!J!\u0010,\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b,\u0010!J!\u0010-\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b-\u0010!J\u001f\u0010.\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020(H\u0016¢\u0006\u0004\b.\u0010*J!\u0010/\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\"H\u0017¢\u0006\u0004\b/\u0010$J\u001f\u00100\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020(H\u0016¢\u0006\u0004\b0\u0010*J#\u00101\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b1\u0010!J#\u00102\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b2\u0010!J#\u00103\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b3\u0010!J#\u00104\u001a\u00020\u00152\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b4\u0010!J!\u00105\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b5\u0010!J!\u00106\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b6\u0010!J!\u00107\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0004\b7\u0010\u001fJ!\u00108\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b8\u0010!J!\u00109\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b9\u0010!J!\u0010:\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b:\u0010!J!\u0010;\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b;\u0010!J!\u0010<\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\"H\u0017¢\u0006\u0004\b<\u0010$R\u001a\u0010=\u001a\b\u0012\u0004\u0012\u00020\u00020\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b=\u0010>R$\u0010?\u001a\u0004\u0018\u00010\t8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b?\u0010@\u001a\u0004\bA\u0010B\"\u0004\bC\u0010D¨\u0006G"}, d2 = {"Lcom/swmansion/rnscreens/gamma/tabs/TabScreenViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/rnscreens/gamma/tabs/a;", "Lcom/facebook/react/viewmanagers/RNSBottomTabsScreenManagerInterface;", "<init>", "()V", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "reactContext", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/swmansion/rnscreens/gamma/tabs/a;", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "view", "", "addEventEmitters", "(Lcom/facebook/react/uimanager/ThemedReactContext;Lcom/swmansion/rnscreens/gamma/tabs/a;)V", "Lcom/facebook/react/bridge/Dynamic;", "value", "setStandardAppearance", "(Lcom/swmansion/rnscreens/gamma/tabs/a;Lcom/facebook/react/bridge/Dynamic;)V", "setScrollEdgeAppearance", "", "setTabBarItemBadgeBackgroundColor", "(Lcom/swmansion/rnscreens/gamma/tabs/a;Ljava/lang/Integer;)V", "setIconType", "(Lcom/swmansion/rnscreens/gamma/tabs/a;Ljava/lang/String;)V", "Lcom/facebook/react/bridge/ReadableMap;", "setIconImageSource", "(Lcom/swmansion/rnscreens/gamma/tabs/a;Lcom/facebook/react/bridge/ReadableMap;)V", "setIconResourceName", "setSelectedIconImageSource", "setSelectedIconResourceName", "", "setIsFocused", "(Lcom/swmansion/rnscreens/gamma/tabs/a;Z)V", "setTabKey", "setBadgeValue", "setTitle", "setIsTitleUndefined", "setSpecialEffects", "setOverrideScrollViewContentInsetAdjustmentBehavior", "setBottomScrollEdgeEffect", "setLeftScrollEdgeEffect", "setRightScrollEdgeEffect", "setTopScrollEdgeEffect", "setTabBarItemTestID", "setTabBarItemAccessibilityLabel", "setTabBarItemBadgeTextColor", "setDrawableIconResourceName", "setOrientation", "setSystemItem", "setUserInterfaceStyle", "setImageIconResource", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "getContext", "()Lcom/facebook/react/uimanager/ThemedReactContext;", "setContext", "(Lcom/facebook/react/uimanager/ThemedReactContext;)V", "Companion", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class TabScreenViewManager extends ViewGroupManager<com.swmansion.rnscreens.gamma.tabs.a> implements RNSBottomTabsScreenManagerInterface<com.swmansion.rnscreens.gamma.tabs.a> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String REACT_CLASS = "RNSBottomTabsScreen";
    private ThemedReactContext context;
    @NotNull
    private final ViewManagerDelegate<com.swmansion.rnscreens.gamma.tabs.a> delegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public TabScreenViewManager() {
        super(null, 1, null);
        this.delegate = new RNSBottomTabsScreenManagerDelegate(this);
    }

    public final ThemedReactContext getContext() {
        return this.context;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<com.swmansion.rnscreens.gamma.tabs.a> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return o0.n(un.a.a(wn.c.f53508a), un.a.a(wn.a.f53506a), un.a.a(wn.d.f53509a), un.a.a(wn.b.f53507a));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setBottomScrollEdgeEffect(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    public final void setContext(ThemedReactContext themedReactContext) {
        this.context = themedReactContext;
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setIconImageSource(com.swmansion.rnscreens.gamma.tabs.a aVar, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setIconResourceName(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setIconType(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setIsTitleUndefined(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setLeftScrollEdgeEffect(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setOrientation(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setOverrideScrollViewContentInsetAdjustmentBehavior(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setRightScrollEdgeEffect(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setScrollEdgeAppearance(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, @NotNull Dynamic value) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(value, "value");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setSelectedIconImageSource(com.swmansion.rnscreens.gamma.tabs.a aVar, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setSelectedIconResourceName(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setStandardAppearance(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, @NotNull Dynamic value) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(value, "value");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setSystemItem(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setTopScrollEdgeEffect(com.swmansion.rnscreens.gamma.tabs.a aVar, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    public void setUserInterfaceStyle(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(@NotNull ThemedReactContext reactContext, @NotNull com.swmansion.rnscreens.gamma.tabs.a view) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(view, "view");
        super.addEventEmitters(reactContext, (ThemedReactContext) view);
        view.f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public com.swmansion.rnscreens.gamma.tabs.a createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        co.e.f8378a.a(REACT_CLASS, "createViewInstance");
        return new com.swmansion.rnscreens.gamma.tabs.a(reactContext);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "badgeValue")
    public void setBadgeValue(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBadgeValue(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "drawableIconResourceName")
    public void setDrawableIconResourceName(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDrawableIconResourceName(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "imageIconResource")
    public void setImageIconResource(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        String string = readableMap != null ? readableMap.getString("uri") : null;
        if (string != null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            xn.e.c(context, string, view);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "isFocused")
    public void setIsFocused(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        co.e eVar = co.e.f8378a;
        int id2 = view.getId();
        eVar.a(REACT_CLASS, "TabScreen [" + id2 + "] setIsFocused " + z10);
        view.setFocusedTab(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "specialEffects")
    public void setSpecialEffects(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, ReadableMap readableMap) {
        boolean z10;
        ReadableMap map;
        Intrinsics.checkNotNullParameter(view, "view");
        boolean z11 = true;
        if (!(readableMap != null ? readableMap.hasKey("repeatedTabSelection") : false) || (map = readableMap.getMap("repeatedTabSelection")) == null) {
            z10 = true;
        } else {
            z10 = map.hasKey("scrollToTop") ? map.getBoolean("scrollToTop") : true;
            if (map.hasKey("popToRoot")) {
                z11 = map.getBoolean("popToRoot");
            }
        }
        view.setShouldUseRepeatedTabSelectionPopToRootSpecialEffect(z11);
        view.setShouldUseRepeatedTabSelectionScrollToTopSpecialEffect(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "tabBarItemAccessibilityLabel")
    public void setTabBarItemAccessibilityLabel(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemAccessibilityLabel(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemBadgeBackgroundColor")
    public void setTabBarItemBadgeBackgroundColor(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemBadgeBackgroundColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemBadgeTextColor")
    public void setTabBarItemBadgeTextColor(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemBadgeTextColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "tabBarItemTestID")
    public void setTabBarItemTestID(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTestID(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "tabKey")
    public void setTabKey(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabKey(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsScreenManagerInterface
    @ReactProp(name = "title")
    public void setTitle(@NotNull com.swmansion.rnscreens.gamma.tabs.a view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabTitle(str);
    }
}
