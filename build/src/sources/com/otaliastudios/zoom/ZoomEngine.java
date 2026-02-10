package com.otaliastudios.zoom;

import android.content.Context;
import android.graphics.Matrix;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import bm.b;
import bm.c;
import com.otaliastudios.zoom.ZoomLogger;
import com.otaliastudios.zoom.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import zl.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomEngine implements com.otaliastudios.zoom.c {

    /* renamed from: w  reason: collision with root package name */
    public static final b f17405w = new b(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f17406x;

    /* renamed from: y  reason: collision with root package name */
    private static final ZoomLogger f17407y;

    /* renamed from: d  reason: collision with root package name */
    private int f17408d;

    /* renamed from: e  reason: collision with root package name */
    private int f17409e;

    /* renamed from: i  reason: collision with root package name */
    private View f17410i;

    /* renamed from: o  reason: collision with root package name */
    private final a f17411o;

    /* renamed from: p  reason: collision with root package name */
    private final zl.b f17412p;

    /* renamed from: q  reason: collision with root package name */
    private final zl.a f17413q;

    /* renamed from: r  reason: collision with root package name */
    private final cm.b f17414r;

    /* renamed from: s  reason: collision with root package name */
    private final cm.c f17415s;

    /* renamed from: t  reason: collision with root package name */
    private final bm.b f17416t;

    /* renamed from: u  reason: collision with root package name */
    private final am.b f17417u;

    /* renamed from: v  reason: collision with root package name */
    private final am.a f17418v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a implements ViewTreeObserver.OnGlobalLayoutListener, a.InterfaceC0802a, b.a {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ZoomEngine f17419d;

        /* renamed from: com.otaliastudios.zoom.ZoomEngine$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0229a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17420d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0229a(ZoomEngine zoomEngine) {
                super(1);
                this.f17420d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17420d.L().k(), false);
                applyUpdate.g(false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31765a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f17421d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ScaledPoint scaledPoint) {
                super(1);
                this.f17421d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f17421d, false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31765a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f17422d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(ZoomEngine zoomEngine) {
                super(1);
                this.f17422d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f17422d.G(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31765a;
            }
        }

        public a(ZoomEngine this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f17419d = this$0;
        }

        @Override // zl.a.InterfaceC0802a
        public void a(int i10) {
            if (i10 != 3) {
                if (i10 != 4) {
                    return;
                }
                this.f17419d.f17417u.e();
                return;
            }
            this.f17419d.f17416t.i();
        }

        @Override // zl.a.InterfaceC0802a
        public void b() {
            this.f17419d.f17412p.b();
        }

        @Override // bm.b.a
        public void c(float f10, boolean z10) {
            ZoomEngine.f17407y.h("onMatrixSizeChanged: firstTime:", Boolean.valueOf(z10), "oldZoom:", Float.valueOf(f10), "transformation:", Integer.valueOf(this.f17419d.f17408d), "transformationZoom:", Float.valueOf(this.f17419d.L().k()));
            this.f17419d.f17413q.f();
            if (z10) {
                this.f17419d.L().t(this.f17419d.r());
                this.f17419d.f17416t.h(new C0229a(this.f17419d));
                this.f17419d.f17416t.h(new b(this.f17419d.q()));
            } else {
                this.f17419d.L().t(this.f17419d.r());
                this.f17419d.f17416t.h(new c(this.f17419d));
            }
            ZoomEngine.f17407y.b("onMatrixSizeChanged: newTransformationZoom:", Float.valueOf(this.f17419d.L().k()), "newRealZoom:", Float.valueOf(this.f17419d.G()), "newZoom:", Float.valueOf(this.f17419d.K()));
        }

        @Override // bm.b.a
        public void d(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17419d.f17410i;
            if (view != null) {
                view.postOnAnimation(action);
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }

        @Override // zl.a.InterfaceC0802a
        public void e() {
            this.f17419d.f17417u.f();
        }

        @Override // zl.a.InterfaceC0802a
        public boolean f(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17419d.f17417u.h(event);
        }

        @Override // zl.a.InterfaceC0802a
        public boolean g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f17419d.f17418v.f(event);
        }

        @Override // zl.a.InterfaceC0802a
        public boolean h(int i10) {
            return this.f17419d.f17416t.z();
        }

        @Override // bm.b.a
        public void i() {
            this.f17419d.f17412p.c();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view;
            ZoomEngine zoomEngine = this.f17419d;
            View view2 = zoomEngine.f17410i;
            if (view2 != null) {
                float width = view2.getWidth();
                if (this.f17419d.f17410i != null) {
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

        @Override // bm.b.a
        public boolean post(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f17419d.f17410i;
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
        final /* synthetic */ float f17423d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17424e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ float f17425i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10, float f11, float f12) {
            super(1);
            this.f17423d = f10;
            this.f17424e = f11;
            this.f17425i = f12;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17423d, false);
            obtain.d(new AbsolutePoint(this.f17424e, this.f17425i), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17426d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f17427e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, float f11) {
            super(1);
            this.f17426d = f10;
            this.f17427e = f11;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.b(new AbsolutePoint(this.f17426d, this.f17427e), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final bm.b invoke() {
            return ZoomEngine.this.f17416t;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f17429d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(float f10) {
            super(1);
            this.f17429d = f10;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f17429d, false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements View.OnAttachStateChangeListener {
        h() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().addOnGlobalLayoutListener(ZoomEngine.this.f17411o);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().removeOnGlobalLayoutListener(ZoomEngine.this.f17411o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final bm.b invoke() {
            return ZoomEngine.this.f17416t;
        }
    }

    static {
        String TAG = ZoomEngine.class.getSimpleName();
        f17406x = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17433b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f17407y = aVar.a(TAG);
    }

    public ZoomEngine(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        a aVar = new a(this);
        this.f17411o = aVar;
        this.f17412p = new zl.b(this);
        zl.a aVar2 = new zl.a(aVar);
        this.f17413q = aVar2;
        cm.b bVar = new cm.b(this, new f());
        this.f17414r = bVar;
        cm.c cVar = new cm.c(this, new i());
        this.f17415s = cVar;
        bm.b bVar2 = new bm.b(cVar, bVar, aVar2, aVar);
        this.f17416t = bVar2;
        this.f17417u = new am.b(context, bVar, aVar2, bVar2);
        this.f17418v = new am.a(context, cVar, bVar, aVar2, bVar2);
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
            com.otaliastudios.zoom.a aVar = com.otaliastudios.zoom.a.f17438a;
            return aVar.e(this.f17414r.e(), 16) | aVar.d(this.f17414r.e(), 1);
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScaledPoint q() {
        float x10 = (x() * G()) - v();
        float w10 = (w() * G()) - u();
        int p10 = p(this.f17409e);
        return new ScaledPoint(-this.f17414r.b(p10, x10, true), -this.f17414r.b(p10, w10, false));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float r() {
        int i10 = this.f17408d;
        if (i10 != 0) {
            if (i10 != 1) {
                return 1.0f;
            }
            float v10 = v() / x();
            float u10 = u() / w();
            f17407y.f("computeTransformationZoom", "centerCrop", "scaleX:", Float.valueOf(v10), "scaleY:", Float.valueOf(u10));
            return Math.max(v10, u10);
        }
        float v11 = v() / x();
        float u11 = u() / w();
        f17407y.f("computeTransformationZoom", "centerInside", "scaleX:", Float.valueOf(v11), "scaleY:", Float.valueOf(u11));
        return Math.min(v11, u11);
    }

    public int A() {
        return this.f17415s.g();
    }

    public float B() {
        return this.f17415s.h();
    }

    public int C() {
        return this.f17415s.j();
    }

    public AbsolutePoint D() {
        return AbsolutePoint.b(this.f17416t.s(), 0.0f, 0.0f, 3, null);
    }

    public float E() {
        return this.f17416t.t();
    }

    public float F() {
        return this.f17416t.u();
    }

    public float G() {
        return this.f17416t.y();
    }

    public ScaledPoint H() {
        return ScaledPoint.b(this.f17416t.v(), 0.0f, 0.0f, 3, null);
    }

    public float I() {
        return this.f17416t.w();
    }

    public float J() {
        return this.f17416t.x();
    }

    public float K() {
        return this.f17415s.n(G());
    }

    public final cm.c L() {
        return this.f17415s;
    }

    public void M(float f10, float f11, float f12, boolean z10) {
        bm.c a10 = bm.c.f7124l.a(new d(this.f17415s.u(f10), f11, f12));
        if (z10) {
            this.f17416t.e(a10);
            return;
        }
        m();
        this.f17416t.g(a10);
    }

    public void N(Float f10, boolean z10) {
        Float valueOf;
        float floatValue;
        if (f10 == null) {
            valueOf = null;
        } else {
            float floatValue2 = f10.floatValue();
            cm.c cVar = this.f17415s;
            float n10 = cVar.n(cVar.i());
            cm.c cVar2 = this.f17415s;
            valueOf = Float.valueOf(kotlin.ranges.d.l(floatValue2, n10, cVar2.n(cVar2.f())));
        }
        if (valueOf == null) {
            floatValue = K();
        } else {
            floatValue = valueOf.floatValue();
        }
        float u10 = this.f17415s.u(floatValue);
        M(floatValue, -((x() / 2.0f) - ((v() / u10) / 2.0f)), -((w() / 2.0f) - ((u() / u10) / 2.0f)), z10);
    }

    public final boolean O(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17413q.h(ev2);
    }

    public final boolean P(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f17413q.i(ev2);
    }

    public void Q(float f10, float f11, boolean z10) {
        bm.c a10 = bm.c.f7124l.a(new e(f10, f11));
        if (z10) {
            this.f17416t.e(a10);
            return;
        }
        m();
        this.f17416t.g(a10);
    }

    public void R(float f10, float f11, boolean z10) {
        Q(f10 - E(), f11 - F(), z10);
    }

    public void S(float f10, boolean z10) {
        bm.c a10 = bm.c.f7124l.a(new g(f10));
        if (z10) {
            this.f17416t.e(a10);
            return;
        }
        m();
        this.f17416t.g(a10);
    }

    public void T(int i10) {
        this.f17414r.o(i10);
    }

    public void U(boolean z10) {
        this.f17417u.j(z10);
    }

    public void V(long j10) {
        this.f17416t.D(j10);
    }

    public final void W(View container) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (this.f17410i == null) {
            this.f17410i = container;
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
        this.f17416t.E(f10, f11, z10);
    }

    public final void Z(float f10, float f11, boolean z10) {
        this.f17416t.F(f10, f11, z10);
    }

    public void b0(boolean z10) {
        this.f17417u.i(z10);
    }

    public void c0(boolean z10) {
        this.f17414r.q(z10);
    }

    public void d0(float f10) {
        c.a.a(this, f10);
    }

    public void e0(float f10) {
        c.a.b(this, f10);
    }

    public void f0(boolean z10) {
        this.f17417u.k(z10);
    }

    public void g0(OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17414r.r(provider);
    }

    public void h0(boolean z10) {
        this.f17415s.r(z10);
    }

    public void i0(boolean z10) {
        this.f17414r.p(z10);
    }

    public void j0(boolean z10) {
        this.f17414r.s(z10);
    }

    public void k0(OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f17415s.s(provider);
    }

    public final void l(c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f17410i != null) {
            this.f17412p.a(listener);
            return;
        }
        throw new IllegalStateException("container is not initialized.");
    }

    public void l0(boolean z10) {
        this.f17417u.l(z10);
    }

    public boolean m() {
        if (this.f17413q.b()) {
            this.f17417u.e();
            return true;
        } else if (this.f17413q.a()) {
            this.f17413q.f();
            return true;
        } else {
            return false;
        }
    }

    public void m0(boolean z10) {
        this.f17417u.m(z10);
    }

    public final int n() {
        return (int) (-this.f17416t.w());
    }

    public void n0(int i10) {
        c.a.c(this, i10);
    }

    public final int o() {
        return (int) this.f17416t.p();
    }

    public void o0(boolean z10) {
        this.f17417u.n(z10);
    }

    public void p0(boolean z10) {
        this.f17414r.t(z10);
    }

    public void q0(boolean z10) {
        this.f17415s.o(z10);
    }

    public void r0(float f10, boolean z10) {
        u0(K() * f10, z10);
    }

    public final int s() {
        return (int) (-this.f17416t.x());
    }

    public void s0() {
        r0(1.3f, true);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.f17415s.p(f10, i10);
        if (K() > this.f17415s.f()) {
            S(this.f17415s.f(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.f17415s.q(f10, i10);
        if (G() <= this.f17415s.i()) {
            S(this.f17415s.i(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.f17408d = i10;
        this.f17409e = i11;
    }

    public final int t() {
        return (int) this.f17416t.o();
    }

    public void t0() {
        r0(0.7f, true);
    }

    public final float u() {
        return this.f17416t.l();
    }

    public void u0(float f10, boolean z10) {
        S(this.f17415s.u(f10), z10);
    }

    public final float v() {
        return this.f17416t.m();
    }

    public final float w() {
        return this.f17416t.n();
    }

    public final float x() {
        return this.f17416t.q();
    }

    public final Matrix y() {
        return this.f17416t.r();
    }

    public float z() {
        return this.f17415s.e();
    }
}
