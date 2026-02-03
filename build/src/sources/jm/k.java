package jm;

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
import fm.f;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import jm.n;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends x0.b implements v, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f31811d;

    /* renamed from: e  reason: collision with root package name */
    private final View f31812e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f31813i;

    /* renamed from: o  reason: collision with root package name */
    private final l f31814o;

    /* renamed from: p  reason: collision with root package name */
    private final int f31815p;

    /* renamed from: q  reason: collision with root package name */
    private double f31816q;

    /* renamed from: r  reason: collision with root package name */
    private double f31817r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f31818s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f31819t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f31820u;

    /* renamed from: v  reason: collision with root package name */
    private int f31821v;

    /* renamed from: w  reason: collision with root package name */
    private int f31822w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f31823x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f31824y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f31825z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f31811d = eventPropagationView;
        this.f31812e = view;
        this.f31813i = themedReactContext;
        this.f31814o = config;
        this.f31815p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f31822w = -1;
        this.f31823x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: jm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f31825z = onGlobalFocusChangeListener;
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
            kVar.f31822w = ((EditText) view2).getId();
            if (kVar.f31818s && view != null) {
                ThemedReactContext themedReactContext = kVar.f31813i;
                int id2 = kVar.f31811d.getId();
                int i10 = kVar.f31815p;
                int id3 = kVar.f31811d.getId();
                f.a aVar = fm.f.f24064f;
                gm.g.a(themedReactContext, id2, new fm.f(i10, id3, aVar.d(), kVar.f31816q, 1.0d, 0, kVar.f31822w));
                gm.g.a(kVar.f31813i, kVar.f31811d.getId(), new fm.f(kVar.f31815p, kVar.f31811d.getId(), aVar.a(), kVar.f31816q, 1.0d, 0, kVar.f31822w));
                gm.g.b(kVar.f31813i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f31816q));
                gm.g.b(kVar.f31813i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f31816q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f31812e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3166d;
        } else {
            i10 = 0;
        }
        if (!this.f31814o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3166d;
        }
        return kotlin.ranges.d.b(gm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f31821v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f31822w);
        EditText b10 = pm.a.f46166a.b();
        if (b10 != null) {
            str = gm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", gm.g.c(this.f31813i));
        return createMap;
    }

    private final boolean j() {
        if (this.f31821v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat G = h0.G(this.f31812e);
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
        kVar.f31818s = kVar.k();
        kVar.f31817r = g10;
        if (kVar.f31823x.contains(x0Var)) {
            kVar.f31821v = 0;
            kVar.f31823x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f31813i;
        if (!kVar.f31818s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f31813i;
        int id2 = kVar.f31811d.getId();
        int i10 = kVar.f31815p;
        int id3 = kVar.f31811d.getId();
        f.a.EnumC0317a a10 = fm.f.f24064f.a();
        if (!kVar.f31818s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, a10, g10, d10, kVar.f31821v, kVar.f31822w));
        kVar.f31821v = 0;
        gm.g.d(kVar.f31813i, kVar.f31811d.getId());
    }

    private final void n(double d10) {
        this.f31821v = 0;
        gm.g.b(this.f31813i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = fm.f.f24064f;
        for (f.a.EnumC0317a enumC0317a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            gm.g.a(this.f31813i, this.f31811d.getId(), new fm.f(this.f31815p, this.f31811d.getId(), enumC0317a, d10, 1.0d, 0, this.f31822w));
        }
        gm.g.b(this.f31813i, "KeyboardController::keyboardDidShow", h(d10));
        gm.g.d(this.f31813i, this.f31811d.getId());
        this.f31816q = d10;
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
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        double g10 = g();
        boolean z13 = false;
        if (this.f31818s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f31819t && !hm.a.f27070a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f31816q == g10) {
            z13 = true;
        }
        if (!z11 && !this.f31820u) {
            km.a.c(km.a.f32427a, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            km.a.c(km.a.f32427a, m.a(), "onApplyWindowInsets: " + this.f31816q + " -> " + g10, null, 4, null);
            g gVar = this.A;
            if (gVar != null) {
                gVar.l();
            }
            n(g10);
        }
        return insets;
    }

    @Override // jm.n
    public void b(boolean z10) {
        this.f31824y = z10;
    }

    public final void e() {
        this.f31812e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f31825z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f31824y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (gm.j.a(animation) && !l()) {
            this.f31820u = false;
            this.f31819t = false;
            this.f31821v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: jm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f31812e.postDelayed(runnable, em.b.f21645a.a());
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (gm.j.a(animation)) {
            this.f31820u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        f.a.EnumC0317a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (gm.j.a(x0Var) && !this.f31823x.contains(x0Var)) {
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
            Insets f10 = insets.f(this.f31814o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f31814o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f31814o.c()) {
                NONE = Insets.f3162e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3162e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3166d - b10.f3164b;
            double a10 = gm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f31816q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                km.a.f(km.a.f32427a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            km.a aVar = km.a.f32427a;
            String a11 = m.a();
            hm.a aVar2 = hm.a.f27070a;
            km.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f31822w, null, 4, null);
            if (aVar2.a()) {
                c10 = fm.f.f24064f.b();
            } else {
                c10 = fm.f.f24064f.c();
            }
            gm.g.a(this.f31813i, this.f31811d.getId(), new fm.f(this.f31815p, this.f31811d.getId(), c10, a10, d11, this.f31821v, this.f31822w));
        }
        return insets;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 animation, x0.a bounds) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!gm.j.a(animation) || l()) {
            return bounds;
        }
        boolean z11 = false;
        this.f31820u = false;
        this.f31819t = true;
        this.f31818s = k();
        this.f31821v = (int) animation.a();
        double g10 = g();
        if (this.f31818s) {
            this.f31816q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f31817r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f31818s && this.f31817r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f31823x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f31813i;
        if (!this.f31818s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        km.a.c(km.a.f32427a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f31822w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f31813i;
        int id2 = this.f31811d.getId();
        double d10 = 0.0d;
        int i10 = this.f31815p;
        int id3 = this.f31811d.getId();
        f.a.EnumC0317a d11 = fm.f.f24064f.d();
        if (this.f31818s) {
            d10 = 1.0d;
        }
        gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, d11, g10, d10, this.f31821v, this.f31822w));
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
        this.f31818s = k10;
        this.f31817r = d12;
        this.f31819t = false;
        this.f31821v = 0;
        ThemedReactContext themedReactContext = this.f31813i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = fm.f.f24064f;
        for (f.a.EnumC0317a enumC0317a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f31813i;
            int id2 = this.f31811d.getId();
            int i10 = this.f31815p;
            int id3 = this.f31811d.getId();
            if (!this.f31818s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, enumC0317a, d12, d11, this.f31821v, this.f31822w));
        }
    }
}
