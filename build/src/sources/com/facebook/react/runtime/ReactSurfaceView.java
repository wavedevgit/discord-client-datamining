package com.facebook.react.runtime;

import android.content.Context;
import android.graphics.Point;
import android.graphics.Rect;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.JSPointerDispatcher;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.EventDispatcher;
import java.util.Objects;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0003\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0016\u0018\u0000 62\u00020\u0001:\u00016B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000fH\u0014J0\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0016\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u000f2\u0006\u0010\u0018\u001a\u00020\u000fH\u0014J\u0010\u0010\u001d\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\rH\u0016J\u001a\u0010\u001f\u001a\u00020\u00122\b\u0010 \u001a\u0004\u0018\u00010!2\u0006\u0010\"\u001a\u00020#H\u0016J\u0018\u0010$\u001a\u00020\u00122\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0016J\u0010\u0010%\u001a\u00020\u00122\u0006\u0010&\u001a\u00020'H\u0016J\u0010\u0010(\u001a\u00020\u00122\u0006\u0010)\u001a\u00020\rH\u0016J\b\u0010*\u001a\u00020\u000fH\u0016J\b\u0010+\u001a\u00020,H\u0016J\u0010\u0010-\u001a\u00020\u00122\u0006\u0010.\u001a\u00020#H\u0014J\u0018\u0010/\u001a\u00020\u00122\u0006\u0010.\u001a\u00020#2\u0006\u00100\u001a\u00020\rH\u0014J\b\u00101\u001a\u00020\rH\u0016J\b\u00102\u001a\u00020\rH\u0016J\n\u00103\u001a\u0004\u0018\u000104H\u0016J\b\u00105\u001a\u00020\rH\u0016R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0019\u001a\u00020\u001a8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001b\u0010\u001c¨\u00067"}, d2 = {"Lcom/facebook/react/runtime/ReactSurfaceView;", "Lcom/facebook/react/ReactRootView;", "context", "Landroid/content/Context;", "surface", "Lcom/facebook/react/runtime/ReactSurfaceImpl;", "<init>", "(Landroid/content/Context;Lcom/facebook/react/runtime/ReactSurfaceImpl;)V", "jsTouchDispatcher", "Lcom/facebook/react/uimanager/JSTouchDispatcher;", "jsPointerDispatcher", "Lcom/facebook/react/uimanager/JSPointerDispatcher;", "wasMeasured", "", "widthMeasureSpec", "", "heightMeasureSpec", "onMeasure", "", "onLayout", "changed", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "viewportOffset", "Landroid/graphics/Point;", "getViewportOffset", "()Landroid/graphics/Point;", "requestDisallowInterceptTouchEvent", "disallowIntercept", "onChildStartedNativeGesture", "childView", "Landroid/view/View;", "ev", "Landroid/view/MotionEvent;", "onChildEndedNativeGesture", "handleException", "t", "", "setIsFabric", "isFabric", "getUIManagerType", "getJSModuleName", "", "dispatchJSTouchEvent", "event", "dispatchJSPointerEvent", "isCapture", "hasActiveReactContext", "hasActiveReactInstance", "getCurrentReactContext", "Lcom/facebook/react/bridge/ReactContext;", "isViewAttachedToReactInstance", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactSurfaceView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactSurfaceView.kt\ncom/facebook/react/runtime/ReactSurfaceView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,190:1\n1#2:191\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactSurfaceView extends ReactRootView {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "ReactSurfaceView";
    private int heightMeasureSpec;
    private JSPointerDispatcher jsPointerDispatcher;
    @NotNull
    private final JSTouchDispatcher jsTouchDispatcher;
    @NotNull
    private final ReactSurfaceImpl surface;
    private boolean wasMeasured;
    private int widthMeasureSpec;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/runtime/ReactSurfaceView$Companion;", "", "<init>", "()V", "TAG", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactSurfaceView(Context context, @NotNull ReactSurfaceImpl surface) {
        super(context);
        Intrinsics.checkNotNullParameter(surface, "surface");
        this.surface = surface;
        this.jsTouchDispatcher = new JSTouchDispatcher(this);
        if (ReactFeatureFlags.dispatchPointerEvents) {
            this.jsPointerDispatcher = new JSPointerDispatcher(this);
        }
    }

    private final Point getViewportOffset() {
        getLocationOnScreen(r0);
        Rect rect = new Rect();
        getWindowVisibleDisplayFrame(rect);
        int[] iArr = {iArr[0] - rect.left, iArr[1] - rect.top};
        return new Point(iArr[0], iArr[1]);
    }

    @Override // com.facebook.react.ReactRootView
    protected void dispatchJSPointerEvent(@NotNull MotionEvent event, boolean z10) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (this.jsPointerDispatcher == null) {
            if (ReactFeatureFlags.dispatchPointerEvents) {
                p8.a.J(TAG, "Unable to dispatch pointer events to JS before the dispatcher is available");
                return;
            }
            return;
        }
        EventDispatcher eventDispatcher$ReactAndroid_release = this.surface.getEventDispatcher$ReactAndroid_release();
        if (eventDispatcher$ReactAndroid_release != null) {
            JSPointerDispatcher jSPointerDispatcher = this.jsPointerDispatcher;
            if (jSPointerDispatcher != null) {
                jSPointerDispatcher.handleMotionEvent(event, eventDispatcher$ReactAndroid_release, z10);
                return;
            }
            return;
        }
        p8.a.J(TAG, "Unable to dispatch pointer events to JS as the React instance has not been attached");
    }

    @Override // com.facebook.react.ReactRootView
    protected void dispatchJSTouchEvent(@NotNull MotionEvent event) {
        ReactContext reactContext;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher$ReactAndroid_release = this.surface.getEventDispatcher$ReactAndroid_release();
        if (eventDispatcher$ReactAndroid_release != null) {
            JSTouchDispatcher jSTouchDispatcher = this.jsTouchDispatcher;
            ReactHostImpl reactHost$ReactAndroid_release = this.surface.getReactHost$ReactAndroid_release();
            if (reactHost$ReactAndroid_release != null) {
                reactContext = reactHost$ReactAndroid_release.getCurrentReactContext();
            } else {
                reactContext = null;
            }
            jSTouchDispatcher.handleTouchEvent(event, eventDispatcher$ReactAndroid_release, reactContext);
            return;
        }
        p8.a.J(TAG, "Unable to dispatch touch events to JS as the React instance has not been attached");
    }

    @Override // com.facebook.react.ReactRootView
    public ReactContext getCurrentReactContext() {
        ReactHostImpl reactHost$ReactAndroid_release;
        if (!this.surface.isAttached$ReactAndroid_release() || (reactHost$ReactAndroid_release = this.surface.getReactHost$ReactAndroid_release()) == null) {
            return null;
        }
        return reactHost$ReactAndroid_release.getCurrentReactContext();
    }

    @Override // com.facebook.react.ReactRootView, com.facebook.react.uimanager.ReactRoot
    @NotNull
    public String getJSModuleName() {
        return this.surface.getModuleName();
    }

    @Override // com.facebook.react.ReactRootView, com.facebook.react.uimanager.ReactRoot
    public int getUIManagerType() {
        return 2;
    }

    @Override // com.facebook.react.ReactRootView, com.facebook.react.uimanager.RootView
    public void handleException(@NotNull Throwable t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        String objects = Objects.toString(t10.getMessage(), "");
        Intrinsics.checkNotNullExpressionValue(objects, "toString(...)");
        IllegalViewOperationException illegalViewOperationException = new IllegalViewOperationException(objects, this, t10);
        ReactHostImpl reactHost$ReactAndroid_release = this.surface.getReactHost$ReactAndroid_release();
        if (reactHost$ReactAndroid_release != null) {
            reactHost$ReactAndroid_release.handleHostException$ReactAndroid_release(illegalViewOperationException);
            return;
        }
        throw illegalViewOperationException;
    }

    @Override // com.facebook.react.ReactRootView
    public boolean hasActiveReactContext() {
        ReactContext reactContext;
        if (this.surface.isAttached$ReactAndroid_release()) {
            ReactHostImpl reactHost$ReactAndroid_release = this.surface.getReactHost$ReactAndroid_release();
            if (reactHost$ReactAndroid_release != null) {
                reactContext = reactHost$ReactAndroid_release.getCurrentReactContext();
            } else {
                reactContext = null;
            }
            if (reactContext != null) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.facebook.react.ReactRootView
    public boolean hasActiveReactInstance() {
        ReactHostImpl reactHost$ReactAndroid_release;
        if (this.surface.isAttached$ReactAndroid_release() && (reactHost$ReactAndroid_release = this.surface.getReactHost$ReactAndroid_release()) != null && reactHost$ReactAndroid_release.isInstanceInitialized$ReactAndroid_release()) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.ReactRootView
    public boolean isViewAttachedToReactInstance() {
        return this.surface.isAttached$ReactAndroid_release();
    }

    @Override // com.facebook.react.ReactRootView, com.facebook.react.uimanager.RootView
    public void onChildEndedNativeGesture(@NotNull View childView, @NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(childView, "childView");
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher$ReactAndroid_release = this.surface.getEventDispatcher$ReactAndroid_release();
        if (eventDispatcher$ReactAndroid_release != null) {
            this.jsTouchDispatcher.onChildEndedNativeGesture(ev2, eventDispatcher$ReactAndroid_release);
            JSPointerDispatcher jSPointerDispatcher = this.jsPointerDispatcher;
            if (jSPointerDispatcher != null) {
                jSPointerDispatcher.onChildEndedNativeGesture();
            }
        }
    }

    @Override // com.facebook.react.ReactRootView, com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(View view, @NotNull MotionEvent ev2) {
        JSPointerDispatcher jSPointerDispatcher;
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher$ReactAndroid_release = this.surface.getEventDispatcher$ReactAndroid_release();
        if (eventDispatcher$ReactAndroid_release != null) {
            this.jsTouchDispatcher.onChildStartedNativeGesture(ev2, eventDispatcher$ReactAndroid_release);
            if (view != null && (jSPointerDispatcher = this.jsPointerDispatcher) != null) {
                jSPointerDispatcher.onChildStartedNativeGesture(view, ev2, eventDispatcher$ReactAndroid_release);
            }
        }
    }

    @Override // com.facebook.react.ReactRootView, android.widget.FrameLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        if (this.wasMeasured && z10) {
            Point viewportOffset = getViewportOffset();
            this.surface.updateLayoutSpecs$ReactAndroid_release(this.widthMeasureSpec, this.heightMeasureSpec, viewportOffset.x, viewportOffset.y);
        }
    }

    @Override // com.facebook.react.ReactRootView, android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        int i12;
        int i13;
        qb.a.c(0L, "ReactSurfaceView.onMeasure");
        int mode = View.MeasureSpec.getMode(i10);
        if (mode != Integer.MIN_VALUE && mode != 0) {
            i12 = View.MeasureSpec.getSize(i10);
        } else {
            int childCount = getChildCount();
            int i14 = 0;
            for (int i15 = 0; i15 < childCount; i15++) {
                View childAt = getChildAt(i15);
                i14 = Math.max(i14, childAt.getLeft() + childAt.getMeasuredWidth() + childAt.getPaddingLeft() + childAt.getPaddingRight());
            }
            i12 = i14;
        }
        int mode2 = View.MeasureSpec.getMode(i11);
        if (mode2 != Integer.MIN_VALUE && mode2 != 0) {
            i13 = View.MeasureSpec.getSize(i11);
        } else {
            int childCount2 = getChildCount();
            int i16 = 0;
            for (int i17 = 0; i17 < childCount2; i17++) {
                View childAt2 = getChildAt(i17);
                i16 = Math.max(i16, childAt2.getTop() + childAt2.getMeasuredHeight() + childAt2.getPaddingTop() + childAt2.getPaddingBottom());
            }
            i13 = i16;
        }
        setMeasuredDimension(i12, i13);
        this.wasMeasured = true;
        this.widthMeasureSpec = i10;
        this.heightMeasureSpec = i11;
        Point viewportOffset = getViewportOffset();
        this.surface.updateLayoutSpecs$ReactAndroid_release(i10, i11, viewportOffset.x, viewportOffset.y);
        qb.a.i(0L);
    }

    @Override // com.facebook.react.ReactRootView, android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
        ViewParent parent = getParent();
        if (parent != null) {
            parent.requestDisallowInterceptTouchEvent(z10);
        }
    }

    @Override // com.facebook.react.ReactRootView
    public void setIsFabric(boolean z10) {
        super.setIsFabric(true);
    }
}
