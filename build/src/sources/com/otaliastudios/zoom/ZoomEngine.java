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
import tl.a;
import vl.b;
import vl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomEngine implements com.otaliastudios.zoom.c {

    /* renamed from: w  reason: collision with root package name */
    public static final b f16879w = new b(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f16880x;

    /* renamed from: y  reason: collision with root package name */
    private static final ZoomLogger f16881y;

    /* renamed from: d  reason: collision with root package name */
    private int f16882d;

    /* renamed from: e  reason: collision with root package name */
    private int f16883e;

    /* renamed from: i  reason: collision with root package name */
    private View f16884i;

    /* renamed from: o  reason: collision with root package name */
    private final a f16885o;

    /* renamed from: p  reason: collision with root package name */
    private final tl.b f16886p;

    /* renamed from: q  reason: collision with root package name */
    private final tl.a f16887q;

    /* renamed from: r  reason: collision with root package name */
    private final wl.b f16888r;

    /* renamed from: s  reason: collision with root package name */
    private final wl.c f16889s;

    /* renamed from: t  reason: collision with root package name */
    private final vl.b f16890t;

    /* renamed from: u  reason: collision with root package name */
    private final ul.b f16891u;

    /* renamed from: v  reason: collision with root package name */
    private final ul.a f16892v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a implements ViewTreeObserver.OnGlobalLayoutListener, a.InterfaceC0624a, b.a {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ZoomEngine f16893d;

        /* renamed from: com.otaliastudios.zoom.ZoomEngine$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0192a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f16894d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0192a(ZoomEngine zoomEngine) {
                super(1);
                this.f16894d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f16894d.L().k(), false);
                applyUpdate.g(false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32464a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f16895d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ScaledPoint scaledPoint) {
                super(1);
                this.f16895d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f16895d, false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32464a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ZoomEngine f16896d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(ZoomEngine zoomEngine) {
                super(1);
                this.f16896d = zoomEngine;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.i(this.f16896d.G(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32464a;
            }
        }

        public a(ZoomEngine this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f16893d = this$0;
        }

        @Override // tl.a.InterfaceC0624a
        public void a(int i10) {
            if (i10 != 3) {
                if (i10 != 4) {
                    return;
                }
                this.f16893d.f16891u.e();
                return;
            }
            this.f16893d.f16890t.i();
        }

        @Override // tl.a.InterfaceC0624a
        public void b() {
            this.f16893d.f16886p.b();
        }

        @Override // vl.b.a
        public void c(float f10, boolean z10) {
            ZoomEngine.f16881y.h("onMatrixSizeChanged: firstTime:", Boolean.valueOf(z10), "oldZoom:", Float.valueOf(f10), "transformation:", Integer.valueOf(this.f16893d.f16882d), "transformationZoom:", Float.valueOf(this.f16893d.L().k()));
            this.f16893d.f16887q.f();
            if (z10) {
                this.f16893d.L().t(this.f16893d.r());
                this.f16893d.f16890t.g(new C0192a(this.f16893d));
                this.f16893d.f16890t.g(new b(this.f16893d.q()));
            } else {
                this.f16893d.L().t(this.f16893d.r());
                this.f16893d.f16890t.g(new c(this.f16893d));
            }
            ZoomEngine.f16881y.b("onMatrixSizeChanged: newTransformationZoom:", Float.valueOf(this.f16893d.L().k()), "newRealZoom:", Float.valueOf(this.f16893d.G()), "newZoom:", Float.valueOf(this.f16893d.K()));
        }

        @Override // vl.b.a
        public void d(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f16893d.f16884i;
            if (view != null) {
                view.postOnAnimation(action);
            } else {
                Intrinsics.throwUninitializedPropertyAccessException("container");
                throw null;
            }
        }

        @Override // tl.a.InterfaceC0624a
        public void e() {
            this.f16893d.f16891u.f();
        }

        @Override // tl.a.InterfaceC0624a
        public boolean f(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f16893d.f16891u.h(event);
        }

        @Override // tl.a.InterfaceC0624a
        public boolean g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            return this.f16893d.f16892v.f(event);
        }

        @Override // tl.a.InterfaceC0624a
        public boolean h(int i10) {
            return this.f16893d.f16890t.z();
        }

        @Override // vl.b.a
        public void i() {
            this.f16893d.f16886p.c();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view;
            ZoomEngine zoomEngine = this.f16893d;
            View view2 = zoomEngine.f16884i;
            if (view2 != null) {
                float width = view2.getWidth();
                if (this.f16893d.f16884i != null) {
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

        @Override // vl.b.a
        public boolean post(Runnable action) {
            Intrinsics.checkNotNullParameter(action, "action");
            View view = this.f16893d.f16884i;
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
        final /* synthetic */ float f16897d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f16898e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ float f16899i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10, float f11, float f12) {
            super(1);
            this.f16897d = f10;
            this.f16898e = f11;
            this.f16899i = f12;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f16897d, false);
            obtain.d(new AbsolutePoint(this.f16898e, this.f16899i), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f16900d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f16901e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, float f11) {
            super(1);
            this.f16900d = f10;
            this.f16901e = f11;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.b(new AbsolutePoint(this.f16900d, this.f16901e), false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final vl.b invoke() {
            return ZoomEngine.this.f16890t;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f16903d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(float f10) {
            super(1);
            this.f16903d = f10;
        }

        public final void a(c.a obtain) {
            Intrinsics.checkNotNullParameter(obtain, "$this$obtain");
            obtain.i(this.f16903d, false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements View.OnAttachStateChangeListener {
        h() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().addOnGlobalLayoutListener(ZoomEngine.this.f16885o);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.getViewTreeObserver().removeOnGlobalLayoutListener(ZoomEngine.this.f16885o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final vl.b invoke() {
            return ZoomEngine.this.f16890t;
        }
    }

    static {
        String TAG = ZoomEngine.class.getSimpleName();
        f16880x = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f16881y = aVar.a(TAG);
    }

    public ZoomEngine(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        a aVar = new a(this);
        this.f16885o = aVar;
        this.f16886p = new tl.b(this);
        tl.a aVar2 = new tl.a(aVar);
        this.f16887q = aVar2;
        wl.b bVar = new wl.b(this, new f());
        this.f16888r = bVar;
        wl.c cVar = new wl.c(this, new i());
        this.f16889s = cVar;
        vl.b bVar2 = new vl.b(cVar, bVar, aVar2, aVar);
        this.f16890t = bVar2;
        this.f16891u = new ul.b(context, bVar, aVar2, bVar2);
        this.f16892v = new ul.a(context, cVar, bVar, aVar2, bVar2);
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
            com.otaliastudios.zoom.a aVar = com.otaliastudios.zoom.a.f16912a;
            return aVar.e(this.f16888r.e(), 16) | aVar.d(this.f16888r.e(), 1);
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScaledPoint q() {
        float x10 = (x() * G()) - v();
        float w10 = (w() * G()) - u();
        int p10 = p(this.f16883e);
        return new ScaledPoint(-this.f16888r.b(p10, x10, true), -this.f16888r.b(p10, w10, false));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float r() {
        int i10 = this.f16882d;
        if (i10 != 0) {
            if (i10 != 1) {
                return 1.0f;
            }
            float v10 = v() / x();
            float u10 = u() / w();
            f16881y.f("computeTransformationZoom", "centerCrop", "scaleX:", Float.valueOf(v10), "scaleY:", Float.valueOf(u10));
            return Math.max(v10, u10);
        }
        float v11 = v() / x();
        float u11 = u() / w();
        f16881y.f("computeTransformationZoom", "centerInside", "scaleX:", Float.valueOf(v11), "scaleY:", Float.valueOf(u11));
        return Math.min(v11, u11);
    }

    public int A() {
        return this.f16889s.g();
    }

    public float B() {
        return this.f16889s.h();
    }

    public int C() {
        return this.f16889s.j();
    }

    public AbsolutePoint D() {
        return AbsolutePoint.b(this.f16890t.s(), 0.0f, 0.0f, 3, null);
    }

    public float E() {
        return this.f16890t.t();
    }

    public float F() {
        return this.f16890t.u();
    }

    public float G() {
        return this.f16890t.y();
    }

    public ScaledPoint H() {
        return ScaledPoint.b(this.f16890t.v(), 0.0f, 0.0f, 3, null);
    }

    public float I() {
        return this.f16890t.w();
    }

    public float J() {
        return this.f16890t.x();
    }

    public float K() {
        return this.f16889s.n(G());
    }

    public final wl.c L() {
        return this.f16889s;
    }

    public void M(float f10, float f11, float f12, boolean z10) {
        vl.c a10 = vl.c.f51660l.a(new d(this.f16889s.u(f10), f11, f12));
        if (z10) {
            this.f16890t.f(a10);
            return;
        }
        m();
        this.f16890t.h(a10);
    }

    public void N(Float f10, boolean z10) {
        Float valueOf;
        float floatValue;
        if (f10 == null) {
            valueOf = null;
        } else {
            float floatValue2 = f10.floatValue();
            wl.c cVar = this.f16889s;
            float n10 = cVar.n(cVar.i());
            wl.c cVar2 = this.f16889s;
            valueOf = Float.valueOf(kotlin.ranges.d.l(floatValue2, n10, cVar2.n(cVar2.f())));
        }
        if (valueOf == null) {
            floatValue = K();
        } else {
            floatValue = valueOf.floatValue();
        }
        float u10 = this.f16889s.u(floatValue);
        M(floatValue, -((x() / 2.0f) - ((v() / u10) / 2.0f)), -((w() / 2.0f) - ((u() / u10) / 2.0f)), z10);
    }

    public final boolean O(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f16887q.h(ev2);
    }

    public final boolean P(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return this.f16887q.i(ev2);
    }

    public void Q(float f10, float f11, boolean z10) {
        vl.c a10 = vl.c.f51660l.a(new e(f10, f11));
        if (z10) {
            this.f16890t.f(a10);
            return;
        }
        m();
        this.f16890t.h(a10);
    }

    public void R(float f10, float f11, boolean z10) {
        Q(f10 - E(), f11 - F(), z10);
    }

    public void S(float f10, boolean z10) {
        vl.c a10 = vl.c.f51660l.a(new g(f10));
        if (z10) {
            this.f16890t.f(a10);
            return;
        }
        m();
        this.f16890t.h(a10);
    }

    public void T(int i10) {
        this.f16888r.o(i10);
    }

    public void U(boolean z10) {
        this.f16891u.j(z10);
    }

    public void V(long j10) {
        this.f16890t.D(j10);
    }

    public final void W(View container) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (this.f16884i == null) {
            this.f16884i = container;
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
        this.f16890t.E(f10, f11, z10);
    }

    public final void Z(float f10, float f11, boolean z10) {
        this.f16890t.F(f10, f11, z10);
    }

    public void b0(boolean z10) {
        this.f16891u.i(z10);
    }

    public void c0(boolean z10) {
        this.f16888r.q(z10);
    }

    public void d0(float f10) {
        c.a.a(this, f10);
    }

    public void e0(float f10) {
        c.a.b(this, f10);
    }

    public void f0(boolean z10) {
        this.f16891u.k(z10);
    }

    public void g0(OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f16888r.r(provider);
    }

    public void h0(boolean z10) {
        this.f16889s.r(z10);
    }

    public void i0(boolean z10) {
        this.f16888r.p(z10);
    }

    public void j0(boolean z10) {
        this.f16888r.s(z10);
    }

    public void k0(OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f16889s.s(provider);
    }

    public final void l(c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f16884i != null) {
            this.f16886p.a(listener);
            return;
        }
        throw new IllegalStateException("container is not initialized.");
    }

    public void l0(boolean z10) {
        this.f16891u.l(z10);
    }

    public boolean m() {
        if (this.f16887q.b()) {
            this.f16891u.e();
            return true;
        } else if (this.f16887q.a()) {
            this.f16887q.f();
            return true;
        } else {
            return false;
        }
    }

    public void m0(boolean z10) {
        this.f16891u.m(z10);
    }

    public final int n() {
        return (int) (-this.f16890t.w());
    }

    public void n0(int i10) {
        c.a.c(this, i10);
    }

    public final int o() {
        return (int) this.f16890t.p();
    }

    public void o0(boolean z10) {
        this.f16891u.n(z10);
    }

    public void p0(boolean z10) {
        this.f16888r.t(z10);
    }

    public void q0(boolean z10) {
        this.f16889s.o(z10);
    }

    public void r0(float f10, boolean z10) {
        u0(K() * f10, z10);
    }

    public final int s() {
        return (int) (-this.f16890t.x());
    }

    public void s0() {
        r0(1.3f, true);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.f16889s.p(f10, i10);
        if (K() > this.f16889s.f()) {
            S(this.f16889s.f(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.f16889s.q(f10, i10);
        if (G() <= this.f16889s.i()) {
            S(this.f16889s.i(), true);
        }
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.f16882d = i10;
        this.f16883e = i11;
    }

    public final int t() {
        return (int) this.f16890t.o();
    }

    public void t0() {
        r0(0.7f, true);
    }

    public final float u() {
        return this.f16890t.l();
    }

    public void u0(float f10, boolean z10) {
        S(this.f16889s.u(f10), z10);
    }

    public final float v() {
        return this.f16890t.m();
    }

    public final float w() {
        return this.f16890t.n();
    }

    public final float x() {
        return this.f16890t.q();
    }

    public final Matrix y() {
        return this.f16890t.r();
    }

    public float z() {
        return this.f16889s.e();
    }
}
