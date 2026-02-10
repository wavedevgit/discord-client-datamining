package rm;

import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.EditText;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
import androidx.core.view.y0;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import nm.f;
import rm.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends y0.b implements w, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f47488d;

    /* renamed from: e  reason: collision with root package name */
    private final View f47489e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f47490i;

    /* renamed from: o  reason: collision with root package name */
    private final l f47491o;

    /* renamed from: p  reason: collision with root package name */
    private final int f47492p;

    /* renamed from: q  reason: collision with root package name */
    private double f47493q;

    /* renamed from: r  reason: collision with root package name */
    private double f47494r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f47495s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f47496t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f47497u;

    /* renamed from: v  reason: collision with root package name */
    private int f47498v;

    /* renamed from: w  reason: collision with root package name */
    private int f47499w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f47500x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f47501y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f47502z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f47488d = eventPropagationView;
        this.f47489e = view;
        this.f47490i = themedReactContext;
        this.f47491o = config;
        this.f47492p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f47499w = -1;
        this.f47500x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: rm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f47502z = onGlobalFocusChangeListener;
        if ((config.a() & config.d()) == 0) {
            this.A = new g(view, eventPropagationView, themedReactContext);
            view.getViewTreeObserver().addOnGlobalFocusChangeListener(onGlobalFocusChangeListener);
            return;
        }
        throw new IllegalArgumentException("persistentInsetTypes and deferredInsetTypes can not contain any of  same WindowInsetsCompat.Type values");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(k kVar, View view, View view2) {
        if (view2 instanceof EditText) {
            kVar.f47499w = ((EditText) view2).getId();
            if (kVar.f47495s && view != null) {
                ThemedReactContext themedReactContext = kVar.f47490i;
                int id2 = kVar.f47488d.getId();
                int i10 = kVar.f47492p;
                int id3 = kVar.f47488d.getId();
                f.a aVar = nm.f.f37984f;
                om.g.a(themedReactContext, id2, new nm.f(i10, id3, aVar.d(), kVar.f47493q, 1.0d, 0, kVar.f47499w));
                om.g.a(kVar.f47490i, kVar.f47488d.getId(), new nm.f(kVar.f47492p, kVar.f47488d.getId(), aVar.a(), kVar.f47493q, 1.0d, 0, kVar.f47499w));
                om.g.b(kVar.f47490i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f47493q));
                om.g.b(kVar.f47490i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f47493q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat F = i0.F(this.f47489e);
        int i11 = 0;
        if (F != null && (f11 = F.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3307d;
        } else {
            i10 = 0;
        }
        if (!this.f47491o.c() && F != null && (f10 = F.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3307d;
        }
        return kotlin.ranges.d.b(om.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f47498v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f47499w);
        EditText b10 = xm.a.f54932a.b();
        if (b10 != null) {
            str = om.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", om.g.c(this.f47490i));
        return createMap;
    }

    private final boolean j() {
        if (this.f47498v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat F = i0.F(this.f47489e);
        if (F != null) {
            return F.u(WindowInsetsCompat.p.c());
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(k kVar, y0 y0Var) {
        String str;
        double d10;
        double g10 = kVar.g();
        kVar.f47495s = kVar.k();
        kVar.f47494r = g10;
        if (kVar.f47500x.contains(y0Var)) {
            kVar.f47498v = 0;
            kVar.f47500x.remove(y0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f47490i;
        if (!kVar.f47495s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f47490i;
        int id2 = kVar.f47488d.getId();
        int i10 = kVar.f47492p;
        int id3 = kVar.f47488d.getId();
        f.a.EnumC0535a a10 = nm.f.f37984f.a();
        if (!kVar.f47495s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        om.g.a(themedReactContext2, id2, new nm.f(i10, id3, a10, g10, d10, kVar.f47498v, kVar.f47499w));
        kVar.f47498v = 0;
        om.g.d(kVar.f47490i, kVar.f47488d.getId());
    }

    private final void n(double d10) {
        this.f47498v = 0;
        om.g.b(this.f47490i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = nm.f.f37984f;
        for (f.a.EnumC0535a enumC0535a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            om.g.a(this.f47490i, this.f47488d.getId(), new nm.f(this.f47492p, this.f47488d.getId(), enumC0535a, d10, 1.0d, 0, this.f47499w));
        }
        om.g.b(this.f47490i, "KeyboardController::keyboardDidShow", h(d10));
        om.g.d(this.f47490i, this.f47488d.getId());
        this.f47493q = d10;
    }

    public static /* synthetic */ void q(k kVar, Double d10, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = null;
        }
        if ((i10 & 2) != 0) {
            bool = null;
        }
        kVar.p(d10, bool);
    }

    @Override // androidx.core.view.w
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        sm.a aVar = sm.a.f48171a;
        sm.a.c(aVar, m.a(), "onApplyWindowInsets (eventView callback invoked)", null, 4, null);
        double g10 = g();
        if (this.f47495s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f47496t && !pm.a.f42785a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f47493q == g10) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (!z11 && !this.f47497u) {
            sm.a.c(aVar, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            sm.a.c(aVar, m.a(), "onApplyWindowInsets: " + this.f47493q + " -> " + g10, null, 4, null);
            g gVar = this.A;
            if (gVar != null) {
                gVar.l();
            }
            n(g10);
        }
        return insets;
    }

    @Override // rm.n
    public void b(boolean z10) {
        this.f47501y = z10;
    }

    public final void e() {
        this.f47489e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f47502z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f47501y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.y0.b
    public void onEnd(final y0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (om.j.a(animation) && !l()) {
            this.f47497u = false;
            this.f47496t = false;
            this.f47498v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: rm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f47489e.postDelayed(runnable, mm.b.f36553a.a());
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.y0.b
    public void onPrepare(y0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (om.j.a(animation)) {
            this.f47497u = true;
        }
    }

    @Override // androidx.core.view.y0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        f.a.EnumC0535a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                y0 y0Var = (y0) obj;
                if (om.j.a(y0Var) && !this.f47500x.contains(y0Var)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        if (obj == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!l() && !z10) {
            Insets f10 = insets.f(this.f47491o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f47491o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f47491o.c()) {
                NONE = Insets.f3303e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3303e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3307d - b10.f3305b;
            double a10 = om.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f47493q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                sm.a.f(sm.a.f48171a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            sm.a aVar = sm.a.f48171a;
            String a11 = m.a();
            pm.a aVar2 = pm.a.f42785a;
            sm.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f47499w, null, 4, null);
            if (aVar2.a()) {
                c10 = nm.f.f37984f.b();
            } else {
                c10 = nm.f.f37984f.c();
            }
            om.g.a(this.f47490i, this.f47488d.getId(), new nm.f(this.f47492p, this.f47488d.getId(), c10, a10, d11, this.f47498v, this.f47499w));
        }
        return insets;
    }

    @Override // androidx.core.view.y0.b
    public y0.a onStart(y0 animation, y0.a bounds) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!om.j.a(animation) || l()) {
            return bounds;
        }
        boolean z11 = false;
        this.f47497u = false;
        this.f47496t = true;
        this.f47495s = k();
        this.f47498v = (int) animation.a();
        double g10 = g();
        if (this.f47495s) {
            this.f47493q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f47494r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47495s && this.f47494r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f47500x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f47490i;
        if (!this.f47495s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        sm.a.c(sm.a.f48171a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f47499w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f47490i;
        int id2 = this.f47488d.getId();
        double d10 = 0.0d;
        int i10 = this.f47492p;
        int id3 = this.f47488d.getId();
        f.a.EnumC0535a d11 = nm.f.f37984f.d();
        if (this.f47495s) {
            d10 = 1.0d;
        }
        om.g.a(themedReactContext2, id2, new nm.f(i10, id3, d11, g10, d10, this.f47498v, this.f47499w));
        y0.a onStart = super.onStart(animation, bounds);
        Intrinsics.checkNotNullExpressionValue(onStart, "onStart(...)");
        return onStart;
    }

    public final void p(Double d10, Boolean bool) {
        double g10;
        boolean k10;
        String str;
        double d11;
        if (d10 != null) {
            g10 = d10.doubleValue();
        } else {
            g10 = g();
        }
        double d12 = g10;
        if (bool != null) {
            k10 = bool.booleanValue();
        } else {
            k10 = k();
        }
        this.f47495s = k10;
        this.f47494r = d12;
        this.f47496t = false;
        this.f47498v = 0;
        ThemedReactContext themedReactContext = this.f47490i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = nm.f.f37984f;
        for (f.a.EnumC0535a enumC0535a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f47490i;
            int id2 = this.f47488d.getId();
            int i10 = this.f47492p;
            int id3 = this.f47488d.getId();
            if (!this.f47495s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            om.g.a(themedReactContext2, id2, new nm.f(i10, id3, enumC0535a, d12, d11, this.f47498v, this.f47499w));
        }
    }
}
