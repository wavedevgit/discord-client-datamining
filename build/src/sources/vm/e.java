package vm;

import android.view.View;
import android.view.WindowManager;
import android.view.accessibility.AccessibilityEvent;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.ArrayList;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f52318d;

    /* renamed from: e  reason: collision with root package name */
    private final EventDispatcher f52319e;

    /* renamed from: i  reason: collision with root package name */
    private WindowManager f52320i;

    /* renamed from: o  reason: collision with root package name */
    private f f52321o;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f52318d = reactContext;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());
        this.f52319e = eventDispatcherForReactTag;
        Object systemService = reactContext.getSystemService("window");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.view.WindowManager");
        this.f52320i = (WindowManager) systemService;
        f fVar = new f(reactContext);
        this.f52321o = fVar;
        fVar.setEventDispatcher$react_native_keyboard_controller_release(eventDispatcherForReactTag);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void addChildrenForAccessibility(ArrayList outChildren) {
        Intrinsics.checkNotNullParameter(outChildren, "outChildren");
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10) {
        UiThreadUtil.assertOnUiThread();
        this.f52321o.addView(view, i10);
    }

    public final void c() {
        if (this.f52321o.c()) {
            this.f52320i.removeView(this.f52321o);
        }
    }

    public final void d() {
        this.f52320i.addView(this.f52321o, new WindowManager.LayoutParams(-1, -1, 1000, 520, -3));
    }

    @Override // android.view.View
    public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return false;
    }

    @Override // android.view.ViewGroup
    public View getChildAt(int i10) {
        return this.f52321o.getChildAt(i10);
    }

    @Override // android.view.ViewGroup
    public int getChildCount() {
        return this.f52321o.getChildCount();
    }

    public final StateWrapper getStateWrapper() {
        return this.f52321o.getStateWrapper$react_native_keyboard_controller_release();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        c();
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.ViewManager
    public void removeView(View view) {
        UiThreadUtil.assertOnUiThread();
        if (view != null) {
            this.f52321o.removeView(view);
        }
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public void removeViewAt(int i10) {
        UiThreadUtil.assertOnUiThread();
        this.f52321o.removeView(getChildAt(i10));
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f52321o.setStateWrapper$react_native_keyboard_controller_release(stateWrapper);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }
}
