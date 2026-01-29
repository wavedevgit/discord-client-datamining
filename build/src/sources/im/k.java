package im;

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
import em.f;
import im.n;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends x0.b implements v, n {
    private g A;

    /* renamed from: d  reason: collision with root package name */
    private final ReactViewGroup f28611d;

    /* renamed from: e  reason: collision with root package name */
    private final View f28612e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f28613i;

    /* renamed from: o  reason: collision with root package name */
    private final l f28614o;

    /* renamed from: p  reason: collision with root package name */
    private final int f28615p;

    /* renamed from: q  reason: collision with root package name */
    private double f28616q;

    /* renamed from: r  reason: collision with root package name */
    private double f28617r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f28618s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f28619t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f28620u;

    /* renamed from: v  reason: collision with root package name */
    private int f28621v;

    /* renamed from: w  reason: collision with root package name */
    private int f28622w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f28623x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f28624y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f28625z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f28611d = eventPropagationView;
        this.f28612e = view;
        this.f28613i = themedReactContext;
        this.f28614o = config;
        this.f28615p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f28622w = -1;
        this.f28623x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: im.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f28625z = onGlobalFocusChangeListener;
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
            kVar.f28622w = ((EditText) view2).getId();
            if (kVar.f28618s && view != null) {
                ThemedReactContext themedReactContext = kVar.f28613i;
                int id2 = kVar.f28611d.getId();
                int i10 = kVar.f28615p;
                int id3 = kVar.f28611d.getId();
                f.a aVar = em.f.f22941f;
                fm.g.a(themedReactContext, id2, new em.f(i10, id3, aVar.d(), kVar.f28616q, 1.0d, 0, kVar.f28622w));
                fm.g.a(kVar.f28613i, kVar.f28611d.getId(), new em.f(kVar.f28615p, kVar.f28611d.getId(), aVar.a(), kVar.f28616q, 1.0d, 0, kVar.f28622w));
                fm.g.b(kVar.f28613i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f28616q));
                fm.g.b(kVar.f28613i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f28616q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f28612e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3153d;
        } else {
            i10 = 0;
        }
        if (!this.f28614o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3153d;
        }
        return kotlin.ranges.d.b(fm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f28621v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f28622w);
        EditText b10 = nm.a.f41976a.b();
        if (b10 != null) {
            str = fm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", fm.g.c(this.f28613i));
        return createMap;
    }

    private final boolean i() {
        if (this.f28621v == -1) {
            return true;
        }
        return false;
    }

    private final boolean j() {
        WindowInsetsCompat G = h0.G(this.f28612e);
        if (G != null) {
            return G.u(WindowInsetsCompat.p.c());
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(k kVar, x0 x0Var) {
        String str;
        double d10;
        double g10 = kVar.g();
        kVar.f28618s = kVar.j();
        kVar.f28617r = g10;
        if (kVar.f28623x.contains(x0Var)) {
            kVar.f28621v = 0;
            kVar.f28623x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f28613i;
        if (!kVar.f28618s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        fm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f28613i;
        int id2 = kVar.f28611d.getId();
        int i10 = kVar.f28615p;
        int id3 = kVar.f28611d.getId();
        f.a.EnumC0297a a10 = em.f.f22941f.a();
        if (!kVar.f28618s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        fm.g.a(themedReactContext2, id2, new em.f(i10, id3, a10, g10, d10, kVar.f28621v, kVar.f28622w));
        kVar.f28621v = 0;
    }

    private final void m(double d10) {
        this.f28621v = 0;
        fm.g.b(this.f28613i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = em.f.f22941f;
        for (f.a.EnumC0297a enumC0297a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            fm.g.a(this.f28613i, this.f28611d.getId(), new em.f(this.f28615p, this.f28611d.getId(), enumC0297a, d10, 1.0d, 0, this.f28622w));
        }
        fm.g.b(this.f28613i, "KeyboardController::keyboardDidShow", h(d10));
        this.f28616q = d10;
    }

    public static /* synthetic */ void p(k kVar, Double d10, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = null;
        }
        if ((i10 & 2) != 0) {
            bool = null;
        }
        kVar.o(d10, bool);
    }

    @Override // androidx.core.view.v
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        double g10 = g();
        boolean z14 = false;
        if (this.f28618s && j()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f28619t && !gm.a.f27022a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f28616q == g10) {
            z14 = true;
        }
        if (!z11 && !this.f28620u) {
            jm.a aVar = jm.a.f32237a;
            str2 = m.f28630a;
            jm.a.b(aVar, str2, "IME changed without animation – sending synthetic events", null, 4, null);
            o(Double.valueOf(g10), Boolean.valueOf(j()));
        }
        if (z12 && !z14) {
            z13 = m.f28631b;
            if (!z13) {
                jm.a aVar2 = jm.a.f32237a;
                str = m.f28630a;
                jm.a.b(aVar2, str, "onApplyWindowInsets: " + this.f28616q + " -> " + g10, null, 4, null);
                g gVar = this.A;
                if (gVar != null) {
                    gVar.l();
                }
                m(g10);
            }
        }
        return insets;
    }

    @Override // im.n
    public void b(boolean z10) {
        this.f28624y = z10;
    }

    public final void e() {
        this.f28612e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f28625z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public boolean k() {
        return this.f28624y;
    }

    public void n(boolean z10) {
        n.a.a(this, z10);
    }

    public final void o(Double d10, Boolean bool) {
        double g10;
        boolean j10;
        String str;
        double d11;
        if (d10 != null) {
            g10 = d10.doubleValue();
        } else {
            g10 = g();
        }
        double d12 = g10;
        if (bool != null) {
            j10 = bool.booleanValue();
        } else {
            j10 = j();
        }
        this.f28618s = j10;
        this.f28617r = d12;
        this.f28619t = false;
        this.f28621v = 0;
        ThemedReactContext themedReactContext = this.f28613i;
        if (!j10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        fm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = em.f.f22941f;
        for (f.a.EnumC0297a enumC0297a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f28613i;
            int id2 = this.f28611d.getId();
            int i10 = this.f28615p;
            int id3 = this.f28611d.getId();
            if (!this.f28618s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            fm.g.a(themedReactContext2, id2, new em.f(i10, id3, enumC0297a, d12, d11, this.f28621v, this.f28622w));
        }
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (fm.j.a(animation) && !k()) {
            this.f28620u = false;
            this.f28619t = false;
            this.f28621v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: im.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.l(k.this, animation);
                }
            };
            if (i()) {
                this.f28612e.post(runnable);
            } else {
                runnable.run();
            }
        }
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onPrepare(animation);
        if (fm.j.a(animation)) {
            this.f28620u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        String str;
        String str2;
        f.a.EnumC0297a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (fm.j.a(x0Var) && !this.f28623x.contains(x0Var)) {
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
        if (!k() && !z10) {
            Insets f10 = insets.f(this.f28614o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f28614o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f28614o.c()) {
                NONE = Insets.f3149e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3149e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3153d - b10.f3151b;
            double a10 = fm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f28616q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                jm.a aVar = jm.a.f32237a;
                str = m.f28630a;
                jm.a.e(aVar, str, "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            jm.a aVar2 = jm.a.f32237a;
            str2 = m.f28630a;
            gm.a aVar3 = gm.a.f27022a;
            jm.a.b(aVar2, str2, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar3.a() + " " + this.f28622w, null, 4, null);
            if (aVar3.a()) {
                c10 = em.f.f22941f.b();
            } else {
                c10 = em.f.f22941f.c();
            }
            fm.g.a(this.f28613i, this.f28611d.getId(), new em.f(this.f28615p, this.f28611d.getId(), c10, a10, d11, this.f28621v, this.f28622w));
        }
        return insets;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 animation, x0.a bounds) {
        boolean z10;
        String str;
        String str2;
        boolean z11;
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        if (!fm.j.a(animation) || k()) {
            return bounds;
        }
        boolean z12 = false;
        this.f28620u = false;
        this.f28619t = true;
        this.f28618s = j();
        this.f28621v = (int) animation.a();
        double g10 = g();
        if (this.f28618s) {
            this.f28616q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f28617r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f28618s && this.f28617r != 0.0d) {
            z12 = true;
        }
        if (z10 && z12) {
            z11 = m.f28631b;
            if (z11) {
                m(g10);
                this.f28623x.add(animation);
                return bounds;
            }
        }
        ThemedReactContext themedReactContext = this.f28613i;
        if (!this.f28618s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        fm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        jm.a aVar = jm.a.f32237a;
        str2 = m.f28630a;
        jm.a.b(aVar, str2, "HEIGHT:: " + g10 + " TAG:: " + this.f28622w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f28613i;
        int id2 = this.f28611d.getId();
        double d10 = 0.0d;
        int i10 = this.f28615p;
        int id3 = this.f28611d.getId();
        f.a.EnumC0297a d11 = em.f.f22941f.d();
        if (this.f28618s) {
            d10 = 1.0d;
        }
        fm.g.a(themedReactContext2, id2, new em.f(i10, id3, d11, g10, d10, this.f28621v, this.f28622w));
        x0.a onStart = super.onStart(animation, bounds);
        Intrinsics.checkNotNullExpressionValue(onStart, "onStart(...)");
        return onStart;
    }
}
