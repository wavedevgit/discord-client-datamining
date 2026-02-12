package com.swmansion.rnscreens.gamma.tabs;

import android.view.View;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSBottomTabsManagerDelegate;
import com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\t\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0018\b\u0007\u0018\u0000 B2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001CB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\u00022\u0006\u0010\n\u001a\u00020\tH\u0014¢\u0006\u0004\b\u000b\u0010\fJ\u0015\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00020\rH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ'\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0010\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J\u001f\u0010\u0018\u001a\u00020\u00152\u0006\u0010\u0010\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u001f\u0010\u001a\u001a\u00020\u00152\u0006\u0010\u0010\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u001a\u0010\u001bJ\u0017\u0010\u001c\u001a\u00020\u00152\u0006\u0010\u0010\u001a\u00020\u0002H\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ\u001b\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u001f0\u001eH\u0016¢\u0006\u0004\b \u0010!J\u001f\u0010#\u001a\u00020\u00152\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\"\u001a\u00020\u0002H\u0014¢\u0006\u0004\b#\u0010$J!\u0010&\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b&\u0010'J!\u0010(\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\b(\u0010'J!\u0010*\u001a\u00020\u00152\b\u0010\"\u001a\u0004\u0018\u00010\u00022\u0006\u0010%\u001a\u00020)H\u0017¢\u0006\u0004\b*\u0010+J!\u0010-\u001a\u00020\u00152\b\u0010\"\u001a\u0004\u0018\u00010\u00022\u0006\u0010%\u001a\u00020,H\u0016¢\u0006\u0004\b-\u0010.J!\u0010/\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b/\u00100J!\u00101\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b1\u00100J!\u00102\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b2\u00100J!\u00103\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b3\u0010'J!\u00104\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b4\u0010'J!\u00105\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b5\u00100J!\u00106\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b6\u00100J\u001f\u00107\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\u0006\u0010%\u001a\u00020,H\u0017¢\u0006\u0004\b7\u0010.J!\u00108\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b8\u0010'J!\u00109\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b9\u0010'J!\u0010:\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b:\u0010'J\u001f\u0010;\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\u0006\u0010%\u001a\u00020,H\u0017¢\u0006\u0004\b;\u0010.J!\u0010<\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b<\u0010'J!\u0010=\u001a\u00020\u00152\b\u0010\"\u001a\u0004\u0018\u00010\u00022\u0006\u0010%\u001a\u00020)H\u0017¢\u0006\u0004\b=\u0010+J!\u0010>\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0013H\u0017¢\u0006\u0004\b>\u0010'J!\u0010?\u001a\u00020\u00152\u0006\u0010\"\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b?\u00100R\u001a\u0010@\u001a\b\u0012\u0004\u0012\u00020\u00020\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b@\u0010A¨\u0006D"}, d2 = {"Lcom/swmansion/rnscreens/gamma/tabs/TabsHostViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/rnscreens/gamma/tabs/l;", "Lcom/facebook/react/viewmanagers/RNSBottomTabsManagerInterface;", "<init>", "()V", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "reactContext", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/swmansion/rnscreens/gamma/tabs/l;", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "parent", "Landroid/view/View;", "child", "", "index", "", "addView", "(Lcom/swmansion/rnscreens/gamma/tabs/l;Landroid/view/View;I)V", "removeView", "(Lcom/swmansion/rnscreens/gamma/tabs/l;Landroid/view/View;)V", "removeViewAt", "(Lcom/swmansion/rnscreens/gamma/tabs/l;I)V", "removeAllViews", "(Lcom/swmansion/rnscreens/gamma/tabs/l;)V", "", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "view", "addEventEmitters", "(Lcom/facebook/react/uimanager/ThemedReactContext;Lcom/swmansion/rnscreens/gamma/tabs/l;)V", "value", "setTabBarBackgroundColor", "(Lcom/swmansion/rnscreens/gamma/tabs/l;Ljava/lang/Integer;)V", "setTabBarTintColor", "", "setTabBarItemTitleFontSize", "(Lcom/swmansion/rnscreens/gamma/tabs/l;F)V", "", "setControlNavigationStateInJS", "(Lcom/swmansion/rnscreens/gamma/tabs/l;Z)V", "setTabBarItemTitleFontFamily", "(Lcom/swmansion/rnscreens/gamma/tabs/l;Ljava/lang/String;)V", "setTabBarItemTitleFontWeight", "setTabBarItemTitleFontStyle", "setTabBarItemTitleFontColor", "setTabBarItemIconColor", "setTabBarMinimizeBehavior", "setTabBarControllerMode", "setTabBarHidden", "setNativeContainerBackgroundColor", "setTabBarItemTitleFontColorActive", "setTabBarItemActiveIndicatorColor", "setTabBarItemActiveIndicatorEnabled", "setTabBarItemIconColorActive", "setTabBarItemTitleFontSizeActive", "setTabBarItemRippleColor", "setTabBarItemLabelVisibilityMode", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "Companion", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = TabsHostViewManager.REACT_CLASS)
@SourceDebugExtension({"SMAP\nTabsHostViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TabsHostViewManager.kt\ncom/swmansion/rnscreens/gamma/tabs/TabsHostViewManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,223:1\n1#2:224\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class TabsHostViewManager extends ViewGroupManager<l> implements RNSBottomTabsManagerInterface<l> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String REACT_CLASS = "RNSBottomTabs";
    @NotNull
    private final ViewManagerDelegate<l> delegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public TabsHostViewManager() {
        super(null, 1, null);
        this.delegate = new RNSBottomTabsManagerDelegate(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<l> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return o0.n(un.a.a(wn.e.f52942d));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    public void setControlNavigationStateInJS(l lVar, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    public void setTabBarControllerMode(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    public void setTabBarMinimizeBehavior(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    public void setTabBarTintColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(@NotNull ThemedReactContext reactContext, @NotNull l view) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(view, "view");
        super.addEventEmitters(reactContext, (ThemedReactContext) view);
        view.B();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public l createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new l(reactContext);
    }

    @Override // com.facebook.react.uimanager.IViewGroupManager
    public void removeAllViews(@NotNull l parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        parent.D();
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void removeView(@NotNull l parent, @NotNull View child) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        if (child instanceof com.swmansion.rnscreens.gamma.tabs.a) {
            parent.G((com.swmansion.rnscreens.gamma.tabs.a) child);
            return;
        }
        throw new IllegalArgumentException("[RNScreens] Attempt to detach child that is not of type javaClass");
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "nativeContainerBackgroundColor")
    public void setNativeContainerBackgroundColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNativeContainerBackgroundColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarBackgroundColor")
    public void setTabBarBackgroundColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarBackgroundColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarHidden")
    public void setTabBarHidden(@NotNull l view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarHidden(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemActiveIndicatorColor")
    public void setTabBarItemActiveIndicatorColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemActiveIndicatorColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemActiveIndicatorEnabled")
    public void setTabBarItemActiveIndicatorEnabled(@NotNull l view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemActiveIndicatorEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemIconColor")
    public void setTabBarItemIconColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemIconColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemIconColorActive")
    public void setTabBarItemIconColorActive(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemIconColorActive(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemLabelVisibilityMode")
    public void setTabBarItemLabelVisibilityMode(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemLabelVisibilityMode(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemRippleColor")
    public void setTabBarItemRippleColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemRippleColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemTitleFontColor")
    public void setTabBarItemTitleFontColor(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTitleFontColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(customType = "Color", name = "tabBarItemTitleFontColorActive")
    public void setTabBarItemTitleFontColorActive(@NotNull l view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTitleFontColorActive(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemTitleFontFamily")
    public void setTabBarItemTitleFontFamily(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTitleFontFamily(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemTitleFontSize")
    public void setTabBarItemTitleFontSize(l lVar, float f10) {
        if (lVar != null) {
            lVar.setTabBarItemTitleFontSize(Float.valueOf(f10));
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemTitleFontSizeActive")
    public void setTabBarItemTitleFontSizeActive(l lVar, float f10) {
        if (lVar != null) {
            lVar.setTabBarItemTitleFontSizeActive(Float.valueOf(f10));
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemTitleFontStyle")
    public void setTabBarItemTitleFontStyle(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTitleFontStyle(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSBottomTabsManagerInterface
    @ReactProp(name = "tabBarItemTitleFontWeight")
    public void setTabBarItemTitleFontWeight(@NotNull l view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTabBarItemTitleFontWeight(str);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void addView(@NotNull l parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        if (child instanceof com.swmansion.rnscreens.gamma.tabs.a) {
            parent.A((com.swmansion.rnscreens.gamma.tabs.a) child, i10);
            return;
        }
        throw new IllegalArgumentException("[RNScreens] Attempt to attach child that is not of type javaClass");
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void removeViewAt(@NotNull l parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        parent.H(i10);
    }
}
