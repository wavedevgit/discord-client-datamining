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
    private final ReactViewGroup f48057d;

    /* renamed from: e  reason: collision with root package name */
    private final View f48058e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f48059i;

    /* renamed from: o  reason: collision with root package name */
    private final l f48060o;

    /* renamed from: p  reason: collision with root package name */
    private final int f48061p;

    /* renamed from: q  reason: collision with root package name */
    private double f48062q;

    /* renamed from: r  reason: collision with root package name */
    private double f48063r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f48064s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f48065t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f48066u;

    /* renamed from: v  reason: collision with root package name */
    private int f48067v;

    /* renamed from: w  reason: collision with root package name */
    private int f48068w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f48069x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f48070y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f48071z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f48057d = eventPropagationView;
        this.f48058e = view;
        this.f48059i = themedReactContext;
        this.f48060o = config;
        this.f48061p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f48068w = -1;
        this.f48069x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: rm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f48071z = onGlobalFocusChangeListener;
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
            kVar.f48068w = ((EditText) view2).getId();
            if (kVar.f48064s && view != null) {
                ThemedReactContext themedReactContext = kVar.f48059i;
                int id2 = kVar.f48057d.getId();
                int i10 = kVar.f48061p;
                int id3 = kVar.f48057d.getId();
                f.a aVar = nm.f.f38553f;
                om.g.a(themedReactContext, id2, new nm.f(i10, id3, aVar.d(), kVar.f48062q, 1.0d, 0, kVar.f48068w));
                om.g.a(kVar.f48059i, kVar.f48057d.getId(), new nm.f(kVar.f48061p, kVar.f48057d.getId(), aVar.a(), kVar.f48062q, 1.0d, 0, kVar.f48068w));
                om.g.b(kVar.f48059i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f48062q));
                om.g.b(kVar.f48059i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f48062q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat F = i0.F(this.f48058e);
        int i11 = 0;
        if (F != null && (f11 = F.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3307d;
        } else {
            i10 = 0;
        }
        if (!this.f48060o.c() && F != null && (f10 = F.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3307d;
        }
        return kotlin.ranges.d.b(om.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f48067v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f48068w);
        EditText b10 = xm.a.f55501a.b();
        if (b10 != null) {
            str = om.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", om.g.c(this.f48059i));
        return createMap;
    }

    private final boolean j() {
        if (this.f48067v == -1) {
            return true;
        }
        return false;
    }

    private final boolean k() {
        WindowInsetsCompat F = i0.F(this.f48058e);
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
        kVar.f48064s = kVar.k();
        kVar.f48063r = g10;
        if (kVar.f48069x.contains(y0Var)) {
            kVar.f48067v = 0;
            kVar.f48069x.remove(y0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f48059i;
        if (!kVar.f48064s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f48059i;
        int id2 = kVar.f48057d.getId();
        int i10 = kVar.f48061p;
        int id3 = kVar.f48057d.getId();
        f.a.EnumC0535a a10 = nm.f.f38553f.a();
        if (!kVar.f48064s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        om.g.a(themedReactContext2, id2, new nm.f(i10, id3, a10, g10, d10, kVar.f48067v, kVar.f48068w));
        kVar.f48067v = 0;
        om.g.d(kVar.f48059i, kVar.f48057d.getId());
    }

    private final void n(double d10) {
        this.f48067v = 0;
        om.g.b(this.f48059i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = nm.f.f38553f;
        for (f.a.EnumC0535a enumC0535a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            om.g.a(this.f48059i, this.f48057d.getId(), new nm.f(this.f48061p, this.f48057d.getId(), enumC0535a, d10, 1.0d, 0, this.f48068w));
        }
        om.g.b(this.f48059i, "KeyboardController::keyboardDidShow", h(d10));
        om.g.d(this.f48059i, this.f48057d.getId());
        this.f48062q = d10;
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
        sm.a aVar = sm.a.f48740a;
        sm.a.c(aVar, m.a(), "onApplyWindowInsets (eventView callback invoked)", null, 4, null);
        double g10 = g();
        if (this.f48064s && k()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f48065t && !pm.a.f43354a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f48062q == g10) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (!z11 && !this.f48066u) {
            sm.a.c(aVar, m.a(), "IME changed without animation – sending synthetic events", null, 4, null);
            p(Double.valueOf(g10), Boolean.valueOf(k()));
        }
        if (z12 && !z13 && !m.b()) {
            sm.a.c(aVar, m.a(), "onApplyWindowInsets: " + this.f48062q + " -> " + g10, null, 4, null);
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
        this.f48070y = z10;
    }

    public final void e() {
        this.f48058e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f48071z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public final g i() {
        return this.A;
    }

    public boolean l() {
        return this.f48070y;
    }

    public void o(boolean z10) {
        n.a.a(this, z10);
    }

    @Override // androidx.core.view.y0.b
    public void onEnd(final y0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (om.j.a(animation) && !l()) {
            this.f48066u = false;
            this.f48065t = false;
            this.f48067v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: rm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.m(k.this, animation);
                }
            };
            if (j()) {
                this.f48058e.postDelayed(runnable, mm.b.f37122a.a());
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
            this.f48066u = true;
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
                if (om.j.a(y0Var) && !this.f48069x.contains(y0Var)) {
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
            Insets f10 = insets.f(this.f48060o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f48060o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f48060o.c()) {
                NONE = Insets.f3303e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3303e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3307d - b10.f3305b;
            double a10 = om.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f48062q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                sm.a.f(sm.a.f48740a, m.a(), "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            sm.a aVar = sm.a.f48740a;
            String a11 = m.a();
            pm.a aVar2 = pm.a.f43354a;
            sm.a.c(aVar, a11, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar2.a() + " " + this.f48068w, null, 4, null);
            if (aVar2.a()) {
                c10 = nm.f.f38553f.b();
            } else {
                c10 = nm.f.f38553f.c();
            }
            om.g.a(this.f48059i, this.f48057d.getId(), new nm.f(this.f48061p, this.f48057d.getId(), c10, a10, d11, this.f48067v, this.f48068w));
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
        this.f48066u = false;
        this.f48065t = true;
        this.f48064s = k();
        this.f48067v = (int) animation.a();
        double g10 = g();
        if (this.f48064s) {
            this.f48062q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f48063r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f48064s && this.f48063r != 0.0d) {
            z11 = true;
        }
        if (z10 && z11 && m.b()) {
            n(g10);
            this.f48069x.add(animation);
            return bounds;
        }
        ThemedReactContext themedReactContext = this.f48059i;
        if (!this.f48064s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        sm.a.c(sm.a.f48740a, m.a(), "HEIGHT:: " + g10 + " TAG:: " + this.f48068w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f48059i;
        int id2 = this.f48057d.getId();
        double d10 = 0.0d;
        int i10 = this.f48061p;
        int id3 = this.f48057d.getId();
        f.a.EnumC0535a d11 = nm.f.f38553f.d();
        if (this.f48064s) {
            d10 = 1.0d;
        }
        om.g.a(themedReactContext2, id2, new nm.f(i10, id3, d11, g10, d10, this.f48067v, this.f48068w));
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
        this.f48064s = k10;
        this.f48063r = d12;
        this.f48065t = false;
        this.f48067v = 0;
        ThemedReactContext themedReactContext = this.f48059i;
        if (!k10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        om.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = nm.f.f38553f;
        for (f.a.EnumC0535a enumC0535a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f48059i;
            int id2 = this.f48057d.getId();
            int i10 = this.f48061p;
            int id3 = this.f48057d.getId();
            if (!this.f48064s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            om.g.a(themedReactContext2, id2, new nm.f(i10, id3, enumC0535a, d12, d11, this.f48067v, this.f48068w));
        }
    }
}
