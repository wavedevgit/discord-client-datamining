package j0;

import a0.m2;
import a0.w0;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import android.view.Surface;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import j0.l0;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import x.l1;
import x.w1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f29898a;

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f29899b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f29900c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f29901d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f29902e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29903f;

    /* renamed from: g  reason: collision with root package name */
    private final m2 f29904g;

    /* renamed from: h  reason: collision with root package name */
    private int f29905h;

    /* renamed from: i  reason: collision with root package name */
    private int f29906i;

    /* renamed from: k  reason: collision with root package name */
    private w1 f29908k;

    /* renamed from: l  reason: collision with root package name */
    private a f29909l;

    /* renamed from: j  reason: collision with root package name */
    private boolean f29907j = false;

    /* renamed from: m  reason: collision with root package name */
    private final Set f29910m = new HashSet();

    /* renamed from: n  reason: collision with root package name */
    private boolean f29911n = false;

    /* renamed from: o  reason: collision with root package name */
    private final List f29912o = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends w0 {

        /* renamed from: o  reason: collision with root package name */
        final ListenableFuture f29913o;

        /* renamed from: p  reason: collision with root package name */
        c.a f29914p;

        /* renamed from: q  reason: collision with root package name */
        private w0 f29915q;

        /* renamed from: r  reason: collision with root package name */
        private o0 f29916r;

        a(Size size, int i10) {
            super(size, i10);
            this.f29913o = androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: j0.j0
                @Override // androidx.concurrent.futures.c.InterfaceC0029c
                public final Object a(c.a aVar) {
                    return l0.a.r(l0.a.this, aVar);
                }
            });
        }

        public static /* synthetic */ void q(a aVar) {
            o0 o0Var = aVar.f29916r;
            if (o0Var != null) {
                o0Var.p();
            }
            if (aVar.f29915q == null) {
                aVar.f29914p.d();
            }
        }

        public static /* synthetic */ Object r(a aVar, c.a aVar2) {
            aVar.f29914p = aVar2;
            return "SettableFuture hashCode: " + aVar.hashCode();
        }

        @Override // a0.w0
        public void d() {
            super.d();
            b0.p.d(new Runnable() { // from class: j0.i0
                @Override // java.lang.Runnable
                public final void run() {
                    l0.a.q(l0.a.this);
                }
            });
        }

        @Override // a0.w0
        protected ListenableFuture o() {
            return this.f29913o;
        }

        boolean s() {
            b0.p.a();
            if (this.f29915q == null && !m()) {
                return true;
            }
            return false;
        }

        public void t(o0 o0Var) {
            boolean z10;
            if (this.f29916r == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "Consumer can only be linked once.");
            this.f29916r = o0Var;
        }

        public boolean u(final w0 w0Var, Runnable runnable) {
            boolean z10;
            b0.p.a();
            b2.e.g(w0Var);
            w0 w0Var2 = this.f29915q;
            boolean z11 = false;
            if (w0Var2 == w0Var) {
                return false;
            }
            if (w0Var2 == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "A different provider has been set. To change the provider, call SurfaceEdge#invalidate before calling SurfaceEdge#setProvider");
            b2.e.b(h().equals(w0Var.h()), String.format("The provider's size(%s) must match the parent(%s)", h(), w0Var.h()));
            if (i() == w0Var.i()) {
                z11 = true;
            }
            b2.e.b(z11, String.format("The provider's format(%s) must match the parent(%s)", Integer.valueOf(i()), Integer.valueOf(w0Var.i())));
            b2.e.j(!m(), "The parent is closed. Call SurfaceEdge#invalidate() before setting a new provider.");
            this.f29915q = w0Var;
            d0.n.t(w0Var.j(), this.f29914p);
            w0Var.l();
            k().a(new Runnable() { // from class: j0.k0
                @Override // java.lang.Runnable
                public final void run() {
                    w0.this.e();
                }
            }, c0.a.a());
            w0Var.f().a(runnable, c0.a.d());
            return true;
        }
    }

    public l0(int i10, int i11, m2 m2Var, Matrix matrix, boolean z10, Rect rect, int i12, int i13, boolean z11) {
        this.f29903f = i10;
        this.f29898a = i11;
        this.f29904g = m2Var;
        this.f29899b = matrix;
        this.f29900c = z10;
        this.f29901d = rect;
        this.f29906i = i12;
        this.f29905h = i13;
        this.f29902e = z11;
        this.f29909l = new a(m2Var.e(), i11);
    }

    public static /* synthetic */ void a(final l0 l0Var) {
        l0Var.getClass();
        c0.a.d().execute(new Runnable() { // from class: j0.h0
            @Override // java.lang.Runnable
            public final void run() {
                l0.b(l0.this);
            }
        });
    }

    public static /* synthetic */ void b(l0 l0Var) {
        if (!l0Var.f29911n) {
            l0Var.u();
        }
    }

    public static /* synthetic */ void c(l0 l0Var, int i10, int i11) {
        boolean z10;
        boolean z11 = true;
        if (l0Var.f29906i != i10) {
            l0Var.f29906i = i10;
            z10 = true;
        } else {
            z10 = false;
        }
        if (l0Var.f29905h != i11) {
            l0Var.f29905h = i11;
        } else {
            z11 = z10;
        }
        if (z11) {
            l0Var.w();
        }
    }

    public static /* synthetic */ ListenableFuture d(l0 l0Var, final a aVar, int i10, l1.a aVar2, l1.a aVar3, Surface surface) {
        l0Var.getClass();
        b2.e.g(surface);
        try {
            aVar.l();
            o0 o0Var = new o0(surface, l0Var.s(), i10, l0Var.f29904g.e(), aVar2, aVar3, l0Var.f29899b);
            o0Var.n().a(new Runnable() { // from class: j0.b0
                @Override // java.lang.Runnable
                public final void run() {
                    l0.a.this.e();
                }
            }, c0.a.a());
            aVar.t(o0Var);
            return d0.n.p(o0Var);
        } catch (w0.a e10) {
            return d0.n.n(e10);
        }
    }

    private void g() {
        b2.e.j(!this.f29907j, "Consumer can only be linked once.");
        this.f29907j = true;
    }

    private void h() {
        b2.e.j(!this.f29911n, "Edge is already closed.");
    }

    private void w() {
        b0.p.a();
        w1.h g10 = w1.h.g(this.f29901d, this.f29906i, this.f29905h, t(), this.f29899b, this.f29902e);
        w1 w1Var = this.f29908k;
        if (w1Var != null) {
            w1Var.u(g10);
        }
        for (Consumer consumer : this.f29912o) {
            consumer.accept(g10);
        }
    }

    public void e(Runnable runnable) {
        b0.p.a();
        h();
        this.f29910m.add(runnable);
    }

    public void f(Consumer consumer) {
        b2.e.g(consumer);
        this.f29912o.add(consumer);
    }

    public final void i() {
        b0.p.a();
        this.f29909l.d();
        this.f29911n = true;
    }

    public ListenableFuture j(final int i10, final l1.a aVar, final l1.a aVar2) {
        b0.p.a();
        h();
        g();
        final a aVar3 = this.f29909l;
        return d0.n.y(aVar3.j(), new d0.a() { // from class: j0.g0
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                return l0.d(l0.this, aVar3, i10, aVar, aVar2, (Surface) obj);
            }
        }, c0.a.d());
    }

    public w1 k(a0.e0 e0Var) {
        return l(e0Var, true);
    }

    public w1 l(a0.e0 e0Var, boolean z10) {
        b0.p.a();
        h();
        w1 w1Var = new w1(this.f29904g.e(), e0Var, z10, this.f29904g.b(), this.f29904g.c(), new Runnable() { // from class: j0.c0
            @Override // java.lang.Runnable
            public final void run() {
                l0.a(l0.this);
            }
        });
        try {
            final w0 m10 = w1Var.m();
            a aVar = this.f29909l;
            Objects.requireNonNull(aVar);
            if (aVar.u(m10, new d0(aVar))) {
                ListenableFuture k10 = aVar.k();
                Objects.requireNonNull(m10);
                k10.a(new Runnable() { // from class: j0.e0
                    @Override // java.lang.Runnable
                    public final void run() {
                        w0.this.d();
                    }
                }, c0.a.a());
            }
            this.f29908k = w1Var;
            w();
            return w1Var;
        } catch (w0.a e10) {
            throw new AssertionError("Surface is somehow already closed", e10);
        } catch (RuntimeException e11) {
            w1Var.v();
            throw e11;
        }
    }

    public final void m() {
        b0.p.a();
        h();
        this.f29909l.d();
    }

    public Rect n() {
        return this.f29901d;
    }

    public w0 o() {
        b0.p.a();
        h();
        g();
        return this.f29909l;
    }

    public int p() {
        return this.f29906i;
    }

    public Matrix q() {
        return this.f29899b;
    }

    public m2 r() {
        return this.f29904g;
    }

    public int s() {
        return this.f29903f;
    }

    public boolean t() {
        return this.f29900c;
    }

    public void u() {
        b0.p.a();
        h();
        if (!this.f29909l.s()) {
            this.f29907j = false;
            this.f29909l.d();
            this.f29909l = new a(this.f29904g.e(), this.f29898a);
            for (Runnable runnable : this.f29910m) {
                runnable.run();
            }
        }
    }

    public boolean v() {
        return this.f29902e;
    }

    public void x(w0 w0Var) {
        b0.p.a();
        h();
        a aVar = this.f29909l;
        Objects.requireNonNull(aVar);
        aVar.u(w0Var, new d0(aVar));
    }

    public void y(final int i10, final int i11) {
        b0.p.d(new Runnable() { // from class: j0.f0
            @Override // java.lang.Runnable
            public final void run() {
                l0.c(l0.this, i10, i11);
            }
        });
    }
}
