package x;

import a0.i2;
import a0.m2;
import a0.r0;
import a0.x2;
import a0.y2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Executor;
import m0.c;
import x.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g1 extends x1 {

    /* renamed from: x  reason: collision with root package name */
    public static final b f54177x = new b();

    /* renamed from: y  reason: collision with root package name */
    private static final Executor f54178y = c0.a.d();

    /* renamed from: p  reason: collision with root package name */
    private c f54179p;

    /* renamed from: q  reason: collision with root package name */
    private Executor f54180q;

    /* renamed from: r  reason: collision with root package name */
    i2.b f54181r;

    /* renamed from: s  reason: collision with root package name */
    private a0.w0 f54182s;

    /* renamed from: t  reason: collision with root package name */
    private j0.l0 f54183t;

    /* renamed from: u  reason: collision with root package name */
    w1 f54184u;

    /* renamed from: v  reason: collision with root package name */
    private j0.t0 f54185v;

    /* renamed from: w  reason: collision with root package name */
    private i2.c f54186w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x2.a {

        /* renamed from: a  reason: collision with root package name */
        private final a0.r1 f54187a;

        public a() {
            this(a0.r1.Z());
        }

        static a d(a0.r0 r0Var) {
            return new a(a0.r1.a0(r0Var));
        }

        @Override // x.a0
        public a0.q1 a() {
            return this.f54187a;
        }

        public g1 c() {
            a0.x1 b10 = b();
            a0.i1.T(b10);
            return new g1(b10);
        }

        @Override // a0.x2.a
        /* renamed from: e */
        public a0.x1 b() {
            return new a0.x1(a0.w1.Y(this.f54187a));
        }

        public a f(y2.b bVar) {
            a().V(x2.B, bVar);
            return this;
        }

        public a g(z zVar) {
            a().V(a0.h1.f77i, zVar);
            return this;
        }

        public a h(m0.c cVar) {
            a().V(a0.i1.f92r, cVar);
            return this;
        }

        public a i(int i10) {
            a().V(x2.f321x, Integer.valueOf(i10));
            return this;
        }

        public a j(int i10) {
            if (i10 == -1) {
                i10 = 0;
            }
            a().V(a0.i1.f84j, Integer.valueOf(i10));
            return this;
        }

        public a k(Class cls) {
            a().V(e0.m.G, cls);
            if (a().e(e0.m.F, null) == null) {
                l(cls.getCanonicalName() + "-" + UUID.randomUUID());
            }
            return this;
        }

        public a l(String str) {
            a().V(e0.m.F, str);
            return this;
        }

        public a m(int i10) {
            a().V(a0.i1.f85k, Integer.valueOf(i10));
            a().V(a0.i1.f86l, Integer.valueOf(i10));
            return this;
        }

        private a(a0.r1 r1Var) {
            this.f54187a = r1Var;
            Class cls = (Class) r1Var.e(e0.m.G, null);
            if (cls != null && !cls.equals(g1.class)) {
                throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
            }
            f(y2.b.PREVIEW);
            k(g1.class);
            r0.a aVar = a0.i1.f87m;
            if (((Integer) r1Var.e(aVar, -1)).intValue() == -1) {
                r1Var.V(aVar, 2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private static final m0.c f54188a;

        /* renamed from: b  reason: collision with root package name */
        private static final a0.x1 f54189b;

        /* renamed from: c  reason: collision with root package name */
        private static final z f54190c;

        static {
            m0.c a10 = new c.a().d(m0.a.f36808c).f(m0.d.f36820c).a();
            f54188a = a10;
            z zVar = z.f54401c;
            f54190c = zVar;
            f54189b = new a().i(2).j(0).h(a10).g(zVar).b();
        }

        public a0.x1 a() {
            return f54189b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        void a(w1 w1Var);
    }

    g1(a0.x1 x1Var) {
        super(x1Var);
        this.f54180q = f54178y;
    }

    public static /* synthetic */ void Y(g1 g1Var, i2 i2Var, i2.g gVar) {
        if (g1Var.g() == null) {
            return;
        }
        g1Var.j0((a0.x1) g1Var.j(), g1Var.e());
        g1Var.G();
    }

    private void a0(i2.b bVar, m2 m2Var) {
        if (this.f54179p != null) {
            bVar.m(this.f54182s, m2Var.b(), p(), n());
        }
        i2.c cVar = this.f54186w;
        if (cVar != null) {
            cVar.b();
        }
        i2.c cVar2 = new i2.c(new i2.d() { // from class: x.f1
            @Override // a0.i2.d
            public final void a(i2 i2Var, i2.g gVar) {
                g1.Y(g1.this, i2Var, gVar);
            }
        });
        this.f54186w = cVar2;
        bVar.r(cVar2);
    }

    private void b0() {
        i2.c cVar = this.f54186w;
        if (cVar != null) {
            cVar.b();
            this.f54186w = null;
        }
        a0.w0 w0Var = this.f54182s;
        if (w0Var != null) {
            w0Var.d();
            this.f54182s = null;
        }
        j0.t0 t0Var = this.f54185v;
        if (t0Var != null) {
            t0Var.f();
            this.f54185v = null;
        }
        j0.l0 l0Var = this.f54183t;
        if (l0Var != null) {
            l0Var.i();
            this.f54183t = null;
        }
        this.f54184u = null;
    }

    private i2.b c0(a0.x1 x1Var, m2 m2Var) {
        boolean z10;
        b0.p.a();
        a0.e0 g10 = g();
        Objects.requireNonNull(g10);
        a0.e0 e0Var = g10;
        b0();
        if (this.f54183t == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.i(z10);
        Matrix v10 = v();
        boolean q10 = e0Var.q();
        Rect d02 = d0(m2Var.e());
        Objects.requireNonNull(d02);
        this.f54183t = new j0.l0(1, 34, m2Var, v10, q10, d02, r(e0Var, C(e0Var)), d(), i0(e0Var));
        l();
        this.f54183t.e(new Runnable() { // from class: x.d1
            @Override // java.lang.Runnable
            public final void run() {
                g1.this.G();
            }
        });
        w1 k10 = this.f54183t.k(e0Var);
        this.f54184u = k10;
        this.f54182s = k10.m();
        if (this.f54179p != null) {
            e0();
        }
        i2.b p10 = i2.b.p(x1Var, m2Var.e());
        p10.s(m2Var.c());
        p10.w(x1Var.y());
        if (m2Var.d() != null) {
            p10.g(m2Var.d());
        }
        a0(p10, m2Var);
        return p10;
    }

    private Rect d0(Size size) {
        if (A() != null) {
            return A();
        }
        if (size != null) {
            return new Rect(0, 0, size.getWidth(), size.getHeight());
        }
        return null;
    }

    private void e0() {
        f0();
        final c cVar = (c) b2.e.g(this.f54179p);
        final w1 w1Var = (w1) b2.e.g(this.f54184u);
        this.f54180q.execute(new Runnable() { // from class: x.e1
            @Override // java.lang.Runnable
            public final void run() {
                g1.c.this.a(w1Var);
            }
        });
    }

    private void f0() {
        a0.e0 g10 = g();
        j0.l0 l0Var = this.f54183t;
        if (g10 != null && l0Var != null) {
            l0Var.y(r(g10, C(g10)), d());
        }
    }

    private boolean i0(a0.e0 e0Var) {
        if (e0Var.q() && C(e0Var)) {
            return true;
        }
        return false;
    }

    private void j0(a0.x1 x1Var, m2 m2Var) {
        List a10;
        i2.b c02 = c0(x1Var, m2Var);
        this.f54181r = c02;
        a10 = d0.a(new Object[]{c02.o()});
        V(a10);
    }

    @Override // x.x1
    protected x2 K(a0.d0 d0Var, x2.a aVar) {
        aVar.a().V(a0.h1.f76h, 34);
        return aVar.b();
    }

    @Override // x.x1
    protected m2 N(a0.r0 r0Var) {
        List a10;
        this.f54181r.g(r0Var);
        a10 = d0.a(new Object[]{this.f54181r.o()});
        V(a10);
        return e().g().d(r0Var).a();
    }

    @Override // x.x1
    protected m2 O(m2 m2Var, m2 m2Var2) {
        j0((a0.x1) j(), m2Var);
        return m2Var;
    }

    @Override // x.x1
    public void P() {
        b0();
    }

    @Override // x.x1
    public void T(Rect rect) {
        super.T(rect);
        f0();
    }

    public void g0(Executor executor, c cVar) {
        b0.p.a();
        if (cVar == null) {
            this.f54179p = null;
            F();
            return;
        }
        this.f54179p = cVar;
        this.f54180q = executor;
        if (f() != null) {
            j0((a0.x1) j(), e());
            G();
        }
        E();
    }

    public void h0(c cVar) {
        g0(f54178y, cVar);
    }

    @Override // x.x1
    public x2 k(boolean z10, y2 y2Var) {
        b bVar = f54177x;
        a0.r0 a10 = y2Var.a(bVar.a().L(), 1);
        if (z10) {
            a10 = a0.r0.E(a10, bVar.a());
        }
        if (a10 == null) {
            return null;
        }
        return z(a10).b();
    }

    public String toString() {
        return "Preview:" + o();
    }

    @Override // x.x1
    public Set x() {
        HashSet hashSet = new HashSet();
        hashSet.add(1);
        return hashSet;
    }

    @Override // x.x1
    public x2.a z(a0.r0 r0Var) {
        return a.d(r0Var);
    }
}
