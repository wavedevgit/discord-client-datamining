package pm;

import android.view.View;
import android.view.WindowManager;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f46136d;

    /* renamed from: e  reason: collision with root package name */
    private final EventDispatcher f46137e;

    /* renamed from: i  reason: collision with root package name */
    private WindowManager f46138i;

    /* renamed from: o  reason: collision with root package name */
    private f f46139o;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f46136d = reactContext;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());
        this.f46137e = eventDispatcherForReactTag;
        Object systemService = reactContext.getSystemService("window");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.view.WindowManager");
        this.f46138i = (WindowManager) systemService;
        f fVar = new f(reactContext);
        this.f46139o = fVar;
        fVar.setEventDispatcher$react_native_keyboard_controller_release(eventDispatcherForReactTag);
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10) {
        UiThreadUtil.assertOnUiThread();
        this.f46139o.addView(view, i10);
    }

    public final void c() {
        if (this.f46139o.c()) {
            this.f46138i.removeView(this.f46139o);
        }
    }

    public final void d() {
        this.f46138i.addView(this.f46139o, new WindowManager.LayoutParams(-1, -1, 1000, 520, -3));
    }

    @Override // android.view.ViewGroup
    public View getChildAt(int i10) {
        return this.f46139o.getChildAt(i10);
    }

    @Override // android.view.ViewGroup
    public int getChildCount() {
        return this.f46139o.getChildCount();
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
            this.f46139o.removeView(view);
        }
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public void removeViewAt(int i10) {
        UiThreadUtil.assertOnUiThread();
        this.f46139o.removeView(getChildAt(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }
}
