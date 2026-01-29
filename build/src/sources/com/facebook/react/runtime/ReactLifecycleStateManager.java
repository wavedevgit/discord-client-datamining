package com.facebook.react.runtime;

import android.app.Activity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.LifecycleState;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0007J\u001c\u0010\u0011\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0007J\u001c\u0010\u0012\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0007J\u0012\u0010\u0013\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0007R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\b\u001a\u00020\u00078F¢\u0006\u0006\u001a\u0004\b\t\u0010\n¨\u0006\u0014"}, d2 = {"Lcom/facebook/react/runtime/ReactLifecycleStateManager;", "", "bridgelessReactStateTracker", "Lcom/facebook/react/runtime/BridgelessReactStateTracker;", "<init>", "(Lcom/facebook/react/runtime/BridgelessReactStateTracker;)V", "state", "Lcom/facebook/react/common/LifecycleState;", "lifecycleState", "getLifecycleState", "()Lcom/facebook/react/common/LifecycleState;", "resumeReactContextIfHostResumed", "", "currentContext", "Lcom/facebook/react/bridge/ReactContext;", "activity", "Landroid/app/Activity;", "moveToOnHostResume", "moveToOnHostPause", "moveToOnHostDestroy", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactLifecycleStateManager {
    @NotNull
    private final BridgelessReactStateTracker bridgelessReactStateTracker;
    @NotNull
    private LifecycleState state;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[LifecycleState.values().length];
            try {
                iArr[LifecycleState.BEFORE_CREATE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[LifecycleState.RESUMED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[LifecycleState.BEFORE_RESUME.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public ReactLifecycleStateManager(@NotNull BridgelessReactStateTracker bridgelessReactStateTracker) {
        Intrinsics.checkNotNullParameter(bridgelessReactStateTracker, "bridgelessReactStateTracker");
        this.bridgelessReactStateTracker = bridgelessReactStateTracker;
        this.state = LifecycleState.BEFORE_CREATE;
    }

    @NotNull
    public final LifecycleState getLifecycleState() {
        return this.state;
    }

    public final void moveToOnHostDestroy(ReactContext reactContext) {
        if (reactContext != null) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[this.state.ordinal()];
            if (i10 != 2) {
                if (i10 == 3) {
                    this.bridgelessReactStateTracker.enterState("ReactContext.onHostDestroy()");
                    reactContext.onHostDestroy();
                }
            } else {
                this.bridgelessReactStateTracker.enterState("ReactContext.onHostPause()");
                reactContext.onHostPause();
                this.bridgelessReactStateTracker.enterState("ReactContext.onHostDestroy()");
                reactContext.onHostDestroy();
            }
        }
        this.state = LifecycleState.BEFORE_CREATE;
    }

    public final void moveToOnHostPause(ReactContext reactContext, Activity activity) {
        if (reactContext != null) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[this.state.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    this.bridgelessReactStateTracker.enterState("ReactContext.onHostPause()");
                    reactContext.onHostPause();
                }
            } else {
                this.bridgelessReactStateTracker.enterState("ReactContext.onHostResume()");
                reactContext.onHostResume(activity);
                this.bridgelessReactStateTracker.enterState("ReactContext.onHostPause()");
                reactContext.onHostPause();
            }
        }
        this.state = LifecycleState.BEFORE_RESUME;
    }

    public final void moveToOnHostResume(ReactContext reactContext, Activity activity) {
        LifecycleState lifecycleState = this.state;
        LifecycleState lifecycleState2 = LifecycleState.RESUMED;
        if (lifecycleState == lifecycleState2) {
            return;
        }
        if (reactContext != null) {
            this.bridgelessReactStateTracker.enterState("ReactContext.onHostResume()");
            reactContext.onHostResume(activity);
        }
        this.state = lifecycleState2;
    }

    public final void resumeReactContextIfHostResumed(@NotNull ReactContext currentContext, Activity activity) {
        Intrinsics.checkNotNullParameter(currentContext, "currentContext");
        if (this.state == LifecycleState.RESUMED) {
            this.bridgelessReactStateTracker.enterState("ReactContext.onHostResume()");
            currentContext.onHostResume(activity);
        }
    }
}
