package com.swmansion.rnscreens;

import android.util.Log;
import android.view.View;
import com.facebook.react.bridge.JSApplicationCausedNativeException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerDelegate;
import com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ScreenStackHeaderConfigViewManager.REACT_CLASS)
@Metadata(d1 = {"\u0000r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b#\n\u0002\u0010$\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0016\b\u0007\u0018\u0000 i2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001jB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\u000b\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\rH\u0014¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J'\u0010\u001b\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u0019H\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ-\u0010#\u001a\u0004\u0018\u00010\"2\u0006\u0010\u001d\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u001e2\b\u0010!\u001a\u0004\u0018\u00010 H\u0016¢\u0006\u0004\b#\u0010$J\u0019\u0010%\u001a\u00020\b2\b\b\u0001\u0010\u001d\u001a\u00020\u0002H\u0016¢\u0006\u0004\b%\u0010&J\u0017\u0010'\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0002H\u0016¢\u0006\u0004\b'\u0010&J\u001f\u0010(\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010\u001a\u001a\u00020\u0019H\u0016¢\u0006\u0004\b(\u0010)J\u0017\u0010*\u001a\u00020\u00192\u0006\u0010\u0016\u001a\u00020\u0002H\u0016¢\u0006\u0004\b*\u0010+J\u001f\u0010,\u001a\u00020\u00172\u0006\u0010\u0016\u001a\u00020\u00022\u0006\u0010\u001a\u001a\u00020\u0019H\u0016¢\u0006\u0004\b,\u0010-J\u000f\u0010/\u001a\u00020.H\u0016¢\u0006\u0004\b/\u00100J\u0017\u00101\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0002H\u0014¢\u0006\u0004\b1\u0010&J!\u00104\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u00103\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b4\u00105J!\u00107\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u00106\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b7\u00105J\u001f\u00109\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u00108\u001a\u00020\u0019H\u0017¢\u0006\u0004\b9\u0010)J!\u0010;\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u0010:\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b;\u00105J!\u0010=\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u0010<\u001a\u0004\u0018\u00010\u0019H\u0017¢\u0006\u0004\b=\u0010>J!\u0010@\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u0010?\u001a\u0004\u0018\u00010\u0019H\u0017¢\u0006\u0004\b@\u0010>J\u001f\u0010B\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010A\u001a\u00020.H\u0017¢\u0006\u0004\bB\u0010CJ\u001f\u0010E\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010D\u001a\u00020.H\u0017¢\u0006\u0004\bE\u0010CJ\u001f\u0010G\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010F\u001a\u00020.H\u0017¢\u0006\u0004\bG\u0010CJ!\u0010I\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u0010H\u001a\u0004\u0018\u00010\u0019H\u0017¢\u0006\u0004\bI\u0010>J\u001f\u0010K\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010J\u001a\u00020.H\u0017¢\u0006\u0004\bK\u0010CJ\u001f\u0010M\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010L\u001a\u00020.H\u0017¢\u0006\u0004\bM\u0010CJ\u001f\u0010O\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\u0006\u0010N\u001a\u00020.H\u0017¢\u0006\u0004\bO\u0010CJ!\u0010Q\u001a\u00020\b2\u0006\u00102\u001a\u00020\u00022\b\u0010P\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\bQ\u00105J\u001d\u0010S\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\"\u0018\u00010RH\u0016¢\u0006\u0004\bS\u0010TJ\u0015\u0010V\u001a\b\u0012\u0004\u0012\u00020\u00020UH\u0014¢\u0006\u0004\bV\u0010WJ#\u0010Y\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\bY\u00105J#\u0010Z\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\bZ\u00105J!\u0010[\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020\u0019H\u0016¢\u0006\u0004\b[\u0010)J!\u0010\\\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020.H\u0016¢\u0006\u0004\b\\\u0010CJ!\u0010]\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020.H\u0016¢\u0006\u0004\b]\u0010CJ#\u0010^\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b^\u00105J!\u0010_\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020\u0019H\u0016¢\u0006\u0004\b_\u0010)J#\u0010`\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b`\u00105J#\u0010a\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0019H\u0016¢\u0006\u0004\ba\u0010>J!\u0010b\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020.H\u0016¢\u0006\u0004\bb\u0010CJ#\u0010c\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0019H\u0016¢\u0006\u0004\bc\u0010>J!\u0010d\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\u0006\u0010X\u001a\u00020.H\u0016¢\u0006\u0004\bd\u0010CJ#\u0010e\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\be\u00105J#\u0010f\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00022\b\u0010X\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\bf\u00105R\u001a\u0010g\u001a\b\u0012\u0004\u0012\u00020\u00020U8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bg\u0010h¨\u0006k"}, d2 = {"Lcom/swmansion/rnscreens/ScreenStackHeaderConfigViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;", "Lcom/facebook/react/viewmanagers/RNSScreenStackHeaderConfigManagerInterface;", "<init>", "()V", "", "propName", "", "logNotAvailable", "(Ljava/lang/String;)V", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "reactContext", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "context", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "createShadowNodeInstance", "(Lcom/facebook/react/bridge/ReactApplicationContext;)Lcom/facebook/react/uimanager/LayoutShadowNode;", "parent", "Landroid/view/View;", "child", "", "index", "addView", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;Landroid/view/View;I)V", "view", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "props", "Lcom/facebook/react/uimanager/StateWrapper;", "stateWrapper", "", "updateState", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;Lcom/facebook/react/uimanager/ReactStylesDiffMap;Lcom/facebook/react/uimanager/StateWrapper;)Ljava/lang/Object;", "onDropViewInstance", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;)V", "removeAllViews", "removeViewAt", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;I)V", "getChildCount", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;)I", "getChildAt", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;I)Landroid/view/View;", "", "needsCustomLayoutForChildren", "()Z", "onAfterUpdateTransaction", "config", "title", "setTitle", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;Ljava/lang/String;)V", "titleFontFamily", "setTitleFontFamily", "titleFontSize", "setTitleFontSize", "titleFontWeight", "setTitleFontWeight", "titleColor", "setTitleColor", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;Ljava/lang/Integer;)V", ViewProps.BACKGROUND_COLOR, "setBackgroundColor", "hideShadow", "setHideShadow", "(Lcom/swmansion/rnscreens/ScreenStackHeaderConfig;Z)V", "hideBackButton", "setHideBackButton", "topInsetEnabled", "setTopInsetEnabled", ViewProps.COLOR, "setColor", ViewProps.HIDDEN, "setHidden", "translucent", "setTranslucent", "backButtonInCustomView", "setBackButtonInCustomView", "direction", "setDirection", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "value", "setBackTitle", "setBackTitleFontFamily", "setBackTitleFontSize", "setBackTitleVisible", "setLargeTitle", "setLargeTitleFontFamily", "setLargeTitleFontSize", "setLargeTitleFontWeight", "setLargeTitleBackgroundColor", "setLargeTitleHideShadow", "setLargeTitleColor", "setDisableBackButtonMenu", "setBackButtonDisplayMode", "setBlurEffect", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "Companion", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenStackHeaderConfigViewManager extends ViewGroupManager<ScreenStackHeaderConfig> implements RNSScreenStackHeaderConfigManagerInterface<ScreenStackHeaderConfig> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String REACT_CLASS = "RNSScreenStackHeaderConfig";
    @NotNull
    private final ViewManagerDelegate<ScreenStackHeaderConfig> delegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public ScreenStackHeaderConfigViewManager() {
        super(null, 1, null);
        this.delegate = new RNSScreenStackHeaderConfigManagerDelegate(this);
    }

    private final void logNotAvailable(String str) {
        Log.w("[RNScreens]", str + " prop is not available on Android");
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<ScreenStackHeaderConfig> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of("topAttached", MapBuilder.of("registrationName", "onAttached"), "topDetached", MapBuilder.of("registrationName", "onDetached"));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.IViewManagerWithChildren
    public boolean needsCustomLayoutForChildren() {
        return true;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public LayoutShadowNode createShadowNodeInstance(@NotNull ReactApplicationContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new p0(context);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ScreenStackHeaderConfig createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new ScreenStackHeaderConfig(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull ScreenStackHeaderConfig parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        super.onAfterUpdateTransaction((ScreenStackHeaderConfigViewManager) parent);
        parent.l();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(@NotNull ScreenStackHeaderConfig view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.f();
    }

    @Override // com.facebook.react.uimanager.IViewGroupManager
    public void removeAllViews(@NotNull ScreenStackHeaderConfig parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        parent.m();
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBackButtonDisplayMode(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("backButtonDisplayMode");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "backButtonInCustomView")
    public void setBackButtonInCustomView(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setBackButtonInCustomView(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBackTitle(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("backTitle");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBackTitleFontFamily(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("backTitleFontFamily");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBackTitleFontSize(ScreenStackHeaderConfig screenStackHeaderConfig, int i10) {
        logNotAvailable("backTitleFontSize");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBackTitleVisible(ScreenStackHeaderConfig screenStackHeaderConfig, boolean z10) {
        logNotAvailable("backTitleVisible");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(customType = "Color", name = ViewProps.BACKGROUND_COLOR)
    public void setBackgroundColor(@NotNull ScreenStackHeaderConfig config, Integer num) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setBackgroundColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setBlurEffect(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("blurEffect");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(customType = "Color", name = ViewProps.COLOR)
    public void setColor(@NotNull ScreenStackHeaderConfig config, Integer num) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTintColor(num != null ? num.intValue() : 0);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "direction")
    public void setDirection(@NotNull ScreenStackHeaderConfig config, String str) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setDirection(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setDisableBackButtonMenu(ScreenStackHeaderConfig screenStackHeaderConfig, boolean z10) {
        logNotAvailable("disableBackButtonMenu");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = ViewProps.HIDDEN)
    public void setHidden(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setHidden(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "hideBackButton")
    public void setHideBackButton(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setHideBackButton(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "hideShadow")
    public void setHideShadow(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setHideShadow(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitle(ScreenStackHeaderConfig screenStackHeaderConfig, boolean z10) {
        logNotAvailable("largeTitle");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleBackgroundColor(ScreenStackHeaderConfig screenStackHeaderConfig, Integer num) {
        logNotAvailable("largeTitleBackgroundColor");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleColor(ScreenStackHeaderConfig screenStackHeaderConfig, Integer num) {
        logNotAvailable("largeTitleColor");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleFontFamily(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("largeTitleFontFamily");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleFontSize(ScreenStackHeaderConfig screenStackHeaderConfig, int i10) {
        logNotAvailable("largeTitleFontSize");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleFontWeight(ScreenStackHeaderConfig screenStackHeaderConfig, String str) {
        logNotAvailable("largeTitleFontWeight");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    public void setLargeTitleHideShadow(ScreenStackHeaderConfig screenStackHeaderConfig, boolean z10) {
        logNotAvailable("largeTitleHideShadow");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "title")
    public void setTitle(@NotNull ScreenStackHeaderConfig config, String str) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTitle(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(customType = "Color", name = "titleColor")
    public void setTitleColor(@NotNull ScreenStackHeaderConfig config, Integer num) {
        Intrinsics.checkNotNullParameter(config, "config");
        if (num != null) {
            config.setTitleColor(num.intValue());
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "titleFontFamily")
    public void setTitleFontFamily(@NotNull ScreenStackHeaderConfig config, String str) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTitleFontFamily(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "titleFontSize")
    public void setTitleFontSize(@NotNull ScreenStackHeaderConfig config, int i10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTitleFontSize(i10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "titleFontWeight")
    public void setTitleFontWeight(@NotNull ScreenStackHeaderConfig config, String str) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTitleFontWeight(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @or.c
    @ReactProp(name = "topInsetEnabled")
    public void setTopInsetEnabled(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTopInsetEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenStackHeaderConfigManagerInterface
    @ReactProp(name = "translucent")
    public void setTranslucent(@NotNull ScreenStackHeaderConfig config, boolean z10) {
        Intrinsics.checkNotNullParameter(config, "config");
        config.setTranslucent(z10);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Object updateState(@NotNull ScreenStackHeaderConfig view, ReactStylesDiffMap reactStylesDiffMap, StateWrapper stateWrapper) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStateWrapper(stateWrapper);
        return super.updateState((ScreenStackHeaderConfigViewManager) view, reactStylesDiffMap, stateWrapper);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void addView(@NotNull ScreenStackHeaderConfig parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        if (child instanceof q0) {
            parent.d((q0) child, i10);
            return;
        }
        throw new JSApplicationCausedNativeException("Config children should be of type RNSScreenStackHeaderSubview");
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    @NotNull
    public View getChildAt(@NotNull ScreenStackHeaderConfig parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        return parent.g(i10);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public int getChildCount(@NotNull ScreenStackHeaderConfig parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        return parent.getConfigSubviewsCount();
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void removeViewAt(@NotNull ScreenStackHeaderConfig parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        parent.n(i10);
    }
}
