package om;

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
import km.f;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import om.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends x0.b implements v, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f43254d;

    /* renamed from: e  reason: collision with root package name */
    private final View f43255e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f43256i;

    /* renamed from: o  reason: collision with root package name */
    private final l f43257o;

    /* renamed from: p  reason: collision with root package name */
    private final int f43258p;

    /* renamed from: q  reason: collision with root package name */
    private double f43259q;

    /* renamed from: r  reason: collision with root package name */
    private double f43260r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f43261s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f43262t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f43263u;

    /* renamed from: v  reason: collision with root package name */
    private int f43264v;

    /* renamed from: w  reason: collision with root package name */
    private int f43265w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f43266x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f43267y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f43268z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f43254d = eventPropagationView;
        this.f43255e = view;
        this.f43256i = themedReactContext;
        this.f43257o = config;
        this.f43258p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f43265w = -1;
        this.f43266x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: om.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f43268z = onGlobalFocusChangeListener;
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
            kVar.f43265w = ((EditText) view2).getId();
            if (kVar.f43261s && view != null) {
                ThemedReactContext themedReactContext = kVar.f43256i;
                int id2 = kVar.f43254d.getId();
                int i10 = kVar.f43258p;
                int id3 = kVar.f43254d.getId();
                f.a aVar = km.f.f31746f;
                lm.g.a(themedReactContext, id2, new km.f(i10, id3, aVar.d(), kVar.f43259q, 1.0d, 0, kVar.f43265w));
                lm.g.a(kVar.f43256i, kVar.f43254d.getId(), new km.f(kVar.f43258p, kVar.f43254d.getId(), aVar.a(), kVar.f43259q, 1.0d, 0, kVar.f43265w));
                lm.g.b(kVar.f43256i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f43259q));
                lm.g.b(kVar.f43256i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f43259q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f43255e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3607d;
        } else {
            i10 = 0;
        }
        if (!this.f43257o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3607d;
        }
        return kotlin.ranges.d.b(lm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f43264v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f43265w);
        EditText b10 = um.a.f51628a.b();
        if (b10 != null) {
            str = lm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", lm.g.c(this.f43256i));
        return createMap;
    }

    private final boolean j() {
        if (this.f43264v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat G = h0.G(this.f43255e);
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
        kVar.f43261s = kVar.k();
        kVar.f43260r = g10;
        if (kVar.f43266x.contains(x0Var)) {
            kVar.f43264v = 0;
            kVar.f43266x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f43256i;
        if (!kVar.f43261s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        lm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f43256i;
        int id2 = kVar.f43254d.getId();
        int i10 = kVar.f43258p;
        int id3 = kVar.f43254d.getId();
        f.a.EnumC0449a a10 = km.f.f31746f.a();
        if (!kVar.f43261s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        lm.g.a(themedReactContext2, id2, new km.f(i10, id3, a10, g10, d10, kVar.f43264v, kVar.f43265w));
        kVar.f43264v = 0;
        lm.g.d(kVar.f43256i, kVar.f43254d.getId());
    }

    private final void n(double d10) {
        this.f43264v = 0;
        lm.g.b(this.f43256i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = km.f.f31746f;
        for (f.a.EnumC0449a enumC0449a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            lm.g.a(this.f43256i, this.f43254d.getId(), new km.f(this.f43258p, this.f43254d.getId(), enumC0449a, d10, 1.0d, 0, this.f43265w));
        }
        lm.g.b(this.f43256i, "KeyboardController::keyboardDidShow", h(d10));
        lm.g.d(this.f43256i, this.f43254d.getId());
        this.f43259q = d10;
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
        pm.a aVar = pm.a.f45061a;
        pm.a.c(aVar, m.a(), "onApplyWindowInsets (eventView callback invoked)", null, 4, null);
        double g10 = g();
        if (this.f43261s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f43262t && !mm.a.f37219a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f43259q == g10) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (!z11 && !this.f43263u) {
            pm.a.c(aVar, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            pm.a.c(aVar, m.a(), "onApplyWindowInsets: " + this.f43259q + " -> " + g10, null, 4, null);
            g gVar = this.A;
            if (gVar != null) {
                gVar.l();
            }
            n(g10);
        }
        return insets;
    }

    @Override // om.n
    public void b(boolean z10) {
        this.f43267y = z10;
    }

    public final void e() {
        this.f43255e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f43268z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f43267y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (lm.j.a(animation) && !l()) {
            this.f43263u = false;
            this.f43262t = false;
            this.f43264v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: om.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f43255e.postDelayed(runnable, jm.b.f29953a.a());
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (lm.j.a(animation)) {
            this.f43263u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        f.a.EnumC0449a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (lm.j.a(x0Var) && !this.f43266x.contains(x0Var)) {
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
            Insets f10 = insets.f(this.f43257o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f43257o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f43257o.c()) {
                NONE = Insets.f3603e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3603e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3607d - b10.f3605b;
            double a10 = lm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f43259q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                pm.a.f(pm.a.f45061a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            pm.a aVar = pm.a.f45061a;
            String a11 = m.a();
            mm.a aVar2 = mm.a.f37219a;
            pm.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f43265w, null, 4, null);
            if (aVar2.a()) {
                c10 = km.f.f31746f.b();
            } else {
                c10 = km.f.f31746f.c();
            }
            lm.g.a(this.f43256i, this.f43254d.getId(), new km.f(this.f43258p, this.f43254d.getId(), c10, a10, d11, this.f43264v, this.f43265w));
        }
        return insets;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 animation, x0.a bounds) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!lm.j.a(animation) || l()) {
            return bounds;
        }
        boolean z11 = false;
        this.f43263u = false;
        this.f43262t = true;
        this.f43261s = k();
        this.f43264v = (int) animation.a();
        double g10 = g();
        if (this.f43261s) {
            this.f43259q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f43260r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f43261s && this.f43260r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f43266x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f43256i;
        if (!this.f43261s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        lm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        pm.a.c(pm.a.f45061a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f43265w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f43256i;
        int id2 = this.f43254d.getId();
        double d10 = 0.0d;
        int i10 = this.f43258p;
        int id3 = this.f43254d.getId();
        f.a.EnumC0449a d11 = km.f.f31746f.d();
        if (this.f43261s) {
            d10 = 1.0d;
        }
        lm.g.a(themedReactContext2, id2, new km.f(i10, id3, d11, g10, d10, this.f43264v, this.f43265w));
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
        this.f43261s = k10;
        this.f43260r = d12;
        this.f43262t = false;
        this.f43264v = 0;
        ThemedReactContext themedReactContext = this.f43256i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        lm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = km.f.f31746f;
        for (f.a.EnumC0449a enumC0449a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f43256i;
            int id2 = this.f43254d.getId();
            int i10 = this.f43258p;
            int id3 = this.f43254d.getId();
            if (!this.f43261s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            lm.g.a(themedReactContext2, id2, new km.f(i10, id3, enumC0449a, d12, d11, this.f43264v, this.f43265w));
        }
    }
}
