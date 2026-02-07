package vm;

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
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import lm.h;
import lm.i;
import om.k;
import om.l;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f52786d;

    /* renamed from: e  reason: collision with root package name */
    private final int f52787e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f52788i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f52789o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f52790p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f52791q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f52792r;

    /* renamed from: s  reason: collision with root package name */
    private ReactViewGroup f52793s;

    /* renamed from: t  reason: collision with root package name */
    private int f52794t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f52795u;

    /* renamed from: v  reason: collision with root package name */
    private k f52796v;

    /* renamed from: w  reason: collision with root package name */
    private final l f52797w;

    /* renamed from: x  reason: collision with root package name */
    private final rm.b f52798x;

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
        this.f52786d = reactContext;
        int identityHashCode = System.identityHashCode(this);
        this.f52787e = identityHashCode;
        l lVar = new l(WindowInsetsCompat.p.h(), WindowInsetsCompat.p.c(), 1, this.f52789o);
        this.f52797w = lVar;
        this.f52798x = new rm.b(this, reactContext, lVar, new a(this));
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        pm.a.c(aVar, a10, "init: instanceId=" + identityHashCode + ", activity=" + str, null, 4, null);
        e.f52800a.b(this);
    }

    private final void f() {
        p();
        this.f52798x.c();
    }

    private final void g() {
        boolean z10;
        ReactViewGroup reactViewGroup = this.f52793s;
        k kVar = this.f52796v;
        if (reactViewGroup != null && kVar != null) {
            ViewParent parent = reactViewGroup.getParent();
            int identityHashCode = System.identityHashCode(parent);
            boolean z11 = true;
            if (identityHashCode != this.f52794t) {
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
            pm.a aVar = pm.a.f45109a;
            String a10 = d.a();
            int i10 = this.f52787e;
            int i11 = this.f52794t;
            if (windowToken == null) {
                z11 = false;
            }
            pm.a.f(aVar, a10, "eventView health check FAILED: instanceId=" + i10 + ", parent=" + parent + " (id=" + identityHashCode + ", expected=" + i11 + ", changed=" + z10 + "), isAttached=" + isAttachedToWindow + ", isSuspended=" + l10 + ", visibility=" + visibility + ", isShown=" + isShown + ", hasWindowFocus=" + hasWindowFocus + ", windowToken=" + z11 + ", isLaidOut=" + isLaidOut, null, 4, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final k getKeyboardCallback() {
        return this.f52796v;
    }

    private final void h() {
        m();
        this.f52798x.b();
    }

    private final void i() {
        q();
        h();
    }

    private final void j() {
        q();
        f();
    }

    private final void l() {
        q();
        i.d(this);
    }

    private final void m() {
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        int i10 = this.f52787e;
        pm.a.c(aVar, a10, "removeKeyboardCallbacks: instanceId=" + i10, null, 4, null);
        k kVar = this.f52796v;
        if (kVar != null) {
            kVar.e();
        }
        final ReactViewGroup reactViewGroup = this.f52793s;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: vm.b
            @Override // java.lang.Runnable
            public final void run() {
                c.n(ReactViewGroup.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(ReactViewGroup reactViewGroup) {
        h.a(reactViewGroup);
    }

    private final void p() {
        String str;
        Activity currentActivity = this.f52786d.getCurrentActivity();
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        int i10 = this.f52787e;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        pm.a.c(aVar, a10, "setupKeyboardCallbacks: instanceId=" + i10 + ", activity=" + str, null, 4, null);
        if (currentActivity == null) {
            pm.a.f(aVar, d.a(), "setupKeyboardCallbacks: currentActivity is null", null, 4, null);
            return;
        }
        this.f52793s = new ReactViewGroup(getContext());
        ViewGroup a11 = lm.f.a(this.f52786d);
        if (a11 == null) {
            pm.a.f(aVar, d.a(), "setupKeyboardCallbacks: content is null", null, 4, null);
            return;
        }
        a11.addView(this.f52793s);
        this.f52794t = System.identityHashCode(a11);
        String a12 = d.a();
        int i11 = this.f52794t;
        pm.a.c(aVar, a12, "setupKeyboardCallbacks: eventView added to root (rootId=" + i11 + ")", null, 4, null);
        k kVar = new k(this, this, this.f52786d, this.f52797w);
        this.f52796v = kVar;
        ReactViewGroup reactViewGroup = this.f52793s;
        if (reactViewGroup != null) {
            h0.L0(reactViewGroup, kVar);
            h0.D0(reactViewGroup, this.f52796v);
            i.d(reactViewGroup);
        }
        pm.a.c(aVar, d.a(), "setupKeyboardCallbacks: completed", null, 4, null);
    }

    private final void q() {
        View b10 = lm.f.b(this.f52786d);
        if (b10 != null) {
            h0.D0(b10, new v() { // from class: vm.a
                @Override // androidx.core.view.v
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    WindowInsetsCompat r10;
                    r10 = c.r(c.this, view, windowInsetsCompat);
                    return r10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat r(c cVar, View v10, WindowInsetsCompat insets) {
        boolean z10;
        int i10;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        cVar.g();
        ViewGroup a10 = lm.f.a(cVar.f52786d);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        boolean z11 = cVar.f52792r;
        boolean z12 = true;
        int i11 = 0;
        if (z11 && !cVar.f52788i) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z11 && !cVar.f52789o) {
            z12 = false;
        }
        Insets f10 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        int i12 = f10.f3604a;
        if (z10) {
            i10 = 0;
        } else {
            i10 = f11.f3605b;
        }
        int i13 = f10.f3606c;
        if (!z12) {
            i11 = f10.f3607d;
        }
        layoutParams.setMargins(i12, i10, i13, i11);
        if (a10 != null) {
            a10.setLayoutParams(layoutParams);
        }
        return i.c(v10, insets, cVar.f52788i, cVar.f52792r);
    }

    public final boolean getActive() {
        return this.f52792r;
    }

    public final k getCallback$react_native_keyboard_controller_release() {
        return this.f52796v;
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.f52786d;
    }

    public final void k(boolean z10) {
        if (this.f52792r && this.f52788i != z10) {
            this.f52788i = z10;
            l();
        }
    }

    public final void o() {
        boolean z10;
        Window window;
        if (!this.f52792r && !this.f52790p) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f52791q != z10) {
            this.f52791q = z10;
            Activity currentActivity = this.f52786d.getCurrentActivity();
            if (currentActivity != null) {
                w0.c(currentActivity.getWindow(), true ^ this.f52791q);
            }
            Activity currentActivity2 = this.f52786d.getCurrentActivity();
            if (currentActivity2 != null && (window = currentActivity2.getWindow()) != null) {
                window.clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        int i10 = this.f52787e;
        boolean z10 = this.f52795u;
        pm.a.c(aVar, a10, "onAttachedToWindow: instanceId=" + i10 + ", wasMounted=" + z10, null, 4, null);
        if (!this.f52795u) {
            this.f52795u = true;
        } else {
            f();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        l();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        int i10 = this.f52787e;
        pm.a.c(aVar, a10, "onDetachedFromWindow: instanceId=" + i10, null, 4, null);
        h();
    }

    public final void setActive(boolean z10) {
        pm.a aVar = pm.a.f45109a;
        String a10 = d.a();
        int i10 = this.f52787e;
        boolean z11 = this.f52792r;
        pm.a.c(aVar, a10, "setActive: instanceId=" + i10 + ", active=" + z10 + " (was " + z11 + ")", null, 4, null);
        this.f52792r = z10;
        if (z10) {
            j();
        } else {
            i();
        }
    }

    public final void setCallback$react_native_keyboard_controller_release(k kVar) {
        this.f52796v = kVar;
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        this.f52789o = z10;
        this.f52797w.e(z10);
    }

    public final void setPreserveEdgeToEdge(boolean z10) {
        this.f52790p = z10;
    }

    public final void setStatusBarTranslucent(boolean z10) {
        this.f52788i = z10;
    }
}
