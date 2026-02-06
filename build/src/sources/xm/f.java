package xm;

import android.graphics.Point;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import xm.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup implements h {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f54722d;

    /* renamed from: e  reason: collision with root package name */
    private final JSTouchDispatcher f54723e;

    /* renamed from: i  reason: collision with root package name */
    private c f54724i;

    /* renamed from: o  reason: collision with root package name */
    private EventDispatcher f54725o;

    /* renamed from: p  reason: collision with root package name */
    private StateWrapper f54726p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f54727q;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f54722d = reactContext;
        this.f54723e = new JSTouchDispatcher(this);
        if (ReactFeatureFlags.dispatchPointerEvents) {
            this.f54724i = new c(this);
        }
    }

    private final void d(int i10, int i11) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putDouble("screenWidth", lm.d.a(i10));
        writableNativeMap.putDouble("screenHeight", lm.d.a(i11));
        StateWrapper stateWrapper = this.f54726p;
        if (stateWrapper != null) {
            stateWrapper.updateState(writableNativeMap);
        }
    }

    public final boolean c() {
        return this.f54727q;
    }

    public final EventDispatcher getEventDispatcher$react_native_keyboard_controller_release() {
        return this.f54725o;
    }

    public final StateWrapper getStateWrapper$react_native_keyboard_controller_release() {
        return this.f54726p;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void handleException(Throwable t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        this.f54722d.getReactApplicationContext().handleException(new RuntimeException(t10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        Point b10 = lm.a.b(this.f54722d);
        d(b10.x, b10.y);
        this.f54727q = true;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildEndedNativeGesture(View childView, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(childView, "childView");
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null) {
            this.f54723e.onChildEndedNativeGesture(ev2, eventDispatcher);
        }
        c cVar = this.f54724i;
        if (cVar != null) {
            cVar.onChildEndedNativeGesture();
        }
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(MotionEvent motionEvent) {
        h.a.a(this, motionEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        d(0, 0);
        this.f54727q = false;
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public boolean onHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null && (cVar = this.f54724i) != null) {
            cVar.f(event, eventDispatcher, false);
        }
        return super.onHoverEvent(event);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null && (cVar = this.f54724i) != null) {
            cVar.f(event, eventDispatcher, true);
        }
        return super.onInterceptHoverEvent(event);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null) {
            try {
                this.f54723e.handleTouchEvent(event, eventDispatcher);
                c cVar = this.f54724i;
                if (cVar != null) {
                    cVar.f(event, eventDispatcher, true);
                    Unit unit = Unit.f32008a;
                }
            } catch (RuntimeException e10) {
                pm.a.f45061a.e(g.a(), "Can not handle touch event", e10);
                Unit unit2 = Unit.f32008a;
            }
        }
        return super.onInterceptTouchEvent(event);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        d(i10, i11);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public boolean onTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null) {
            try {
                this.f54723e.handleTouchEvent(event, eventDispatcher);
                c cVar = this.f54724i;
                if (cVar != null) {
                    cVar.f(event, eventDispatcher, false);
                    Unit unit = Unit.f32008a;
                }
            } catch (RuntimeException e10) {
                pm.a.f45061a.e(g.a(), "Can not handle touch event", e10);
                Unit unit2 = Unit.f32008a;
            }
        }
        super.onTouchEvent(event);
        return true;
    }

    public final void setAttached$react_native_keyboard_controller_release(boolean z10) {
        this.f54727q = z10;
    }

    public final void setEventDispatcher$react_native_keyboard_controller_release(EventDispatcher eventDispatcher) {
        this.f54725o = eventDispatcher;
    }

    public final void setStateWrapper$react_native_keyboard_controller_release(StateWrapper stateWrapper) {
        this.f54726p = stateWrapper;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(View view, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f54725o;
        if (eventDispatcher != null) {
            this.f54723e.onChildStartedNativeGesture(ev2, eventDispatcher);
            c cVar = this.f54724i;
            if (cVar != null) {
                cVar.onChildStartedNativeGesture(view, ev2, eventDispatcher);
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
    }
}
