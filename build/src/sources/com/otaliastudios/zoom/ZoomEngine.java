package com.otaliastudios.zoom;

import android.content.Context;
import android.graphics.Matrix;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import bm.a;
import com.otaliastudios.zoom.ZoomLogger;
import com.otaliastudios.zoom.c;
import dm.b;
import dm.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomEngine implements com.otaliastudios.zoom.c {

    /* renamed from: w  reason: collision with root package name */
    public static final b f18154w = new b(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f18155x;

    /* renamed from: y  reason: collision with root package name */
    private static final ZoomLogger f18156y;

    /* renamed from: d  reason: collision with root package name */
    private int f18157d;

    /* renamed from: e  reason: collision with root package name */
    private int f18158e;

    /* renamed from: i  reason: collision with root package name */
    private View f18159i;

    /* renamed from: o  reason: collision with root package name */
    private final a f18160o;

    /* renamed from: p  reason: collision with root package name */
    private final bm.b f18161p;

    /* renamed from: q  reason: collision with root package name */
    private final bm.a f18162q;

    /* renamed from: r  reason: collision with root package name */
    private final em.b f18163r;

    /* renamed from: s  reason: collision with root package name */
    private final em.c f18164s;

    /* renamed from: t  reason: collision with root package name */
    private final dm.b f18165t;

    /* renamed from: u  reason: collision with root package name */
    private final cm.b f18166u;

    /* renamed from: v  reason: collision with root package name */
    private final cm.a f18167v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a implements ViewTreeObserver.OnGlobalLayoutListener, a.InterfaceC0100a, b.a {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ZoomEngine f18168d;

        /* renamed from: com.otaliastudios.zoom.ZoomEngine$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0210a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f18169d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0210a(ZoomEngine zoomEngine) {
                super(1);
                this.f18169d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f18169d.L().k(), false);
                applyUpdate.g(false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31987a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f18170d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ScaledPoint scaledPoint) {
                super(1);
                this.f18170d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f18170d, false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31987a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f18171d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(ZoomEngine zoomEngine) {
                super(1);
                this.f18171d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f18171d.G(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31987a;
            }
        }

        public a(ZoomEngine this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f18168d = this$0;
        }

        @Override // bm.a.InterfaceC0100a
        public void a(int i10) {
            if (i10 != 3) {
                if (i10 != 4) {
                    return;
                }
                this.f18168d.f18166u.e();
                return;
            }
            this.f18168d.f18165t.i();
        }

        @Override // bm.a.InterfaceC0100a
        public void b() {
            this.f18168d.f18161p.b();
        }

        @Override // dm.b.a
        public void c(float f10, boolean z10) {
            ZoomEngine.f18156y.h("onMatrixSizeChanged: firstTime:", Boolean.valueOf(z10), "oldZoom:", Float.valueOf(f10), "transformation:", Integer.valueOf(this.f18168d.f18157d), "transformationZoom:", Float.valueOf(this.f18168d.L().k()));
            this.f18168d.f18162q.f();
            if (z10) {
                this.f18168d.L().t(this.f18168d.r());
                this.f18168d.f18165t.h(new C0210a(this.f18168d));
                this.f18168d.f18165t.h(new b(this.f18168d.q()));
            } else {
                this.f18168d.L().t(this.f18168d.r());
                this.f18168d.f18165t.h(new c(this.f18168d));
            }
            ZoomEngine.f18156y.b("onMatrixSizeChanged: newTransformationZoom:", Float.valueOf(this.f18168d.L().k()), "newRealZoom:", Float.valueOf(this.f18168d.G()), "newZoom:", Float.valueOf(this.f18168d.K()));
        }

        @Override // dm.b.a
        public void d(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f18168d.f18159i;
            if (view != null) {
                view.postOnAnimation(action);
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }

        @Override // bm.a.InterfaceC0100a
        public void e() {
            this.f18168d.f18166u.f();
        }

        @Override // bm.a.InterfaceC0100a
        public boolean f(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f18168d.f18166u.h(event);
        }

        @Override // bm.a.InterfaceC0100a
        public boolean g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f18168d.f18167v.f(event);
        }

        @Override // bm.a.InterfaceC0100a
        public boolean h(int i10) {
            return this.f18168d.f18165t.z();
        }

        @Override // dm.b.a
        public void i() {
            this.f18168d.f18161p.c();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view;
            ZoomEngine zoomEngine = this.f18168d;
            View view2 = zoomEngine.f18159i;
            if (view2 != null) {
                float width = view2.getWidth();
                if (this.f18168d.f18159i != null) {
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

        @Override // dm.b.a
        public boolean post(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f18168d.f18159i;
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
        final /* synthetic */ float f18172d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f18173e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ float f18174i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10, float f11, float f12) {
            super(1);
            this.f18172d = f10;
            this.f18173e = f11;
            this.f18174i = f12;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f18172d, false);
            obtain.d(new AbsolutePoint(this.f18173e, this.f18174i), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31987a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f18175d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f18176e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, float f11) {
            super(1);
            this.f18175d = f10;
            this.f18176e = f11;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.b(new AbsolutePoint(this.f18175d, this.f18176e), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31987a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final dm.b invoke() {
            return ZoomEngine.this.f18165t;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f18178d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(float f10) {
            super(1);
            this.f18178d = f10;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f18178d, false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31987a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements View.OnAttachStateChangeListener {
        h() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().addOnGlobalLayoutListener(ZoomEngine.this.f18160o);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().removeOnGlobalLayoutListener(ZoomEngine.this.f18160o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final dm.b invoke() {
            return ZoomEngine.this.f18165t;
        }
    }

    static {
        String TAG = ZoomEngine.class.getSimpleName();
        f18155x = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18182b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f18156y = aVar.a(TAG);
    }

    public ZoomEngine(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        a aVar = new a(this);
        this.f18160o = aVar;
        this.f18161p = new bm.b(this);
        bm.a aVar2 = new bm.a(aVar);
        this.f18162q = aVar2;
        em.b bVar = new em.b(this, new f());
        this.f18163r = bVar;
        em.c cVar = new em.c(this, new i());
        this.f18164s = cVar;
        dm.b bVar2 = new dm.b(cVar, bVar, aVar2, aVar);
        this.f18165t = bVar2;
        this.f18166u = new cm.b(context, bVar, aVar2, bVar2);
        this.f18167v = new cm.a(context, cVar, bVar, aVar2, bVar2);
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
            com.otaliastudios.zoom.a aVar = com.otaliastudios.zoom.a.f18187a;
            return aVar.e(this.f18163r.e(), 16) | aVar.d(this.f18163r.e(), 1);
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScaledPoint q() {
        float x10 = (x() * G()) - v();
        float w10 = (w() * G()) - u();
        int p10 = p(this.f18158e);
        return new ScaledPoint(-this.f18163r.b(p10, x10, true), -this.f18163r.b(p10, w10, false));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float r() {
        int i10 = this.f18157d;
        if (i10 != 0) {
            if (i10 != 1) {
                return 1.0f;
            }
            float v10 = v() / x();
            float u10 = u() / w();
            f18156y.f("computeTransformationZoom", "centerCrop", "scaleX:", Float.valueOf(v10), "scaleY:", Float.valueOf(u10));
            return Math.max(v10, u10);
        }
        float v11 = v() / x();
        float u11 = u() / w();
        f18156y.f("computeTransformationZoom", "centerInside", "scaleX:", Float.valueOf(v11), "scaleY:", Float.valueOf(u11));
        return Math.min(v11, u11);
    }

    public int A() {
        return this.f18164s.g();
    }

    public float B() {
        return this.f18164s.h();
    }

    public int C() {
        return this.f18164s.j();
    }

    public AbsolutePoint D() {
        return AbsolutePoint.b(this.f18165t.s(), 0.0f, 0.0f, 3, null);
    }

    public float E() {
        return this.f18165t.t();
    }

    public float F() {
        return this.f18165t.u();
    }

    public float G() {
        return this.f18165t.y();
    }

    public ScaledPoint H() {
        return ScaledPoint.b(this.f18165t.v(), 0.0f, 0.0f, 3, null);
    }

    public float I() {
        return this.f18165t.w();
    }

    public float J() {
        return this.f18165t.x();
    }

    public float K() {
        return this.f18164s.n(G());
    }

    public final em.c L() {
        return this.f18164s;
    }

    public void M(float f10, float f11, float f12, boolean z10) {
        dm.c a10 = dm.c.f21799l.a(new d(this.f18164s.u(f10), f11, f12));
        if (z10) {
            this.f18165t.e(a10);
            return;
        }
        m();
        this.f18165t.g(a10);
    }

    public void N(Float f10, boolean z10) {
        Float valueOf;
        float floatValue;
        if (f10 == null) {
            valueOf = null;
        } else {
            float floatValue2 = f10.floatValue();
            em.c cVar = this.f18164s;
            float n10 = cVar.n(cVar.i());
            em.c cVar2 = this.f18164s;
            valueOf = Float.valueOf(kotlin.ranges.d.l(floatValue2, n10, cVar2.n(cVar2.f())));
        }
        if (valueOf == null) {
            floatValue = K();
        } else {
            floatValue = valueOf.floatValue();
        }
        float u10 = this.f18164s.u(floatValue);
        M(floatValue, -((x() / 2.0f) - ((v() / u10) / 2.0f)), -((w() / 2.0f) - ((u() / u10) / 2.0f)), z10);
    }

    public final boolean O(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f18162q.h(ev2);
    }

    public final boolean P(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f18162q.i(ev2);
    }

    public void Q(float f10, float f11, boolean z10) {
        dm.c a10 = dm.c.f21799l.a(new e(f10, f11));
        if (z10) {
            this.f18165t.e(a10);
            return;
        }
        m();
        this.f18165t.g(a10);
    }

    public void R(float f10, float f11, boolean z10) {
        Q(f10 - E(), f11 - F(), z10);
    }

    public void S(float f10, boolean z10) {
        dm.c a10 = dm.c.f21799l.a(new g(f10));
        if (z10) {
            this.f18165t.e(a10);
            return;
        }
        m();
        this.f18165t.g(a10);
    }

    public void T(int i10) {
        this.f18163r.o(i10);
    }

    public void U(boolean z10) {
        this.f18166u.j(z10);
    }

    public void V(long j10) {
        this.f18165t.D(j10);
    }

    public final void W(View container) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (this.f18159i == null) {
            this.f18159i = container;
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
        this.f18165t.E(f10, f11, z10);
    }

    public final void Z(float f10, float f11, boolean z10) {
        this.f18165t.F(f10, f11, z10);
    }

    public void b0(boolean z10) {
        this.f18166u.i(z10);
    }

    public void c0(boolean z10) {
        this.f18163r.q(z10);
    }

    public void d0(float f10) {
        c.a.a(this, f10);
    }

    public void e0(float f10) {
        c.a.b(this, f10);
    }

    public void f0(boolean z10) {
        this.f18166u.k(z10);
    }

    public void g0(OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f18163r.r(provider);
    }

    public void h0(boolean z10) {
        this.f18164s.r(z10);
    }

    public void i0(boolean z10) {
        this.f18163r.p(z10);
    }

    public void j0(boolean z10) {
        this.f18163r.s(z10);
    }

    public void k0(OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f18164s.s(provider);
    }

    public final void l(c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f18159i != null) {
            this.f18161p.a(listener);
            return;
        }
        throw new IllegalStateException("container is not initialized.");
    }

    public void l0(boolean z10) {
        this.f18166u.l(z10);
    }

    public boolean m() {
        if (this.f18162q.b()) {
            this.f18166u.e();
            return true;
        } else if (this.f18162q.a()) {
            this.f18162q.f();
            return true;
        } else {
            return false;
        }
    }

    public void m0(boolean z10) {
        this.f18166u.m(z10);
    }

    public final int n() {
        return (int) (-this.f18165t.w());
    }

    public void n0(int i10) {
        c.a.c(this, i10);
    }

    public final int o() {
        return (int) this.f18165t.p();
    }

    public void o0(boolean z10) {
        this.f18166u.n(z10);
    }

    public void p0(boolean z10) {
        this.f18163r.t(z10);
    }

    public void q0(boolean z10) {
        this.f18164s.o(z10);
    }

    public void r0(float f10, boolean z10) {
        u0(K() * f10, z10);
    }

    public final int s() {
        return (int) (-this.f18165t.x());
    }

    public void s0() {
        r0(1.3f, true);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.f18164s.p(f10, i10);
        if (K() > this.f18164s.f()) {
            S(this.f18164s.f(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.f18164s.q(f10, i10);
        if (G() <= this.f18164s.i()) {
            S(this.f18164s.i(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.f18157d = i10;
        this.f18158e = i11;
    }

    public final int t() {
        return (int) this.f18165t.o();
    }

    public void t0() {
        r0(0.7f, true);
    }

    public final float u() {
        return this.f18165t.l();
    }

    public void u0(float f10, boolean z10) {
        S(this.f18164s.u(f10), z10);
    }

    public final float v() {
        return this.f18165t.m();
    }

    public final float w() {
        return this.f18165t.n();
    }

    public final float x() {
        return this.f18165t.q();
    }

    public final Matrix y() {
        return this.f18165t.r();
    }

    public float z() {
        return this.f18164s.e();
    }
}
