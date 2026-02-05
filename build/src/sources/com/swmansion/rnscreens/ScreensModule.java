package com.swmansion.rnscreens;

import android.util.Log;
import android.view.View;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = "RNSModule")
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0015\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 (2\u00020\u0001:\u0001)B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0082 ¢\u0006\u0004\b\t\u0010\nJ\u0010\u0010\u000b\u001a\u00020\bH\u0082 ¢\u0006\u0004\b\u000b\u0010\fJ\u0019\u0010\u0010\u001a\u00020\u000f2\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0003¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0014\u001a\u00020\b2\u0006\u0010\u0013\u001a\u00020\u0012H\u0003¢\u0006\u0004\b\u0014\u0010\u0015J!\u0010\u0018\u001a\u00020\b2\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0017\u001a\u00020\u0016H\u0003¢\u0006\u0004\b\u0018\u0010\u0019J\u000f\u0010\u001a\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001a\u0010\fJ\u000f\u0010\u001b\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001b\u0010\fJ\u000f\u0010\u001d\u001a\u00020\u001cH\u0016¢\u0006\u0004\b\u001d\u0010\u001eR\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\u001fR\u0016\u0010 \u001a\u00020\r8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010!R\u0014\u0010#\u001a\u00020\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0018\u0010&\u001a\u0004\u0018\u00010%8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b&\u0010'¨\u0006*"}, d2 = {"Lcom/swmansion/rnscreens/ScreensModule;", "Lcom/swmansion/rnscreens/NativeScreensModuleSpec;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "jsiPtr", "", "nativeInstall", "(J)V", "nativeUninstall", "()V", "", "reactTag", "", "startTransition", "(Ljava/lang/Integer;)[I", "", ReactProgressBarViewManager.PROP_PROGRESS, "updateTransition", "(D)V", "", "canceled", "finishTransition", "(Ljava/lang/Integer;Z)V", "invalidate", "initialize", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "topScreenId", "I", "Ljava/util/concurrent/atomic/AtomicBoolean;", "isActiveTransition", "Ljava/util/concurrent/atomic/AtomicBoolean;", "Lcom/swmansion/rnscreens/NativeProxy;", "proxy", "Lcom/swmansion/rnscreens/NativeProxy;", "Companion", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreensModule extends NativeScreensModuleSpec {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String NAME = "RNSModule";
    @NotNull
    private final AtomicBoolean isActiveTransition;
    private NativeProxy proxy;
    @NotNull
    private final ReactApplicationContext reactContext;
    private int topScreenId;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreensModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.topScreenId = -1;
        this.isActiveTransition = new AtomicBoolean(false);
        try {
            System.loadLibrary("rnscreens");
            JavaScriptContextHolder javaScriptContextHolder = getReactApplicationContext().getJavaScriptContextHolder();
            if (javaScriptContextHolder != null) {
                nativeInstall(javaScriptContextHolder.get());
            } else {
                Log.e("[RNScreens]", "Could not install JSI bindings.");
            }
        } catch (UnsatisfiedLinkError unused) {
            Log.w("[RNScreens]", "Could not load RNScreens module.");
        }
    }

    @fb.a
    private final void finishTransition(Integer num, boolean z10) {
        View view;
        UiThreadUtil.assertOnUiThread();
        if (this.isActiveTransition.get() && num != null) {
            UIManager uIManagerForReactTag = UIManagerHelper.getUIManagerForReactTag(this.reactContext, num.intValue());
            if (uIManagerForReactTag != null) {
                view = uIManagerForReactTag.resolveView(num.intValue());
            } else {
                view = null;
            }
            if (view instanceof ScreenStack) {
                if (z10) {
                    ((ScreenStack) view).detachBelowTop();
                } else {
                    ((ScreenStack) view).notifyTopDetached();
                }
                this.isActiveTransition.set(false);
            }
            this.topScreenId = -1;
            return;
        }
        Log.e("[RNScreens]", "Unable to call `finishTransition` method before transition start.");
    }

    private final native void nativeInstall(long j10);

    private final native void nativeUninstall();

    @fb.a
    private final int[] startTransition(Integer num) {
        View view;
        ScreenStack screenStack;
        ArrayList<ScreenStackFragmentWrapper> fragments;
        int size;
        UiThreadUtil.assertOnUiThread();
        if (!this.isActiveTransition.get() && num != null) {
            this.topScreenId = -1;
            int[] iArr = {-1, -1};
            UIManager uIManagerForReactTag = UIManagerHelper.getUIManagerForReactTag(this.reactContext, num.intValue());
            if (uIManagerForReactTag != null) {
                view = uIManagerForReactTag.resolveView(num.intValue());
            } else {
                view = null;
            }
            if ((view instanceof ScreenStack) && (size = (fragments = (screenStack = (ScreenStack) view).getFragments()).size()) > 1) {
                this.isActiveTransition.set(true);
                screenStack.attachBelowTop();
                int id2 = fragments.get(size - 1).h().getId();
                this.topScreenId = id2;
                iArr[0] = id2;
                iArr[1] = fragments.get(size - 2).h().getId();
            }
            return iArr;
        }
        return new int[]{-1, -1};
    }

    @fb.a
    private final void updateTransition(double d10) {
        UiThreadUtil.assertOnUiThread();
        if (this.topScreenId != -1) {
            float f10 = (float) d10;
            short a10 = w.f18397s.a(f10);
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(this.reactContext, this.topScreenId);
            if (eventDispatcherForReactTag != null) {
                eventDispatcherForReactTag.dispatchEvent(new ln.j(UIManagerHelper.getSurfaceId(this.reactContext), this.topScreenId, f10, true, true, a10));
            }
        }
    }

    @Override // com.swmansion.rnscreens.NativeScreensModuleSpec, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "RNSModule";
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        super.initialize();
        UIManager uIManager = UIManagerHelper.getUIManager(this.reactContext, 2);
        Intrinsics.checkNotNull(uIManager, "null cannot be cast to non-null type com.facebook.react.fabric.FabricUIManager");
        NativeProxy nativeProxy = new NativeProxy();
        nativeProxy.nativeAddMutationsListener((FabricUIManager) uIManager);
        this.proxy = nativeProxy;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        nativeUninstall();
    }
}
