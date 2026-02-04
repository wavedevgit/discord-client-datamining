package sm;

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
import sm.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup implements h {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f49554d;

    /* renamed from: e  reason: collision with root package name */
    private final JSTouchDispatcher f49555e;

    /* renamed from: i  reason: collision with root package name */
    private c f49556i;

    /* renamed from: o  reason: collision with root package name */
    private EventDispatcher f49557o;

    /* renamed from: p  reason: collision with root package name */
    private StateWrapper f49558p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f49559q;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f49554d = reactContext;
        this.f49555e = new JSTouchDispatcher(this);
        if (ReactFeatureFlags.dispatchPointerEvents) {
            this.f49556i = new c(this);
        }
    }

    private final void d(int i10, int i11) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putDouble("screenWidth", gm.d.a(i10));
        writableNativeMap.putDouble("screenHeight", gm.d.a(i11));
        StateWrapper stateWrapper = this.f49558p;
        if (stateWrapper != null) {
            stateWrapper.updateState(writableNativeMap);
        }
    }

    public final boolean c() {
        return this.f49559q;
    }

    public final EventDispatcher getEventDispatcher$react_native_keyboard_controller_release() {
        return this.f49557o;
    }

    public final StateWrapper getStateWrapper$react_native_keyboard_controller_release() {
        return this.f49558p;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void handleException(Throwable t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        this.f49554d.getReactApplicationContext().handleException(new RuntimeException(t10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        Point b10 = gm.a.b(this.f49554d);
        d(b10.x, b10.y);
        this.f49559q = true;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildEndedNativeGesture(View childView, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(childView, "childView");
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null) {
            this.f49555e.onChildEndedNativeGesture(ev2, eventDispatcher);
        }
        c cVar = this.f49556i;
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
        this.f49559q = false;
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public boolean onHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null && (cVar = this.f49556i) != null) {
            cVar.f(event, eventDispatcher, false);
        }
        return super.onHoverEvent(event);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null && (cVar = this.f49556i) != null) {
            cVar.f(event, eventDispatcher, true);
        }
        return super.onInterceptHoverEvent(event);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null) {
            try {
                this.f49555e.handleTouchEvent(event, eventDispatcher);
                c cVar = this.f49556i;
                if (cVar != null) {
                    cVar.f(event, eventDispatcher, true);
                    Unit unit = Unit.f32464a;
                }
            } catch (RuntimeException e10) {
                km.a.f32427a.e(g.a(), "Can not handle touch event", e10);
                Unit unit2 = Unit.f32464a;
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
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null) {
            try {
                this.f49555e.handleTouchEvent(event, eventDispatcher);
                c cVar = this.f49556i;
                if (cVar != null) {
                    cVar.f(event, eventDispatcher, false);
                    Unit unit = Unit.f32464a;
                }
            } catch (RuntimeException e10) {
                km.a.f32427a.e(g.a(), "Can not handle touch event", e10);
                Unit unit2 = Unit.f32464a;
            }
        }
        super.onTouchEvent(event);
        return true;
    }

    public final void setAttached$react_native_keyboard_controller_release(boolean z10) {
        this.f49559q = z10;
    }

    public final void setEventDispatcher$react_native_keyboard_controller_release(EventDispatcher eventDispatcher) {
        this.f49557o = eventDispatcher;
    }

    public final void setStateWrapper$react_native_keyboard_controller_release(StateWrapper stateWrapper) {
        this.f49558p = stateWrapper;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(View view, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f49557o;
        if (eventDispatcher != null) {
            this.f49555e.onChildStartedNativeGesture(ev2, eventDispatcher);
            c cVar = this.f49556i;
            if (cVar != null) {
                cVar.onChildStartedNativeGesture(view, ev2, eventDispatcher);
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
    }
}
