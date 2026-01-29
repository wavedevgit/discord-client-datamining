package com.reactnativekeyboardcontroller;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.KeyboardControllerViewManagerDelegate;
import com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import om.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002B\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0015\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00030\bH\u0014¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\u000eH\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0003H\u0014¢\u0006\u0004\b\u0014\u0010\u0015J\u001f\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u0016H\u0017¢\u0006\u0004\b\u0018\u0010\u0019J\u001f\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u0016H\u0017¢\u0006\u0004\b\u001a\u0010\u0019J\u001f\u0010\u001b\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u0016H\u0017¢\u0006\u0004\b\u001b\u0010\u0019J\u001f\u0010\u001c\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u0016H\u0017¢\u0006\u0004\b\u001c\u0010\u0019J\u001b\u0010\u001f\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u001e0\u001dH\u0016¢\u0006\u0004\b\u001f\u0010 R\u0014\u0010\"\u001a\u00020!8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010#R0\u0010&\u001a\u001e\u0012\f\u0012\n %*\u0004\u0018\u00010\u00030\u0003\u0012\f\u0012\n %*\u0004\u0018\u00010\u00000\u00000$8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'¨\u0006("}, d2 = {"Lcom/reactnativekeyboardcontroller/KeyboardControllerViewManager;", "Lcom/facebook/react/views/view/ReactViewManager;", "Lcom/facebook/react/viewmanagers/KeyboardControllerViewManagerInterface;", "Lcom/facebook/react/views/view/ReactViewGroup;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "mReactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "context", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/facebook/react/views/view/ReactViewGroup;", "view", "", "onAfterUpdateTransaction", "(Lcom/facebook/react/views/view/ReactViewGroup;)V", "", "value", "setStatusBarTranslucent", "(Lcom/facebook/react/views/view/ReactViewGroup;Z)V", "setNavigationBarTranslucent", "setPreserveEdgeToEdge", "setEnabled", "", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "Lkm/a;", "manager", "Lkm/a;", "Lcom/facebook/react/viewmanagers/KeyboardControllerViewManagerDelegate;", "kotlin.jvm.PlatformType", "mDelegate", "Lcom/facebook/react/viewmanagers/KeyboardControllerViewManagerDelegate;", "react-native-keyboard-controller_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class KeyboardControllerViewManager extends ReactViewManager implements KeyboardControllerViewManagerInterface<ReactViewGroup> {
    @NotNull
    private final KeyboardControllerViewManagerDelegate<ReactViewGroup, KeyboardControllerViewManager> mDelegate;
    @NotNull
    private final km.a manager;

    public KeyboardControllerViewManager(@NotNull ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.manager = new km.a(mReactContext);
        this.mDelegate = new KeyboardControllerViewManagerDelegate<>(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<ReactViewGroup> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return this.manager.b();
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "KeyboardControllerView";
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactViewGroup createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.manager.a(context);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull ReactViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((KeyboardControllerViewManager) view);
        this.manager.c((c) view);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface
    @ReactProp(name = ViewProps.ENABLED)
    public void setEnabled(@NotNull ReactViewGroup view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.d((c) view, z10);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface
    @ReactProp(name = "navigationBarTranslucent")
    public void setNavigationBarTranslucent(@NotNull ReactViewGroup view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.e((c) view, z10);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface
    @ReactProp(name = "preserveEdgeToEdge")
    public void setPreserveEdgeToEdge(@NotNull ReactViewGroup view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.f((c) view, z10);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface
    @ReactProp(name = "statusBarTranslucent")
    public void setStatusBarTranslucent(@NotNull ReactViewGroup view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.g((c) view, z10);
    }
}
