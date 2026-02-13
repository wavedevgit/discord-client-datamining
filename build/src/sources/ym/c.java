package ym;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.Window;
import android.widget.FrameLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
import androidx.core.view.x0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import om.h;
import om.i;
import org.jetbrains.annotations.NotNull;
import rm.k;
import rm.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f56204d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56205e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56206i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f56207o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f56208p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f56209q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f56210r;

    /* renamed from: s  reason: collision with root package name */
    private ReactViewGroup f56211s;

    /* renamed from: t  reason: collision with root package name */
    private int f56212t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f56213u;

    /* renamed from: v  reason: collision with root package name */
    private k f56214v;

    /* renamed from: w  reason: collision with root package name */
    private final l f56215w;

    /* renamed from: x  reason: collision with root package name */
    private final um.b f56216x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {
        a(Object obj) {
            super(0, obj, c.class, "getKeyboardCallback", "getKeyboardCallback()Lcom/reactnativekeyboardcontroller/listeners/KeyboardAnimationCallback;", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final k invoke() {
            return ((c) this.receiver).getKeyboardCallback();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ThemedReactContext reactContext) {
        super(reactContext);
        String str;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f56204d = reactContext;
        int identityHashCode = System.identityHashCode(this);
        this.f56205e = identityHashCode;
        l lVar = new l(WindowInsetsCompat.p.h(), WindowInsetsCompat.p.c(), 1, this.f56207o);
        this.f56215w = lVar;
        this.f56216x = new um.b(this, reactContext, lVar, new a(this));
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        sm.a.c(aVar, a10, "init: instanceId=" + identityHashCode + ", activity=" + str, null, 4, null);
        e.f56218a.b(this);
    }

    private final void g() {
        q();
        this.f56216x.c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final k getKeyboardCallback() {
        return this.f56214v;
    }

    private final void h() {
        boolean z10;
        ReactViewGroup reactViewGroup = this.f56211s;
        k kVar = this.f56214v;
        if (reactViewGroup != null && kVar != null) {
            ViewParent parent = reactViewGroup.getParent();
            int identityHashCode = System.identityHashCode(parent);
            boolean z11 = true;
            if (identityHashCode != this.f56212t) {
                z10 = true;
            } else {
                z10 = false;
            }
            boolean isAttachedToWindow = reactViewGroup.isAttachedToWindow();
            boolean l10 = kVar.l();
            int visibility = reactViewGroup.getVisibility();
            boolean isShown = reactViewGroup.isShown();
            boolean hasWindowFocus = reactViewGroup.hasWindowFocus();
            IBinder windowToken = reactViewGroup.getWindowToken();
            boolean isLaidOut = reactViewGroup.isLaidOut();
            if (parent != null && !z10 && isAttachedToWindow && !l10 && visibility == 0 && isShown && windowToken != null && isLaidOut) {
                return;
            }
            sm.a aVar = sm.a.f48740a;
            String a10 = d.a();
            int i10 = this.f56205e;
            int i11 = this.f56212t;
            if (windowToken == null) {
                z11 = false;
            }
            sm.a.f(aVar, a10, "eventView health check FAILED: instanceId=" + i10 + ", parent=" + parent + " (id=" + identityHashCode + ", expected=" + i11 + ", changed=" + z10 + "), isAttached=" + isAttachedToWindow + ", isSuspended=" + l10 + ", visibility=" + visibility + ", isShown=" + isShown + ", hasWindowFocus=" + hasWindowFocus + ", windowToken=" + z11 + ", isLaidOut=" + isLaidOut, null, 4, null);
        }
    }

    private final void i() {
        n();
        this.f56216x.b();
    }

    private final void j() {
        r();
        i();
    }

    private final void k() {
        r();
        g();
    }

    private final void m() {
        r();
        i.d(this);
    }

    private final void n() {
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        int i10 = this.f56205e;
        sm.a.c(aVar, a10, "removeKeyboardCallbacks: instanceId=" + i10, null, 4, null);
        k kVar = this.f56214v;
        if (kVar != null) {
            kVar.e();
        }
        final ReactViewGroup reactViewGroup = this.f56211s;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: ym.b
            @Override // java.lang.Runnable
            public final void run() {
                c.o(ReactViewGroup.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(ReactViewGroup reactViewGroup) {
        h.a(reactViewGroup);
    }

    private final void q() {
        String str;
        Activity currentActivity = this.f56204d.getCurrentActivity();
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        int i10 = this.f56205e;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        sm.a.c(aVar, a10, "setupKeyboardCallbacks: instanceId=" + i10 + ", activity=" + str, null, 4, null);
        if (currentActivity == null) {
            sm.a.f(aVar, d.a(), "setupKeyboardCallbacks: currentActivity is null", null, 4, null);
            return;
        }
        this.f56211s = new ReactViewGroup(getContext());
        ViewGroup a11 = om.f.a(this.f56204d);
        if (a11 == null) {
            sm.a.f(aVar, d.a(), "setupKeyboardCallbacks: content is null", null, 4, null);
            return;
        }
        a11.addView(this.f56211s);
        this.f56212t = System.identityHashCode(a11);
        String a12 = d.a();
        int i11 = this.f56212t;
        sm.a.c(aVar, a12, "setupKeyboardCallbacks: eventView added to root (rootId=" + i11 + ")", null, 4, null);
        k kVar = new k(this, this, this.f56204d, this.f56215w);
        this.f56214v = kVar;
        ReactViewGroup reactViewGroup = this.f56211s;
        if (reactViewGroup != null) {
            i0.E0(reactViewGroup, kVar);
            i0.x0(reactViewGroup, this.f56214v);
            i.d(reactViewGroup);
        }
        sm.a.c(aVar, d.a(), "setupKeyboardCallbacks: completed", null, 4, null);
    }

    private final void r() {
        View b10 = om.f.b(this.f56204d);
        if (b10 != null) {
            i0.x0(b10, new w() { // from class: ym.a
                @Override // androidx.core.view.w
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    WindowInsetsCompat s10;
                    s10 = c.s(c.this, view, windowInsetsCompat);
                    return s10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat s(c cVar, View v10, WindowInsetsCompat insets) {
        boolean z10;
        int i10;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        cVar.h();
        ViewGroup a10 = om.f.a(cVar.f56204d);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        boolean z11 = cVar.f56210r;
        boolean z12 = true;
        int i11 = 0;
        if (z11 && !cVar.f56206i) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z11 && !cVar.f56207o) {
            z12 = false;
        }
        Insets f10 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        int i12 = f10.f3304a;
        if (z10) {
            i10 = 0;
        } else {
            i10 = f11.f3305b;
        }
        int i13 = f10.f3306c;
        if (!z12) {
            i11 = f10.f3307d;
        }
        layoutParams.setMargins(i12, i10, i13, i11);
        if (a10 != null) {
            a10.setLayoutParams(layoutParams);
        }
        return i.c(v10, insets, cVar.f56206i, cVar.f56210r);
    }

    public final boolean getActive() {
        return this.f56210r;
    }

    public final k getCallback$react_native_keyboard_controller_release() {
        return this.f56214v;
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.f56204d;
    }

    public final void l(boolean z10) {
        if (this.f56210r && this.f56206i != z10) {
            this.f56206i = z10;
            m();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        int i10 = this.f56205e;
        boolean z10 = this.f56213u;
        sm.a.c(aVar, a10, "onAttachedToWindow: instanceId=" + i10 + ", wasMounted=" + z10, null, 4, null);
        if (!this.f56213u) {
            this.f56213u = true;
        } else {
            g();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        m();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        int i10 = this.f56205e;
        sm.a.c(aVar, a10, "onDetachedFromWindow: instanceId=" + i10, null, 4, null);
        i();
    }

    public final void p() {
        boolean z10;
        Window window;
        if (!this.f56210r && !this.f56208p) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f56209q != z10) {
            this.f56209q = z10;
            Activity currentActivity = this.f56204d.getCurrentActivity();
            if (currentActivity != null) {
                x0.c(currentActivity.getWindow(), true ^ this.f56209q);
            }
            Activity currentActivity2 = this.f56204d.getCurrentActivity();
            if (currentActivity2 != null && (window = currentActivity2.getWindow()) != null) {
                window.clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            }
        }
    }

    public final void setActive(boolean z10) {
        sm.a aVar = sm.a.f48740a;
        String a10 = d.a();
        int i10 = this.f56205e;
        boolean z11 = this.f56210r;
        sm.a.c(aVar, a10, "setActive: instanceId=" + i10 + ", active=" + z10 + " (was " + z11 + ")", null, 4, null);
        this.f56210r = z10;
        if (z10) {
            k();
        } else {
            j();
        }
    }

    public final void setCallback$react_native_keyboard_controller_release(k kVar) {
        this.f56214v = kVar;
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        this.f56207o = z10;
        this.f56215w.e(z10);
    }

    public final void setPreserveEdgeToEdge(boolean z10) {
        this.f56208p = z10;
    }

    public final void setStatusBarTranslucent(boolean z10) {
        this.f56206i = z10;
    }
}
