package com.reactnativekeyboardcontroller;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.KeyboardGestureAreaManagerDelegate;
import com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import pm.e;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002B\u000f\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0015\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00030\bH\u0014¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u000f\u001a\u00020\u000eH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0013\u001a\u00020\u00032\u0006\u0010\u0015\u001a\u00020\u0014H\u0017¢\u0006\u0004\b\u0017\u0010\u0018J!\u0010\u0019\u001a\u00020\u00162\u0006\u0010\u0013\u001a\u00020\u00032\b\u0010\u0015\u001a\u0004\u0018\u00010\u000bH\u0017¢\u0006\u0004\b\u0019\u0010\u001aJ\u001f\u0010\u001c\u001a\u00020\u00162\u0006\u0010\u0013\u001a\u00020\u00032\u0006\u0010\u0015\u001a\u00020\u001bH\u0017¢\u0006\u0004\b\u001c\u0010\u001dJ!\u0010\u001e\u001a\u00020\u00162\b\u0010\u0013\u001a\u0004\u0018\u00010\u00032\u0006\u0010\u0015\u001a\u00020\u001bH\u0017¢\u0006\u0004\b\u001e\u0010\u001dJ!\u0010\u001f\u001a\u00020\u00162\u0006\u0010\u0013\u001a\u00020\u00032\b\u0010\u0015\u001a\u0004\u0018\u00010\u000bH\u0017¢\u0006\u0004\b\u001f\u0010\u001aR\u0014\u0010!\u001a\u00020 8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R0\u0010%\u001a\u001e\u0012\f\u0012\n $*\u0004\u0018\u00010\u00030\u0003\u0012\f\u0012\n $*\u0004\u0018\u00010\u00000\u00000#8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&¨\u0006'"}, d2 = {"Lcom/reactnativekeyboardcontroller/KeyboardGestureAreaViewManager;", "Lcom/facebook/react/views/view/ReactViewManager;", "Lcom/facebook/react/viewmanagers/KeyboardGestureAreaManagerInterface;", "Lcom/facebook/react/views/view/ReactViewGroup;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "mReactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "context", "Lpm/e;", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lpm/e;", "view", "", "value", "", "setOffset", "(Lcom/facebook/react/views/view/ReactViewGroup;D)V", "setInterpolator", "(Lcom/facebook/react/views/view/ReactViewGroup;Ljava/lang/String;)V", "", "setShowOnSwipeUp", "(Lcom/facebook/react/views/view/ReactViewGroup;Z)V", "setEnableSwipeToDismiss", "setTextInputNativeID", "Llm/b;", "manager", "Llm/b;", "Lcom/facebook/react/viewmanagers/KeyboardGestureAreaManagerDelegate;", "kotlin.jvm.PlatformType", "mDelegate", "Lcom/facebook/react/viewmanagers/KeyboardGestureAreaManagerDelegate;", "react-native-keyboard-controller_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class KeyboardGestureAreaViewManager extends ReactViewManager implements KeyboardGestureAreaManagerInterface<ReactViewGroup> {
    @NotNull
    private final KeyboardGestureAreaManagerDelegate<ReactViewGroup, KeyboardGestureAreaViewManager> mDelegate;
    @NotNull
    private final lm.b manager;

    public KeyboardGestureAreaViewManager(@NotNull ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.manager = new lm.b(mReactContext);
        this.mDelegate = new KeyboardGestureAreaManagerDelegate<>(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<ReactViewGroup> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "KeyboardGestureArea";
    }

    @Override // com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface
    @ReactProp(name = "textInputNativeID")
    public void setTextInputNativeID(@NotNull ReactViewGroup view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
    }

    @Override // com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface
    @ReactProp(name = "enableSwipeToDismiss")
    public void setEnableSwipeToDismiss(ReactViewGroup reactViewGroup, boolean z10) {
        lm.b bVar = this.manager;
        Intrinsics.checkNotNull(reactViewGroup, "null cannot be cast to non-null type com.reactnativekeyboardcontroller.views.KeyboardGestureAreaReactViewGroup");
        bVar.d((e) reactViewGroup, z10);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface
    @ReactProp(name = "interpolator")
    public void setInterpolator(@NotNull ReactViewGroup view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        lm.b bVar = this.manager;
        e eVar = (e) view;
        if (str == null) {
            str = "linear";
        }
        bVar.b(eVar, str);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface
    @ReactProp(name = "offset")
    public void setOffset(@NotNull ReactViewGroup view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.c((e) view, d10);
    }

    @Override // com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface
    @ReactProp(name = "showOnSwipeUp")
    public void setShowOnSwipeUp(@NotNull ReactViewGroup view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.manager.e((e) view, z10);
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public e createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.manager.a(context);
    }
}
