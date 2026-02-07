package com.otaliastudios.zoom;

import am.b;
import am.c;
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
import yl.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomEngine implements com.otaliastudios.zoom.c {

    /* renamed from: w  reason: collision with root package name */
    public static final b f17265w = new b(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f17266x;

    /* renamed from: y  reason: collision with root package name */
    private static final ZoomLogger f17267y;

    /* renamed from: d  reason: collision with root package name */
    private int f17268d;

    /* renamed from: e  reason: collision with root package name */
    private int f17269e;

    /* renamed from: i  reason: collision with root package name */
    private View f17270i;

    /* renamed from: o  reason: collision with root package name */
    private final a f17271o;

    /* renamed from: p  reason: collision with root package name */
    private final yl.b f17272p;

    /* renamed from: q  reason: collision with root package name */
    private final yl.a f17273q;

    /* renamed from: r  reason: collision with root package name */
    private final bm.b f17274r;

    /* renamed from: s  reason: collision with root package name */
    private final bm.c f17275s;

    /* renamed from: t  reason: collision with root package name */
    private final am.b f17276t;

    /* renamed from: u  reason: collision with root package name */
    private final zl.b f17277u;

    /* renamed from: v  reason: collision with root package name */
    private final zl.a f17278v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a implements ViewTreeObserver.OnGlobalLayoutListener, a.InterfaceC0752a, b.a {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ZoomEngine f17279d;

        /* renamed from: com.otaliastudios.zoom.ZoomEngine$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0202a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17280d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0202a(ZoomEngine zoomEngine) {
                super(1);
                this.f17280d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17280d.L().k(), false);
                applyUpdate.g(false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32056a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f17281d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ScaledPoint scaledPoint) {
                super(1);
                this.f17281d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f17281d, false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32056a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17282d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(ZoomEngine zoomEngine) {
                super(1);
                this.f17282d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17282d.G(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32056a;
            }
        }

        public a(ZoomEngine this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f17279d = this$0;
        }

        @Override // yl.a.InterfaceC0752a
        public void a(int i10) {
            if (i10 != 3) {
                if (i10 != 4) {
                    return;
                }
                this.f17279d.f17277u.e();
                return;
            }
            this.f17279d.f17276t.i();
        }

        @Override // yl.a.InterfaceC0752a
        public void b() {
            this.f17279d.f17272p.b();
        }

        @Override // am.b.a
        public void c(float f10, boolean z10) {
            ZoomEngine.f17267y.h("onMatrixSizeChanged: firstTime:", Boolean.valueOf(z10), "oldZoom:", Float.valueOf(f10), "transformation:", Integer.valueOf(this.f17279d.f17268d), "transformationZoom:", Float.valueOf(this.f17279d.L().k()));
            this.f17279d.f17273q.f();
            if (z10) {
                this.f17279d.L().t(this.f17279d.r());
                this.f17279d.f17276t.h(new C0202a(this.f17279d));
                this.f17279d.f17276t.h(new b(this.f17279d.q()));
            } else {
                this.f17279d.L().t(this.f17279d.r());
                this.f17279d.f17276t.h(new c(this.f17279d));
            }
            ZoomEngine.f17267y.b("onMatrixSizeChanged: newTransformationZoom:", Float.valueOf(this.f17279d.L().k()), "newRealZoom:", Float.valueOf(this.f17279d.G()), "newZoom:", Float.valueOf(this.f17279d.K()));
        }

        @Override // am.b.a
        public void d(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17279d.f17270i;
            if (view != null) {
                view.postOnAnimation(action);
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }

        @Override // yl.a.InterfaceC0752a
        public void e() {
            this.f17279d.f17277u.f();
        }

        @Override // yl.a.InterfaceC0752a
        public boolean f(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17279d.f17277u.h(event);
        }

        @Override // yl.a.InterfaceC0752a
        public boolean g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17279d.f17278v.f(event);
        }

        @Override // yl.a.InterfaceC0752a
        public boolean h(int i10) {
            return this.f17279d.f17276t.z();
        }

        @Override // am.b.a
        public void i() {
            this.f17279d.f17272p.c();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view;
            ZoomEngine zoomEngine = this.f17279d;
            View view2 = zoomEngine.f17270i;
            if (view2 != null) {
                float width = view2.getWidth();
                if (this.f17279d.f17270i != null) {
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

        @Override // am.b.a
        public boolean post(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17279d.f17270i;
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
        final /* synthetic */ float f17283d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17284e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ float f17285i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10, float f11, float f12) {
            super(1);
            this.f17283d = f10;
            this.f17284e = f11;
            this.f17285i = f12;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17283d, false);
            obtain.d(new AbsolutePoint(this.f17284e, this.f17285i), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17286d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17287e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, float f11) {
            super(1);
            this.f17286d = f10;
            this.f17287e = f11;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.b(new AbsolutePoint(this.f17286d, this.f17287e), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final am.b invoke() {
            return ZoomEngine.this.f17276t;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17289d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(float f10) {
            super(1);
            this.f17289d = f10;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17289d, false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements View.OnAttachStateChangeListener {
        h() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().addOnGlobalLayoutListener(ZoomEngine.this.f17271o);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().removeOnGlobalLayoutListener(ZoomEngine.this.f17271o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final am.b invoke() {
            return ZoomEngine.this.f17276t;
        }
    }

    static {
        String TAG = ZoomEngine.class.getSimpleName();
        f17266x = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f17267y = aVar.a(TAG);
    }

    public ZoomEngine(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        a aVar = new a(this);
        this.f17271o = aVar;
        this.f17272p = new yl.b(this);
        yl.a aVar2 = new yl.a(aVar);
        this.f17273q = aVar2;
        bm.b bVar = new bm.b(this, new f());
        this.f17274r = bVar;
        bm.c cVar = new bm.c(this, new i());
        this.f17275s = cVar;
        am.b bVar2 = new am.b(cVar, bVar, aVar2, aVar);
        this.f17276t = bVar2;
        this.f17277u = new zl.b(context, bVar, aVar2, bVar2);
        this.f17278v = new zl.a(context, cVar, bVar, aVar2, bVar2);
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
            com.otaliastudios.zoom.a aVar = com.otaliastudios.zoom.a.f17298a;
            return aVar.e(this.f17274r.e(), 16) | aVar.d(this.f17274r.e(), 1);
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScaledPoint q() {
        float x10 = (x() * G()) - v();
        float w10 = (w() * G()) - u();
        int p10 = p(this.f17269e);
        return new ScaledPoint(-this.f17274r.b(p10, x10, true), -this.f17274r.b(p10, w10, false));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float r() {
        int i10 = this.f17268d;
        if (i10 != 0) {
            if (i10 != 1) {
                return 1.0f;
            }
            float v10 = v() / x();
            float u10 = u() / w();
            f17267y.f("computeTransformationZoom", "centerCrop", "scaleX:", Float.valueOf(v10), "scaleY:", Float.valueOf(u10));
            return Math.max(v10, u10);
        }
        float v11 = v() / x();
        float u11 = u() / w();
        f17267y.f("computeTransformationZoom", "centerInside", "scaleX:", Float.valueOf(v11), "scaleY:", Float.valueOf(u11));
        return Math.min(v11, u11);
    }

    public int A() {
        return this.f17275s.g();
    }

    public float B() {
        return this.f17275s.h();
    }

    public int C() {
        return this.f17275s.j();
    }

    public AbsolutePoint D() {
        return AbsolutePoint.b(this.f17276t.s(), 0.0f, 0.0f, 3, null);
    }

    public float E() {
        return this.f17276t.t();
    }

    public float F() {
        return this.f17276t.u();
    }

    public float G() {
        return this.f17276t.y();
    }

    public ScaledPoint H() {
        return ScaledPoint.b(this.f17276t.v(), 0.0f, 0.0f, 3, null);
    }

    public float I() {
        return this.f17276t.w();
    }

    public float J() {
        return this.f17276t.x();
    }

    public float K() {
        return this.f17275s.n(G());
    }

    public final bm.c L() {
        return this.f17275s;
    }

    public void M(float f10, float f11, float f12, boolean z10) {
        am.c a10 = am.c.f1136l.a(new d(this.f17275s.u(f10), f11, f12));
        if (z10) {
            this.f17276t.e(a10);
            return;
        }
        m();
        this.f17276t.g(a10);
    }

    public void N(Float f10, boolean z10) {
        Float valueOf;
        float floatValue;
        if (f10 == null) {
            valueOf = null;
        } else {
            float floatValue2 = f10.floatValue();
            bm.c cVar = this.f17275s;
            float n10 = cVar.n(cVar.i());
            bm.c cVar2 = this.f17275s;
            valueOf = Float.valueOf(kotlin.ranges.d.l(floatValue2, n10, cVar2.n(cVar2.f())));
        }
        if (valueOf == null) {
            floatValue = K();
        } else {
            floatValue = valueOf.floatValue();
        }
        float u10 = this.f17275s.u(floatValue);
        M(floatValue, -((x() / 2.0f) - ((v() / u10) / 2.0f)), -((w() / 2.0f) - ((u() / u10) / 2.0f)), z10);
    }

    public final boolean O(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17273q.h(ev2);
    }

    public final boolean P(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17273q.i(ev2);
    }

    public void Q(float f10, float f11, boolean z10) {
        am.c a10 = am.c.f1136l.a(new e(f10, f11));
        if (z10) {
            this.f17276t.e(a10);
            return;
        }
        m();
        this.f17276t.g(a10);
    }

    public void R(float f10, float f11, boolean z10) {
        Q(f10 - E(), f11 - F(), z10);
    }

    public void S(float f10, boolean z10) {
        am.c a10 = am.c.f1136l.a(new g(f10));
        if (z10) {
            this.f17276t.e(a10);
            return;
        }
        m();
        this.f17276t.g(a10);
    }

    public void T(int i10) {
        this.f17274r.o(i10);
    }

    public void U(boolean z10) {
        this.f17277u.j(z10);
    }

    public void V(long j10) {
        this.f17276t.D(j10);
    }

    public final void W(View container) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (this.f17270i == null) {
            this.f17270i = container;
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
        this.f17276t.E(f10, f11, z10);
    }

    public final void Z(float f10, float f11, boolean z10) {
        this.f17276t.F(f10, f11, z10);
    }

    public void b0(boolean z10) {
        this.f17277u.i(z10);
    }

    public void c0(boolean z10) {
        this.f17274r.q(z10);
    }

    public void d0(float f10) {
        c.a.a(this, f10);
    }

    public void e0(float f10) {
        c.a.b(this, f10);
    }

    public void f0(boolean z10) {
        this.f17277u.k(z10);
    }

    public void g0(OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17274r.r(provider);
    }

    public void h0(boolean z10) {
        this.f17275s.r(z10);
    }

    public void i0(boolean z10) {
        this.f17274r.p(z10);
    }

    public void j0(boolean z10) {
        this.f17274r.s(z10);
    }

    public void k0(OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17275s.s(provider);
    }

    public final void l(c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f17270i != null) {
            this.f17272p.a(listener);
            return;
        }
        throw new IllegalStateException("container is not initialized.");
    }

    public void l0(boolean z10) {
        this.f17277u.l(z10);
    }

    public boolean m() {
        if (this.f17273q.b()) {
            this.f17277u.e();
            return true;
        } else if (this.f17273q.a()) {
            this.f17273q.f();
            return true;
        } else {
            return false;
        }
    }

    public void m0(boolean z10) {
        this.f17277u.m(z10);
    }

    public final int n() {
        return (int) (-this.f17276t.w());
    }

    public void n0(int i10) {
        c.a.c(this, i10);
    }

    public final int o() {
        return (int) this.f17276t.p();
    }

    public void o0(boolean z10) {
        this.f17277u.n(z10);
    }

    public void p0(boolean z10) {
        this.f17274r.t(z10);
    }

    public void q0(boolean z10) {
        this.f17275s.o(z10);
    }

    public void r0(float f10, boolean z10) {
        u0(K() * f10, z10);
    }

    public final int s() {
        return (int) (-this.f17276t.x());
    }

    public void s0() {
        r0(1.3f, true);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.f17275s.p(f10, i10);
        if (K() > this.f17275s.f()) {
            S(this.f17275s.f(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.f17275s.q(f10, i10);
        if (G() <= this.f17275s.i()) {
            S(this.f17275s.i(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.f17268d = i10;
        this.f17269e = i11;
    }

    public final int t() {
        return (int) this.f17276t.o();
    }

    public void t0() {
        r0(0.7f, true);
    }

    public final float u() {
        return this.f17276t.l();
    }

    public void u0(float f10, boolean z10) {
        S(this.f17275s.u(f10), z10);
    }

    public final float v() {
        return this.f17276t.m();
    }

    public final float w() {
        return this.f17276t.n();
    }

    public final float x() {
        return this.f17276t.q();
    }

    public final Matrix y() {
        return this.f17276t.r();
    }

    public float z() {
        return this.f17275s.e();
    }
}
