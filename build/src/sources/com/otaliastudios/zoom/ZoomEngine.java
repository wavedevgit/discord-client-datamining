package com.otaliastudios.zoom;

import android.content.Context;
import android.graphics.Matrix;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import com.otaliastudios.zoom.ZoomLogger;
import com.otaliastudios.zoom.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import wl.a;
import yl.b;
import yl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomEngine implements com.otaliastudios.zoom.c {

    /* renamed from: w  reason: collision with root package name */
    public static final b f17285w = new b(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f17286x;

    /* renamed from: y  reason: collision with root package name */
    private static final ZoomLogger f17287y;

    /* renamed from: d  reason: collision with root package name */
    private int f17288d;

    /* renamed from: e  reason: collision with root package name */
    private int f17289e;

    /* renamed from: i  reason: collision with root package name */
    private View f17290i;

    /* renamed from: o  reason: collision with root package name */
    private final a f17291o;

    /* renamed from: p  reason: collision with root package name */
    private final wl.b f17292p;

    /* renamed from: q  reason: collision with root package name */
    private final wl.a f17293q;

    /* renamed from: r  reason: collision with root package name */
    private final zl.b f17294r;

    /* renamed from: s  reason: collision with root package name */
    private final zl.c f17295s;

    /* renamed from: t  reason: collision with root package name */
    private final yl.b f17296t;

    /* renamed from: u  reason: collision with root package name */
    private final xl.b f17297u;

    /* renamed from: v  reason: collision with root package name */
    private final xl.a f17298v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a implements ViewTreeObserver.OnGlobalLayoutListener, a.InterfaceC0701a, b.a {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ZoomEngine f17299d;

        /* renamed from: com.otaliastudios.zoom.ZoomEngine$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0210a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17300d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0210a(ZoomEngine zoomEngine) {
                super(1);
                this.f17300d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17300d.L().k(), false);
                applyUpdate.g(false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31988a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f17301d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ScaledPoint scaledPoint) {
                super(1);
                this.f17301d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f17301d, false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31988a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17302d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(ZoomEngine zoomEngine) {
                super(1);
                this.f17302d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17302d.G(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31988a;
            }
        }

        public a(ZoomEngine this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f17299d = this$0;
        }

        @Override // wl.a.InterfaceC0701a
        public void a(int i10) {
            if (i10 != 3) {
                if (i10 != 4) {
                    return;
                }
                this.f17299d.f17297u.e();
                return;
            }
            this.f17299d.f17296t.i();
        }

        @Override // wl.a.InterfaceC0701a
        public void b() {
            this.f17299d.f17292p.b();
        }

        @Override // yl.b.a
        public void c(float f10, boolean z10) {
            ZoomEngine.f17287y.h("onMatrixSizeChanged: firstTime:", Boolean.valueOf(z10), "oldZoom:", Float.valueOf(f10), "transformation:", Integer.valueOf(this.f17299d.f17288d), "transformationZoom:", Float.valueOf(this.f17299d.L().k()));
            this.f17299d.f17293q.f();
            if (z10) {
                this.f17299d.L().t(this.f17299d.r());
                this.f17299d.f17296t.g(new C0210a(this.f17299d));
                this.f17299d.f17296t.g(new b(this.f17299d.q()));
            } else {
                this.f17299d.L().t(this.f17299d.r());
                this.f17299d.f17296t.g(new c(this.f17299d));
            }
            ZoomEngine.f17287y.b("onMatrixSizeChanged: newTransformationZoom:", Float.valueOf(this.f17299d.L().k()), "newRealZoom:", Float.valueOf(this.f17299d.G()), "newZoom:", Float.valueOf(this.f17299d.K()));
        }

        @Override // yl.b.a
        public void d(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17299d.f17290i;
            if (view != null) {
                view.postOnAnimation(action);
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }

        @Override // wl.a.InterfaceC0701a
        public void e() {
            this.f17299d.f17297u.f();
        }

        @Override // wl.a.InterfaceC0701a
        public boolean f(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17299d.f17297u.h(event);
        }

        @Override // wl.a.InterfaceC0701a
        public boolean g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17299d.f17298v.f(event);
        }

        @Override // wl.a.InterfaceC0701a
        public boolean h(int i10) {
            return this.f17299d.f17296t.z();
        }

        @Override // yl.b.a
        public void i() {
            this.f17299d.f17292p.c();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view;
            ZoomEngine zoomEngine = this.f17299d;
            View view2 = zoomEngine.f17290i;
            if (view2 != null) {
                float width = view2.getWidth();
                if (this.f17299d.f17290i != null) {
                    ZoomEngine.Y(zoomEngine, width, view.getHeight(), false, 4, null);
                    return;
                } else {
                    Intrinsics.throwUninitializedPropertyAccessException("container");
                    throw null;
                }
            }
            Intrinsics.throwUninitializedPropertyAccessException("container");
            throw null;
        }

        @Override // yl.b.a
        public boolean post(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17299d.f17290i;
            if (view != null) {
                return view.post(action);
            }
            Intrinsics.throwUninitializedPropertyAccessException("container");
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        void onIdle(ZoomEngine zoomEngine);

        void onUpdate(ZoomEngine zoomEngine, Matrix matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17303d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17304e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ float f17305i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10, float f11, float f12) {
            super(1);
            this.f17303d = f10;
            this.f17304e = f11;
            this.f17305i = f12;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17303d, false);
            obtain.d(new AbsolutePoint(this.f17304e, this.f17305i), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17306d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17307e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, float f11) {
            super(1);
            this.f17306d = f10;
            this.f17307e = f11;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.b(new AbsolutePoint(this.f17306d, this.f17307e), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final yl.b invoke() {
            return ZoomEngine.this.f17296t;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17309d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(float f10) {
            super(1);
            this.f17309d = f10;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17309d, false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements View.OnAttachStateChangeListener {
        h() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().addOnGlobalLayoutListener(ZoomEngine.this.f17291o);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().removeOnGlobalLayoutListener(ZoomEngine.this.f17291o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final yl.b invoke() {
            return ZoomEngine.this.f17296t;
        }
    }

    static {
        String TAG = ZoomEngine.class.getSimpleName();
        f17286x = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f17287y = aVar.a(TAG);
    }

    public ZoomEngine(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        a aVar = new a(this);
        this.f17291o = aVar;
        this.f17292p = new wl.b(this);
        wl.a aVar2 = new wl.a(aVar);
        this.f17293q = aVar2;
        zl.b bVar = new zl.b(this, new f());
        this.f17294r = bVar;
        zl.c cVar = new zl.c(this, new i());
        this.f17295s = cVar;
        yl.b bVar2 = new yl.b(cVar, bVar, aVar2, aVar);
        this.f17296t = bVar2;
        this.f17297u = new xl.b(context, bVar, aVar2, bVar2);
        this.f17298v = new xl.a(context, cVar, bVar, aVar2, bVar2);
    }

    public static /* synthetic */ void Y(ZoomEngine zoomEngine, float f10, float f11, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                z10 = false;
            }
            zoomEngine.X(f10, f11, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setContainerSize");
    }

    public static /* synthetic */ void a0(ZoomEngine zoomEngine, float f10, float f11, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                z10 = false;
            }
            zoomEngine.Z(f10, f11, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setContentSize");
    }

    private final int p(int i10) {
        if (i10 == 0) {
            com.otaliastudios.zoom.a aVar = com.otaliastudios.zoom.a.f17318a;
            return aVar.e(this.f17294r.e(), 16) | aVar.d(this.f17294r.e(), 1);
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScaledPoint q() {
        float x10 = (x() * G()) - v();
        float w10 = (w() * G()) - u();
        int p10 = p(this.f17289e);
        return new ScaledPoint(-this.f17294r.b(p10, x10, true), -this.f17294r.b(p10, w10, false));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float r() {
        int i10 = this.f17288d;
        if (i10 != 0) {
            if (i10 != 1) {
                return 1.0f;
            }
            float v10 = v() / x();
            float u10 = u() / w();
            f17287y.f("computeTransformationZoom", "centerCrop", "scaleX:", Float.valueOf(v10), "scaleY:", Float.valueOf(u10));
            return Math.max(v10, u10);
        }
        float v11 = v() / x();
        float u11 = u() / w();
        f17287y.f("computeTransformationZoom", "centerInside", "scaleX:", Float.valueOf(v11), "scaleY:", Float.valueOf(u11));
        return Math.min(v11, u11);
    }

    public int A() {
        return this.f17295s.g();
    }

    public float B() {
        return this.f17295s.h();
    }

    public int C() {
        return this.f17295s.j();
    }

    public AbsolutePoint D() {
        return AbsolutePoint.b(this.f17296t.s(), 0.0f, 0.0f, 3, null);
    }

    public float E() {
        return this.f17296t.t();
    }

    public float F() {
        return this.f17296t.u();
    }

    public float G() {
        return this.f17296t.y();
    }

    public ScaledPoint H() {
        return ScaledPoint.b(this.f17296t.v(), 0.0f, 0.0f, 3, null);
    }

    public float I() {
        return this.f17296t.w();
    }

    public float J() {
        return this.f17296t.x();
    }

    public float K() {
        return this.f17295s.n(G());
    }

    public final zl.c L() {
        return this.f17295s;
    }

    public void M(float f10, float f11, float f12, boolean z10) {
        yl.c a10 = yl.c.f54825l.a(new d(this.f17295s.u(f10), f11, f12));
        if (z10) {
            this.f17296t.f(a10);
            return;
        }
        m();
        this.f17296t.h(a10);
    }

    public void N(Float f10, boolean z10) {
        Float valueOf;
        float floatValue;
        if (f10 == null) {
            valueOf = null;
        } else {
            float floatValue2 = f10.floatValue();
            zl.c cVar = this.f17295s;
            float n10 = cVar.n(cVar.i());
            zl.c cVar2 = this.f17295s;
            valueOf = Float.valueOf(kotlin.ranges.d.l(floatValue2, n10, cVar2.n(cVar2.f())));
        }
        if (valueOf == null) {
            floatValue = K();
        } else {
            floatValue = valueOf.floatValue();
        }
        float u10 = this.f17295s.u(floatValue);
        M(floatValue, -((x() / 2.0f) - ((v() / u10) / 2.0f)), -((w() / 2.0f) - ((u() / u10) / 2.0f)), z10);
    }

    public final boolean O(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17293q.h(ev2);
    }

    public final boolean P(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17293q.i(ev2);
    }

    public void Q(float f10, float f11, boolean z10) {
        yl.c a10 = yl.c.f54825l.a(new e(f10, f11));
        if (z10) {
            this.f17296t.f(a10);
            return;
        }
        m();
        this.f17296t.h(a10);
    }

    public void R(float f10, float f11, boolean z10) {
        Q(f10 - E(), f11 - F(), z10);
    }

    public void S(float f10, boolean z10) {
        yl.c a10 = yl.c.f54825l.a(new g(f10));
        if (z10) {
            this.f17296t.f(a10);
            return;
        }
        m();
        this.f17296t.h(a10);
    }

    public void T(int i10) {
        this.f17294r.o(i10);
    }

    public void U(boolean z10) {
        this.f17297u.j(z10);
    }

    public void V(long j10) {
        this.f17296t.D(j10);
    }

    public final void W(View container) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (this.f17290i == null) {
            this.f17290i = container;
            if (container != null) {
                container.addOnAttachStateChangeListener(new h());
                return;
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }
        throw new IllegalStateException("container already set");
    }

    public final void X(float f10, float f11, boolean z10) {
        this.f17296t.E(f10, f11, z10);
    }

    public final void Z(float f10, float f11, boolean z10) {
        this.f17296t.F(f10, f11, z10);
    }

    public void b0(boolean z10) {
        this.f17297u.i(z10);
    }

    public void c0(boolean z10) {
        this.f17294r.q(z10);
    }

    public void d0(float f10) {
        c.a.a(this, f10);
    }

    public void e0(float f10) {
        c.a.b(this, f10);
    }

    public void f0(boolean z10) {
        this.f17297u.k(z10);
    }

    public void g0(OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17294r.r(provider);
    }

    public void h0(boolean z10) {
        this.f17295s.r(z10);
    }

    public void i0(boolean z10) {
        this.f17294r.p(z10);
    }

    public void j0(boolean z10) {
        this.f17294r.s(z10);
    }

    public void k0(OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17295s.s(provider);
    }

    public final void l(c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f17290i != null) {
            this.f17292p.a(listener);
            return;
        }
        throw new IllegalStateException("container is not initialized.");
    }

    public void l0(boolean z10) {
        this.f17297u.l(z10);
    }

    public boolean m() {
        if (this.f17293q.b()) {
            this.f17297u.e();
            return true;
        } else if (this.f17293q.a()) {
            this.f17293q.f();
            return true;
        } else {
            return false;
        }
    }

    public void m0(boolean z10) {
        this.f17297u.m(z10);
    }

    public final int n() {
        return (int) (-this.f17296t.w());
    }

    public void n0(int i10) {
        c.a.c(this, i10);
    }

    public final int o() {
        return (int) this.f17296t.p();
    }

    public void o0(boolean z10) {
        this.f17297u.n(z10);
    }

    public void p0(boolean z10) {
        this.f17294r.t(z10);
    }

    public void q0(boolean z10) {
        this.f17295s.o(z10);
    }

    public void r0(float f10, boolean z10) {
        u0(K() * f10, z10);
    }

    public final int s() {
        return (int) (-this.f17296t.x());
    }

    public void s0() {
        r0(1.3f, true);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.f17295s.p(f10, i10);
        if (K() > this.f17295s.f()) {
            S(this.f17295s.f(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.f17295s.q(f10, i10);
        if (G() <= this.f17295s.i()) {
            S(this.f17295s.i(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.f17288d = i10;
        this.f17289e = i11;
    }

    public final int t() {
        return (int) this.f17296t.o();
    }

    public void t0() {
        r0(0.7f, true);
    }

    public final float u() {
        return this.f17296t.l();
    }

    public void u0(float f10, boolean z10) {
        S(this.f17295s.u(f10), z10);
    }

    public final float v() {
        return this.f17296t.m();
    }

    public final float w() {
        return this.f17296t.n();
    }

    public final float x() {
        return this.f17296t.q();
    }

    public final Matrix y() {
        return this.f17296t.r();
    }

    public float z() {
        return this.f17295s.e();
    }
}
