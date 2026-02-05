package mm;

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
import im.f;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import mm.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends x0.b implements v, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f38773d;

    /* renamed from: e  reason: collision with root package name */
    private final View f38774e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f38775i;

    /* renamed from: o  reason: collision with root package name */
    private final l f38776o;

    /* renamed from: p  reason: collision with root package name */
    private final int f38777p;

    /* renamed from: q  reason: collision with root package name */
    private double f38778q;

    /* renamed from: r  reason: collision with root package name */
    private double f38779r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f38780s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f38781t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f38782u;

    /* renamed from: v  reason: collision with root package name */
    private int f38783v;

    /* renamed from: w  reason: collision with root package name */
    private int f38784w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f38785x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f38786y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f38787z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f38773d = eventPropagationView;
        this.f38774e = view;
        this.f38775i = themedReactContext;
        this.f38776o = config;
        this.f38777p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f38784w = -1;
        this.f38785x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: mm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f38787z = onGlobalFocusChangeListener;
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
            kVar.f38784w = ((EditText) view2).getId();
            if (kVar.f38780s && view != null) {
                ThemedReactContext themedReactContext = kVar.f38775i;
                int id2 = kVar.f38773d.getId();
                int i10 = kVar.f38777p;
                int id3 = kVar.f38773d.getId();
                f.a aVar = im.f.f27456f;
                jm.g.a(themedReactContext, id2, new im.f(i10, id3, aVar.d(), kVar.f38778q, 1.0d, 0, kVar.f38784w));
                jm.g.a(kVar.f38775i, kVar.f38773d.getId(), new im.f(kVar.f38777p, kVar.f38773d.getId(), aVar.a(), kVar.f38778q, 1.0d, 0, kVar.f38784w));
                jm.g.b(kVar.f38775i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f38778q));
                jm.g.b(kVar.f38775i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f38778q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f38774e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3278d;
        } else {
            i10 = 0;
        }
        if (!this.f38776o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3278d;
        }
        return kotlin.ranges.d.b(jm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f38783v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f38784w);
        EditText b10 = sm.a.f49782a.b();
        if (b10 != null) {
            str = jm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", jm.g.c(this.f38775i));
        return createMap;
    }

    private final boolean j() {
        if (this.f38783v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat G = h0.G(this.f38774e);
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
        kVar.f38780s = kVar.k();
        kVar.f38779r = g10;
        if (kVar.f38785x.contains(x0Var)) {
            kVar.f38783v = 0;
            kVar.f38785x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f38775i;
        if (!kVar.f38780s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        jm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f38775i;
        int id2 = kVar.f38773d.getId();
        int i10 = kVar.f38777p;
        int id3 = kVar.f38773d.getId();
        f.a.EnumC0384a a10 = im.f.f27456f.a();
        if (!kVar.f38780s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        jm.g.a(themedReactContext2, id2, new im.f(i10, id3, a10, g10, d10, kVar.f38783v, kVar.f38784w));
        kVar.f38783v = 0;
        jm.g.d(kVar.f38775i, kVar.f38773d.getId());
    }

    private final void n(double d10) {
        this.f38783v = 0;
        jm.g.b(this.f38775i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = im.f.f27456f;
        for (f.a.EnumC0384a enumC0384a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            jm.g.a(this.f38775i, this.f38773d.getId(), new im.f(this.f38777p, this.f38773d.getId(), enumC0384a, d10, 1.0d, 0, this.f38784w));
        }
        jm.g.b(this.f38775i, "KeyboardController::keyboardDidShow", h(d10));
        jm.g.d(this.f38775i, this.f38773d.getId());
        this.f38778q = d10;
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
        nm.a aVar = nm.a.f41373a;
        nm.a.c(aVar, m.a(), "onApplyWindowInsets (eventView callback invoked)", null, 4, null);
        double g10 = g();
        if (this.f38780s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f38781t && !km.a.f31922a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f38778q == g10) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (!z11 && !this.f38782u) {
            nm.a.c(aVar, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            nm.a.c(aVar, m.a(), "onApplyWindowInsets: " + this.f38778q + " -> " + g10, null, 4, null);
            g gVar = this.A;
            if (gVar != null) {
                gVar.l();
            }
            n(g10);
        }
        return insets;
    }

    @Override // mm.n
    public void b(boolean z10) {
        this.f38786y = z10;
    }

    public final void e() {
        this.f38774e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f38787z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f38786y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (jm.j.a(animation) && !l()) {
            this.f38782u = false;
            this.f38781t = false;
            this.f38783v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: mm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f38774e.postDelayed(runnable, hm.b.f25957a.a());
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (jm.j.a(animation)) {
            this.f38782u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        f.a.EnumC0384a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (jm.j.a(x0Var) && !this.f38785x.contains(x0Var)) {
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
            Insets f10 = insets.f(this.f38776o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f38776o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f38776o.c()) {
                NONE = Insets.f3274e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3274e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3278d - b10.f3276b;
            double a10 = jm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f38778q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                nm.a.f(nm.a.f41373a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            nm.a aVar = nm.a.f41373a;
            String a11 = m.a();
            km.a aVar2 = km.a.f31922a;
            nm.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f38784w, null, 4, null);
            if (aVar2.a()) {
                c10 = im.f.f27456f.b();
            } else {
                c10 = im.f.f27456f.c();
            }
            jm.g.a(this.f38775i, this.f38773d.getId(), new im.f(this.f38777p, this.f38773d.getId(), c10, a10, d11, this.f38783v, this.f38784w));
        }
        return insets;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 animation, x0.a bounds) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!jm.j.a(animation) || l()) {
            return bounds;
        }
        boolean z11 = false;
        this.f38782u = false;
        this.f38781t = true;
        this.f38780s = k();
        this.f38783v = (int) animation.a();
        double g10 = g();
        if (this.f38780s) {
            this.f38778q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f38779r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f38780s && this.f38779r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f38785x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f38775i;
        if (!this.f38780s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        jm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        nm.a.c(nm.a.f41373a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f38784w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f38775i;
        int id2 = this.f38773d.getId();
        double d10 = 0.0d;
        int i10 = this.f38777p;
        int id3 = this.f38773d.getId();
        f.a.EnumC0384a d11 = im.f.f27456f.d();
        if (this.f38780s) {
            d10 = 1.0d;
        }
        jm.g.a(themedReactContext2, id2, new im.f(i10, id3, d11, g10, d10, this.f38783v, this.f38784w));
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
        this.f38780s = k10;
        this.f38779r = d12;
        this.f38781t = false;
        this.f38783v = 0;
        ThemedReactContext themedReactContext = this.f38775i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        jm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = im.f.f27456f;
        for (f.a.EnumC0384a enumC0384a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f38775i;
            int id2 = this.f38773d.getId();
            int i10 = this.f38777p;
            int id3 = this.f38773d.getId();
            if (!this.f38780s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            jm.g.a(themedReactContext2, id2, new im.f(i10, id3, enumC0384a, d12, d11, this.f38783v, this.f38784w));
        }
    }
}
