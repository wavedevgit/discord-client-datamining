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
    private final int f31740a;

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f31741b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31742c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f31743d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31744e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31745f;

    /* renamed from: g  reason: collision with root package name */
    private final m2 f31746g;

    /* renamed from: h  reason: collision with root package name */
    private int f31747h;

    /* renamed from: i  reason: collision with root package name */
    private int f31748i;

    /* renamed from: k  reason: collision with root package name */
    private w1 f31750k;

    /* renamed from: l  reason: collision with root package name */
    private a f31751l;

    /* renamed from: j  reason: collision with root package name */
    private boolean f31749j = false;

    /* renamed from: m  reason: collision with root package name */
    private final Set f31752m = new HashSet();

    /* renamed from: n  reason: collision with root package name */
    private boolean f31753n = false;

    /* renamed from: o  reason: collision with root package name */
    private final List f31754o = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends w0 {

        /* renamed from: o  reason: collision with root package name */
        final ListenableFuture f31755o;

        /* renamed from: p  reason: collision with root package name */
        c.a f31756p;

        /* renamed from: q  reason: collision with root package name */
        private w0 f31757q;

        /* renamed from: r  reason: collision with root package name */
        private o0 f31758r;

        a(Size size, int i10) {
            super(size, i10);
            this.f31755o = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: j0.j0
                @Override // androidx.concurrent.futures.c.InterfaceC0026c
                public final Object a(c.a aVar) {
                    return l0.a.r(l0.a.this, aVar);
                }
            });
        }

        public static /* synthetic */ void q(a aVar) {
            o0 o0Var = aVar.f31758r;
            if (o0Var != null) {
                o0Var.B();
            }
            if (aVar.f31757q == null) {
                aVar.f31756p.d();
            }
        }

        public static /* synthetic */ Object r(a aVar, c.a aVar2) {
            aVar.f31756p = aVar2;
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
            return this.f31755o;
        }

        boolean s() {
            b0.p.a();
            if (this.f31757q == null && !m()) {
                return true;
            }
            return false;
        }

        public void t(o0 o0Var) {
            boolean z10;
            if (this.f31758r == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "Consumer can only be linked once.");
            this.f31758r = o0Var;
        }

        public boolean u(final w0 w0Var, Runnable runnable) {
            boolean z10;
            b0.p.a();
            b2.e.g(w0Var);
            w0 w0Var2 = this.f31757q;
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
            this.f31757q = w0Var;
            d0.n.t(w0Var.j(), this.f31756p);
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
        this.f31745f = i10;
        this.f31740a = i11;
        this.f31746g = m2Var;
        this.f31741b = matrix;
        this.f31742c = z10;
        this.f31743d = rect;
        this.f31748i = i12;
        this.f31747h = i13;
        this.f31744e = z11;
        this.f31751l = new a(m2Var.e(), i11);
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
        if (!l0Var.f31753n) {
            l0Var.u();
        }
    }

    public static /* synthetic */ void c(l0 l0Var, int i10, int i11) {
        boolean z10;
        boolean z11 = true;
        if (l0Var.f31748i != i10) {
            l0Var.f31748i = i10;
            z10 = true;
        } else {
            z10 = false;
        }
        if (l0Var.f31747h != i11) {
            l0Var.f31747h = i11;
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
            o0 o0Var = new o0(surface, l0Var.s(), i10, l0Var.f31746g.e(), aVar2, aVar3, l0Var.f31741b);
            o0Var.x().a(new Runnable() { // from class: j0.b0
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
        b2.e.j(!this.f31749j, "Consumer can only be linked once.");
        this.f31749j = true;
    }

    private void h() {
        b2.e.j(!this.f31753n, "Edge is already closed.");
    }

    private void w() {
        b0.p.a();
        w1.h g10 = w1.h.g(this.f31743d, this.f31748i, this.f31747h, t(), this.f31741b, this.f31744e);
        w1 w1Var = this.f31750k;
        if (w1Var != null) {
            w1Var.u(g10);
        }
        for (Consumer consumer : this.f31754o) {
            consumer.accept(g10);
        }
    }

    public void e(Runnable runnable) {
        b0.p.a();
        h();
        this.f31752m.add(runnable);
    }

    public void f(Consumer consumer) {
        b2.e.g(consumer);
        this.f31754o.add(consumer);
    }

    public final void i() {
        b0.p.a();
        this.f31751l.d();
        this.f31753n = true;
    }

    public ListenableFuture j(final int i10, final l1.a aVar, final l1.a aVar2) {
        b0.p.a();
        h();
        g();
        final a aVar3 = this.f31751l;
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
        w1 w1Var = new w1(this.f31746g.e(), e0Var, z10, this.f31746g.b(), this.f31746g.c(), new Runnable() { // from class: j0.c0
            @Override // java.lang.Runnable
            public final void run() {
                l0.a(l0.this);
            }
        });
        try {
            final w0 m10 = w1Var.m();
            a aVar = this.f31751l;
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
            this.f31750k = w1Var;
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
        this.f31751l.d();
    }

    public Rect n() {
        return this.f31743d;
    }

    public w0 o() {
        b0.p.a();
        h();
        g();
        return this.f31751l;
    }

    public int p() {
        return this.f31748i;
    }

    public Matrix q() {
        return this.f31741b;
    }

    public m2 r() {
        return this.f31746g;
    }

    public int s() {
        return this.f31745f;
    }

    public boolean t() {
        return this.f31742c;
    }

    public void u() {
        b0.p.a();
        h();
        if (!this.f31751l.s()) {
            this.f31749j = false;
            this.f31751l.d();
            this.f31751l = new a(this.f31746g.e(), this.f31740a);
            for (Runnable runnable : this.f31752m) {
                runnable.run();
            }
        }
    }

    public boolean v() {
        return this.f31744e;
    }

    public void x(w0 w0Var) {
        b0.p.a();
        h();
        a aVar = this.f31751l;
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
