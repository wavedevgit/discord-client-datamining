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
    private final ReactViewGroup f32015d;

    /* renamed from: e  reason: collision with root package name */
    private final View f32016e;

    /* renamed from: i  reason: collision with root package name */
    private final ThemedReactContext f32017i;

    /* renamed from: o  reason: collision with root package name */
    private final l f32018o;

    /* renamed from: p  reason: collision with root package name */
    private final int f32019p;

    /* renamed from: q  reason: collision with root package name */
    private double f32020q;

    /* renamed from: r  reason: collision with root package name */
    private double f32021r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f32022s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f32023t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f32024u;

    /* renamed from: v  reason: collision with root package name */
    private int f32025v;

    /* renamed from: w  reason: collision with root package name */
    private int f32026w;

    /* renamed from: x  reason: collision with root package name */
    private HashSet f32027x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f32028y;

    /* renamed from: z  reason: collision with root package name */
    private final ViewTreeObserver.OnGlobalFocusChangeListener f32029z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ReactViewGroup eventPropagationView, View view, ThemedReactContext themedReactContext, l config) {
        super(config.b());
        Intrinsics.checkNotNullParameter(eventPropagationView, "eventPropagationView");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f32015d = eventPropagationView;
        this.f32016e = view;
        this.f32017i = themedReactContext;
        this.f32018o = config;
        this.f32019p = UIManagerHelper.getSurfaceId(eventPropagationView);
        this.f32026w = -1;
        this.f32027x = new HashSet();
        ViewTreeObserver.OnGlobalFocusChangeListener onGlobalFocusChangeListener = new ViewTreeObserver.OnGlobalFocusChangeListener() { // from class: jm.j
            @Override // android.view.ViewTreeObserver.OnGlobalFocusChangeListener
            public final void onGlobalFocusChanged(View view2, View view3) {
                k.f(k.this, view2, view3);
            }
        };
        this.f32029z = onGlobalFocusChangeListener;
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
            kVar.f32026w = ((EditText) view2).getId();
            if (kVar.f32022s && view != null) {
                ThemedReactContext themedReactContext = kVar.f32017i;
                int id2 = kVar.f32015d.getId();
                int i10 = kVar.f32019p;
                int id3 = kVar.f32015d.getId();
                f.a aVar = fm.f.f24472f;
                gm.g.a(themedReactContext, id2, new fm.f(i10, id3, aVar.d(), kVar.f32020q, 1.0d, 0, kVar.f32026w));
                gm.g.a(kVar.f32017i, kVar.f32015d.getId(), new fm.f(kVar.f32019p, kVar.f32015d.getId(), aVar.a(), kVar.f32020q, 1.0d, 0, kVar.f32026w));
                gm.g.b(kVar.f32017i, "KeyboardController::keyboardWillShow", kVar.h(kVar.f32020q));
                gm.g.b(kVar.f32017i, "KeyboardController::keyboardDidShow", kVar.h(kVar.f32020q));
            }
        }
    }

    private final double g() {
        int i10;
        Insets f10;
        Insets f11;
        WindowInsetsCompat G = h0.G(this.f32016e);
        int i11 = 0;
        if (G != null && (f11 = G.f(WindowInsetsCompat.p.c())) != null) {
            i10 = f11.f3197d;
        } else {
            i10 = 0;
        }
        if (!this.f32018o.c() && G != null && (f10 = G.f(WindowInsetsCompat.p.f())) != null) {
            i11 = f10.f3197d;
        }
        return kotlin.ranges.d.b(gm.d.a(i10 - i11), 0.0d);
    }

    private final WritableMap h(double d10) {
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("height", d10);
        createMap.putInt("duration", this.f32025v);
        createMap.putDouble("timestamp", System.currentTimeMillis());
        createMap.putInt("target", this.f32026w);
        EditText b10 = om.a.f44546a.b();
        if (b10 != null) {
            str = gm.c.f(b10);
        } else {
            str = null;
        }
        createMap.putString("type", str);
        createMap.putString("appearance", gm.g.c(this.f32017i));
        return createMap;
    }

    private final boolean i() {
        if (this.f32025v == -1) {
            return true;
        }
        return false;
    }

    private final boolean j() {
        WindowInsetsCompat G = h0.G(this.f32016e);
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
        kVar.f32022s = kVar.j();
        kVar.f32021r = g10;
        if (kVar.f32027x.contains(x0Var)) {
            kVar.f32025v = 0;
            kVar.f32027x.remove(x0Var);
            return;
        }
        ThemedReactContext themedReactContext = kVar.f32017i;
        if (!kVar.f32022s) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, kVar.h(g10));
        ThemedReactContext themedReactContext2 = kVar.f32017i;
        int id2 = kVar.f32015d.getId();
        int i10 = kVar.f32019p;
        int id3 = kVar.f32015d.getId();
        f.a.EnumC0321a a10 = fm.f.f24472f.a();
        if (!kVar.f32022s) {
            d10 = 0.0d;
        } else {
            d10 = 1.0d;
        }
        gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, a10, g10, d10, kVar.f32025v, kVar.f32026w));
        kVar.f32025v = 0;
    }

    private final void m(double d10) {
        this.f32025v = 0;
        gm.g.b(this.f32017i, "KeyboardController::keyboardWillShow", h(d10));
        f.a aVar = fm.f.f24472f;
        for (f.a.EnumC0321a enumC0321a : CollectionsKt.o(aVar.d(), aVar.c(), aVar.a())) {
            gm.g.a(this.f32017i, this.f32015d.getId(), new fm.f(this.f32019p, this.f32015d.getId(), enumC0321a, d10, 1.0d, 0, this.f32026w));
        }
        gm.g.b(this.f32017i, "KeyboardController::keyboardDidShow", h(d10));
        this.f32020q = d10;
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
        if (this.f32022s && j()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!this.f32023t && !hm.a.f27785a.a()) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.f32020q == g10) {
            z14 = true;
        }
        if (!z11 && !this.f32024u) {
            km.a aVar = km.a.f33029a;
            str2 = m.f32034a;
            km.a.c(aVar, str2, "IME changed without animation – sending synthetic events", null, 4, null);
            o(Double.valueOf(g10), Boolean.valueOf(j()));
        }
        if (z12 && !z14) {
            z13 = m.f32035b;
            if (!z13) {
                km.a aVar2 = km.a.f33029a;
                str = m.f32034a;
                km.a.c(aVar2, str, "onApplyWindowInsets: " + this.f32020q + " -> " + g10, null, 4, null);
                g gVar = this.A;
                if (gVar != null) {
                    gVar.l();
                }
                m(g10);
            }
        }
        return insets;
    }

    @Override // jm.n
    public void b(boolean z10) {
        this.f32028y = z10;
    }

    public final void e() {
        this.f32016e.getViewTreeObserver().removeOnGlobalFocusChangeListener(this.f32029z);
        g gVar = this.A;
        if (gVar != null) {
            gVar.f();
        }
    }

    public boolean k() {
        return this.f32028y;
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
        this.f32022s = j10;
        this.f32021r = d12;
        this.f32023t = false;
        this.f32025v = 0;
        ThemedReactContext themedReactContext = this.f32017i;
        if (!j10) {
            str = "keyboardDidHide";
        } else {
            str = "keyboardDidShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, h(d12));
        f.a aVar = fm.f.f24472f;
        for (f.a.EnumC0321a enumC0321a : CollectionsKt.o(aVar.c(), aVar.a())) {
            ThemedReactContext themedReactContext2 = this.f32017i;
            int id2 = this.f32015d.getId();
            int i10 = this.f32019p;
            int id3 = this.f32015d.getId();
            if (!this.f32022s) {
                d11 = 0.0d;
            } else {
                d11 = 1.0d;
            }
            gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, enumC0321a, d12, d11, this.f32025v, this.f32026w));
        }
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(final x0 animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        super.onEnd(animation);
        if (gm.j.a(animation) && !k()) {
            this.f32024u = false;
            this.f32023t = false;
            this.f32025v = (int) animation.a();
            Runnable runnable = new Runnable() { // from class: jm.i
                @Override // java.lang.Runnable
                public final void run() {
                    k.l(k.this, animation);
                }
            };
            if (i()) {
                this.f32016e.post(runnable);
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
            this.f32024u = true;
        }
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
        Object obj;
        boolean z10;
        String str;
        String str2;
        f.a.EnumC0321a c10;
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
        Iterator it = runningAnimations.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                x0 x0Var = (x0) obj;
                if (gm.j.a(x0Var) && !this.f32027x.contains(x0Var)) {
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
            Insets f10 = insets.f(this.f32018o.a());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets NONE = insets.f(this.f32018o.d());
            Intrinsics.checkNotNullExpressionValue(NONE, "getInsets(...)");
            if (this.f32018o.c()) {
                NONE = Insets.f3193e;
                Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            }
            Insets b10 = Insets.b(Insets.e(f10, NONE), Insets.f3193e);
            Intrinsics.checkNotNullExpressionValue(b10, "let(...)");
            float f11 = b10.f3197d - b10.f3195b;
            double a10 = gm.d.a(f11);
            double d10 = 0.0d;
            try {
                double abs = Math.abs(a10 / this.f32020q);
                if (!Double.isNaN(abs)) {
                    if (!Double.isInfinite(abs)) {
                        d10 = abs;
                    }
                }
            } catch (ArithmeticException e10) {
                km.a aVar = km.a.f33029a;
                str = m.f32034a;
                km.a.f(aVar, str, "Caught arithmetic exception during `progress` calculation: " + e10, null, 4, null);
            }
            double d11 = d10;
            km.a aVar2 = km.a.f33029a;
            str2 = m.f32034a;
            hm.a aVar3 = hm.a.f27785a;
            km.a.c(aVar2, str2, "DiffY: " + f11 + " " + a10 + " " + d11 + " " + aVar3.a() + " " + this.f32026w, null, 4, null);
            if (aVar3.a()) {
                c10 = fm.f.f24472f.b();
            } else {
                c10 = fm.f.f24472f.c();
            }
            gm.g.a(this.f32017i, this.f32015d.getId(), new fm.f(this.f32019p, this.f32015d.getId(), c10, a10, d11, this.f32025v, this.f32026w));
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
        if (!gm.j.a(animation) || k()) {
            return bounds;
        }
        boolean z12 = false;
        this.f32024u = false;
        this.f32023t = true;
        this.f32022s = j();
        this.f32025v = (int) animation.a();
        double g10 = g();
        if (this.f32022s) {
            this.f32020q = g10;
        }
        g gVar = this.A;
        if (gVar != null) {
            gVar.l();
        }
        if (g10 == 0.0d || this.f32021r == g10) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f32022s && this.f32021r != 0.0d) {
            z12 = true;
        }
        if (z10 && z12) {
            z11 = m.f32035b;
            if (z11) {
                m(g10);
                this.f32027x.add(animation);
                return bounds;
            }
        }
        ThemedReactContext themedReactContext = this.f32017i;
        if (!this.f32022s) {
            str = "keyboardWillHide";
        } else {
            str = "keyboardWillShow";
        }
        gm.g.b(themedReactContext, "KeyboardController::" + str, h(g10));
        km.a aVar = km.a.f33029a;
        str2 = m.f32034a;
        km.a.c(aVar, str2, "HEIGHT:: " + g10 + " TAG:: " + this.f32026w, null, 4, null);
        ThemedReactContext themedReactContext2 = this.f32017i;
        int id2 = this.f32015d.getId();
        double d10 = 0.0d;
        int i10 = this.f32019p;
        int id3 = this.f32015d.getId();
        f.a.EnumC0321a d11 = fm.f.f24472f.d();
        if (this.f32022s) {
            d10 = 1.0d;
        }
        gm.g.a(themedReactContext2, id2, new fm.f(i10, id3, d11, g10, d10, this.f32025v, this.f32026w));
        x0.a onStart = super.onStart(animation, bounds);
        Intrinsics.checkNotNullExpressionValue(onStart, "onStart(...)");
        return onStart;
    }
}
