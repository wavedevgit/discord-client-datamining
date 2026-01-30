package pm;

import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.Intrinsics;
import pm.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup implements g {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f46140d;

    /* renamed from: e  reason: collision with root package name */
    private final JSTouchDispatcher f46141e;

    /* renamed from: i  reason: collision with root package name */
    private c f46142i;

    /* renamed from: o  reason: collision with root package name */
    private EventDispatcher f46143o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f46144p;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f46140d = reactContext;
        this.f46141e = new JSTouchDispatcher(this);
        if (ReactFeatureFlags.dispatchPointerEvents) {
            this.f46142i = new c(this);
        }
    }

    public final boolean c() {
        return this.f46144p;
    }

    public final EventDispatcher getEventDispatcher$react_native_keyboard_controller_release() {
        return this.f46143o;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void handleException(Throwable t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        this.f46140d.getReactApplicationContext().handleException(new RuntimeException(t10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.f46144p = true;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildEndedNativeGesture(View childView, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(childView, "childView");
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null) {
            this.f46141e.onChildEndedNativeGesture(ev2, eventDispatcher);
        }
        c cVar = this.f46142i;
        if (cVar != null) {
            cVar.onChildEndedNativeGesture();
        }
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(MotionEvent motionEvent) {
        g.a.a(this, motionEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f46144p = false;
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public boolean onHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null && (cVar = this.f46142i) != null) {
            cVar.f(event, eventDispatcher, false);
        }
        return super.onHoverEvent(event);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptHoverEvent(MotionEvent event) {
        c cVar;
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null && (cVar = this.f46142i) != null) {
            cVar.f(event, eventDispatcher, true);
        }
        return super.onHoverEvent(event);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null) {
            this.f46141e.handleTouchEvent(event, eventDispatcher);
            c cVar = this.f46142i;
            if (cVar != null) {
                cVar.f(event, eventDispatcher, true);
            }
        }
        return super.onInterceptTouchEvent(event);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public boolean onTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null) {
            this.f46141e.handleTouchEvent(event, eventDispatcher);
            c cVar = this.f46142i;
            if (cVar != null) {
                cVar.f(event, eventDispatcher, false);
            }
        }
        super.onTouchEvent(event);
        return true;
    }

    public final void setAttached$react_native_keyboard_controller_release(boolean z10) {
        this.f46144p = z10;
    }

    public final void setEventDispatcher$react_native_keyboard_controller_release(EventDispatcher eventDispatcher) {
        this.f46143o = eventDispatcher;
    }

    @Override // com.facebook.react.uimanager.RootView
    public void onChildStartedNativeGesture(View view, MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        EventDispatcher eventDispatcher = this.f46143o;
        if (eventDispatcher != null) {
            this.f46141e.onChildStartedNativeGesture(ev2, eventDispatcher);
            c cVar = this.f46142i;
            if (cVar != null) {
                cVar.onChildStartedNativeGesture(view, ev2, eventDispatcher);
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
    }
}
