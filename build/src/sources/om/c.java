package om;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import fm.g;
import fm.h;
import fm.i;
import im.k;
import im.l;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends ReactViewGroup {

    /* renamed from: w  reason: collision with root package name */
    public static final a f44420w = new a(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f44421x = Reflection.getOrCreateKotlinClass(c.class).getSimpleName();

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f44422d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f44423e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f44424i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f44425o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f44426p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f44427q;

    /* renamed from: r  reason: collision with root package name */
    private ReactViewGroup f44428r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f44429s;

    /* renamed from: t  reason: collision with root package name */
    private k f44430t;

    /* renamed from: u  reason: collision with root package name */
    private final l f44431u;

    /* renamed from: v  reason: collision with root package name */
    private final lm.b f44432v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a() {
            return c.f44421x;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function0 {
        b(Object obj) {
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
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f44422d = reactContext;
        l lVar = new l(WindowInsetsCompat.p.h(), WindowInsetsCompat.p.c(), 1, this.f44424i);
        this.f44431u = lVar;
        this.f44432v = new lm.b(this, reactContext, lVar, new b(this));
        g.e(reactContext);
        setTag(f44421x);
    }

    private final void g() {
        o();
        k();
        this.f44432v.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final k getKeyboardCallback() {
        return this.f44430t;
    }

    private final void h() {
        o();
        n();
        this.f44432v.c();
    }

    private final void j() {
        o();
        i.c(this);
    }

    private final void k() {
        k kVar = this.f44430t;
        if (kVar != null) {
            kVar.e();
        }
        final ReactViewGroup reactViewGroup = this.f44428r;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: om.b
            @Override // java.lang.Runnable
            public final void run() {
                c.l(ReactViewGroup.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(ReactViewGroup reactViewGroup) {
        h.a(reactViewGroup);
    }

    private final void n() {
        if (this.f44422d.getCurrentActivity() != null) {
            this.f44428r = new ReactViewGroup(getContext());
            ViewGroup a10 = fm.f.a(this.f44422d);
            if (a10 != null) {
                a10.addView(this.f44428r);
            }
            k kVar = new k(this, this, this.f44422d, this.f44431u);
            this.f44430t = kVar;
            ReactViewGroup reactViewGroup = this.f44428r;
            if (reactViewGroup != null) {
                h0.L0(reactViewGroup, kVar);
                h0.D0(reactViewGroup, this.f44430t);
                i.c(reactViewGroup);
                return;
            }
            return;
        }
        jm.a.e(jm.a.f32253a, d.a(), "Can not setup keyboard animation listener, since `currentActivity` is null", null, 4, null);
    }

    private final void o() {
        View b10 = fm.f.b(this.f44422d);
        if (b10 != null) {
            h0.D0(b10, new v() { // from class: om.a
                @Override // androidx.core.view.v
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    WindowInsetsCompat p10;
                    p10 = c.p(c.this, view, windowInsetsCompat);
                    return p10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat p(c cVar, View v10, WindowInsetsCompat insets) {
        boolean z10;
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        ViewGroup a10 = fm.f.a(cVar.f44422d);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        boolean z11 = cVar.f44426p;
        boolean z12 = true;
        int i12 = 0;
        if (z11 && !cVar.f44423e) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z11 && !cVar.f44424i) {
            z12 = false;
        }
        Insets f10 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        int i13 = f10.f3150a;
        if (z10) {
            i10 = 0;
        } else {
            i10 = f11.f3151b;
        }
        int i14 = f10.f3152c;
        if (z12) {
            i11 = 0;
        } else {
            i11 = f10.f3153d;
        }
        layoutParams.setMargins(i13, i10, i14, i11);
        if (a10 != null) {
            a10.setLayoutParams(layoutParams);
        }
        WindowInsetsCompat Z = h0.Z(v10, insets);
        Intrinsics.checkNotNullExpressionValue(Z, "onApplyWindowInsets(...)");
        int o10 = Z.o();
        if (!cVar.f44423e) {
            i12 = Z.q();
        }
        return Z.v(o10, i12, Z.p(), Z.n());
    }

    public final void i(boolean z10) {
        if (this.f44426p && this.f44423e != z10) {
            this.f44423e = z10;
            j();
        }
    }

    public final void m() {
        boolean z10;
        if (!this.f44426p && !this.f44425o) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f44427q != z10) {
            this.f44427q = z10;
            Activity currentActivity = this.f44422d.getCurrentActivity();
            if (currentActivity != null) {
                w0.c(currentActivity.getWindow(), true ^ this.f44427q);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!this.f44429s) {
            this.f44429s = true;
        } else {
            n();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        j();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        k();
    }

    public final void setActive(boolean z10) {
        this.f44426p = z10;
        if (z10) {
            h();
        } else {
            g();
        }
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        this.f44424i = z10;
        this.f44431u.e(z10);
    }

    public final void setPreserveEdgeToEdge(boolean z10) {
        this.f44425o = z10;
    }

    public final void setStatusBarTranslucent(boolean z10) {
        this.f44423e = z10;
    }
}
