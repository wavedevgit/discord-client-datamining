package pm;

import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.EditText;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.x0;
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
import lm.f;
import pm.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends x0.b implements v, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f44360d;

    /* renamed from: e  reason: collision with root package name */
    private final View f44361e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f44362i;

    /* renamed from: o  reason: collision with root package name */
    private final l f44363o;

    /* renamed from: p  reason: collision with root package name */
    private final int f44364p;

    /* renamed from: q  reason: collision with root package name */
    private double f44365q;

    /* renamed from: r  reason: collision with root package name */
    private double f44366r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f44367s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f44368t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44369u;

    /* renamed from: v  reason: collision with root package name */
    private int f44370v;

    /* renamed from: w  reason: collision with root package name */
    private int f44371w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f44372x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f44373y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f44374z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f44360d = eventPropagationView;
        this.f44361e = view;
        this.f44362i = themedReactContext;
        this.f44363o = config;
        this.f44364p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f44371w = -1;
        this.f44372x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: pm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f44374z = onGlobalFocusChangeListener;
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
            kVar.f44371w = ((EditText) view2).getId();
            if (kVar.f44367s && view != null) {
                ThemedReactContext themedReactContext = kVar.f44362i;
                int id2 = kVar.f44360d.getId();
                int i10 = kVar.f44364p;
                int id3 = kVar.f44360d.getId();
                f.a aVar = lm.f.f36014f;
                mm.g.a(themedReactContext, id2, new lm.f(i10, id3, aVar.d(), kVar.f44365q, 1.0d, 0, kVar.f44371w));
                mm.g.a(kVar.f44362i, kVar.f44360d.getId(), new lm.f(kVar.f44364p, kVar.f44360d.getId(), aVar.a(), kVar.f44365q, 1.0d, 0, kVar.f44371w));
                mm.g.b(kVar.f44362i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f44365q));
                mm.g.b(kVar.f44362i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f44365q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f44361e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3304d;
        } else {
            i10 = 0;
        }
        if (!this.f44363o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3304d;
        }
        return kotlin.ranges.d.b(mm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f44370v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f44371w);
        EditText b10 = vm.a.f52536a.b();
        if (b10 != null) {
            str = mm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", mm.g.c(this.f44362i));
        return createMap;
    }

    private final boolean j() {
        if (this.f44370v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat G = h0.G(this.f44361e);
        if (G != null) {
            return G.u(WindowInsetsCompat.p.c());
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(k kVar, x0 x0Var) {
        String str;
        double d10;
        double g10 = kVar.g();
        kVar.f44367s = kVar.k();
        kVar.f44366r = g10;
        if (kVar.f44372x.contains(x0Var)) {
            kVar.f44370v = 0;
            kVar.f44372x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f44362i;
        if (!kVar.f44367s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        mm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f44362i;
        int id2 = kVar.f44360d.getId();
        int i10 = kVar.f44364p;
        int id3 = kVar.f44360d.getId();
        f.a.EnumC0511a a10 = lm.f.f36014f.a();
        if (!kVar.f44367s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        mm.g.a(themedReactContext2, id2, new lm.f(i10, id3, a10, g10, d10, kVar.f44370v, kVar.f44371w));
        kVar.f44370v = 0;
        mm.g.d(kVar.f44362i, kVar.f44360d.getId());
    }

    private final void n(double d10) {
        this.f44370v = 0;
        mm.g.b(this.f44362i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = lm.f.f36014f;
        for (f.a.EnumC0511a enumC0511a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            mm.g.a(this.f44362i, this.f44360d.getId(), new lm.f(this.f44364p, this.f44360d.getId(), enumC0511a, d10, 1.0d, 0, this.f44371w));
        }
        mm.g.b(this.f44362i, "KeyboardController::keyboardDidShow", h(d10));
        mm.g.d(this.f44362i, this.f44360d.getId());
        this.f44365q = d10;
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

    @Override // androidx.core.view.v
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        qm.a aVar = qm.a.f46623a;
        qm.a.c(aVar, m.a(), "onApplyWindowInsets (eventView callback invoked)", null, 4, null);
        double g10 = g();
        if (this.f44367s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f44368t && !nm.a.f38952a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f44365q == g10) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (!z11 && !this.f44369u) {
            qm.a.c(aVar, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            qm.a.c(aVar, m.a(), "onApplyWindowInsets: " + this.f44365q + " -> " + g10, null, 4, null);
            g gVar = this.A;
            if (gVar != null) {
                gVar.l();
            }
            n(g10);
        }
        return insets;
    }

    @Override // pm.n
    public void b(boolean z10) {
        this.f44373y = z10;
    }

    public final void e() {
        this.f44361e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f44374z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f44373y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (mm.j.a(animation) && !l()) {
            this.f44369u = false;
            this.f44368t = false;
            this.f44370v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: pm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f44361e.postDelayed(runnable, km.b.f30952a.a());
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (mm.j.a(animation)) {
            this.f44369u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        f.a.EnumC0511a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (mm.j.a(x0Var) && !this.f44372x.contains(x0Var)) {
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
            Insets f10 = insets.f(this.f44363o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f44363o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f44363o.c()) {
                NONE = Insets.f3300e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3300e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3304d - b10.f3302b;
            double a10 = mm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f44365q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                qm.a.f(qm.a.f46623a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            qm.a aVar = qm.a.f46623a;
            String a11 = m.a();
            nm.a aVar2 = nm.a.f38952a;
            qm.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f44371w, null, 4, null);
            if (aVar2.a()) {
                c10 = lm.f.f36014f.b();
            } else {
                c10 = lm.f.f36014f.c();
            }
            mm.g.a(this.f44362i, this.f44360d.getId(), new lm.f(this.f44364p, this.f44360d.getId(), c10, a10, d11, this.f44370v, this.f44371w));
        }
        return insets;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 animation, x0.a bounds) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!mm.j.a(animation) || l()) {
            return bounds;
        }
        boolean z11 = false;
        this.f44369u = false;
        this.f44368t = true;
        this.f44367s = k();
        this.f44370v = (int) animation.a();
        double g10 = g();
        if (this.f44367s) {
            this.f44365q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f44366r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f44367s && this.f44366r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f44372x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f44362i;
        if (!this.f44367s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        mm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        qm.a.c(qm.a.f46623a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f44371w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f44362i;
        int id2 = this.f44360d.getId();
        double d10 = 0.0d;
        int i10 = this.f44364p;
        int id3 = this.f44360d.getId();
        f.a.EnumC0511a d11 = lm.f.f36014f.d();
        if (this.f44367s) {
            d10 = 1.0d;
        }
        mm.g.a(themedReactContext2, id2, new lm.f(i10, id3, d11, g10, d10, this.f44370v, this.f44371w));
        x0.a onStart = super.onStart(animation, bounds);
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
        this.f44367s = k10;
        this.f44366r = d12;
        this.f44368t = false;
        this.f44370v = 0;
        ThemedReactContext themedReactContext = this.f44362i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        mm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = lm.f.f36014f;
        for (f.a.EnumC0511a enumC0511a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f44362i;
            int id2 = this.f44360d.getId();
            int i10 = this.f44364p;
            int id3 = this.f44360d.getId();
            if (!this.f44367s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            mm.g.a(themedReactContext2, id2, new lm.f(i10, id3, enumC0511a, d12, d11, this.f44370v, this.f44371w));
        }
    }
}
