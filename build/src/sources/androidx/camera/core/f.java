package androidx.camera.core;

import a0.e0;
import a0.f1;
import a0.h1;
import a0.i1;
import a0.i2;
import a0.k1;
import a0.m2;
import a0.q1;
import a0.r0;
import a0.r1;
import a0.w0;
import a0.w1;
import a0.x2;
import a0.y2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import androidx.camera.core.f;
import androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk;
import com.discord.media.utils.DiscordVideoMediaSource;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.Executor;
import m0.c;
import x.d0;
import x.x1;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends x1 {

    /* renamed from: v  reason: collision with root package name */
    public static final d f1947v = new d();

    /* renamed from: w  reason: collision with root package name */
    private static final Boolean f1948w = null;

    /* renamed from: p  reason: collision with root package name */
    final i f1949p;

    /* renamed from: q  reason: collision with root package name */
    private final Object f1950q;

    /* renamed from: r  reason: collision with root package name */
    private a f1951r;

    /* renamed from: s  reason: collision with root package name */
    i2.b f1952s;

    /* renamed from: t  reason: collision with root package name */
    private w0 f1953t;

    /* renamed from: u  reason: collision with root package name */
    private i2.c f1954u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        default Size d() {
            return null;
        }

        void g(n nVar);
    }

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public @interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements x2.a {

        /* renamed from: a  reason: collision with root package name */
        private final r1 f1955a;

        public c() {
            this(r1.Z());
        }

        static c d(r0 r0Var) {
            return new c(r1.a0(r0Var));
        }

        @Override // x.a0
        public q1 a() {
            return this.f1955a;
        }

        public f c() {
            f1 b10 = b();
            i1.T(b10);
            return new f(b10);
        }

        @Override // a0.x2.a
        /* renamed from: e */
        public f1 b() {
            return new f1(w1.Y(this.f1955a));
        }

        public c f(y2.b bVar) {
            a().V(x2.B, bVar);
            return this;
        }

        public c g(Size size) {
            a().V(i1.f89o, size);
            return this;
        }

        public c h(z zVar) {
            if (Objects.equals(z.f53113d, zVar)) {
                a().V(h1.f77i, zVar);
                return this;
            }
            throw new UnsupportedOperationException("ImageAnalysis currently only supports SDR");
        }

        public c i(int i10) {
            a().V(f1.K, Integer.valueOf(i10));
            return this;
        }

        public c j(m0.c cVar) {
            a().V(i1.f92r, cVar);
            return this;
        }

        public c k(int i10) {
            a().V(x2.f321x, Integer.valueOf(i10));
            return this;
        }

        public c l(int i10) {
            if (i10 == -1) {
                i10 = 0;
            }
            a().V(i1.f84j, Integer.valueOf(i10));
            return this;
        }

        public c m(Class cls) {
            a().V(e0.m.G, cls);
            if (a().e(e0.m.F, null) == null) {
                n(cls.getCanonicalName() + "-" + UUID.randomUUID());
            }
            return this;
        }

        public c n(String str) {
            a().V(e0.m.F, str);
            return this;
        }

        public c o(Size size) {
            a().V(i1.f88n, size);
            return this;
        }

        public c p(int i10) {
            a().V(i1.f85k, Integer.valueOf(i10));
            return this;
        }

        private c(r1 r1Var) {
            this.f1955a = r1Var;
            Class cls = (Class) r1Var.e(e0.m.G, null);
            if (cls != null && !cls.equals(f.class)) {
                throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
            }
            f(y2.b.IMAGE_ANALYSIS);
            m(f.class);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private static final Size f1956a;

        /* renamed from: b  reason: collision with root package name */
        private static final z f1957b;

        /* renamed from: c  reason: collision with root package name */
        private static final m0.c f1958c;

        /* renamed from: d  reason: collision with root package name */
        private static final f1 f1959d;

        static {
            Size size = new Size(DiscordVideoMediaSource.DEFAULT_WIDTH, DiscordVideoMediaSource.DEFAULT_HEIGHT);
            f1956a = size;
            z zVar = z.f53113d;
            f1957b = zVar;
            m0.c a10 = new c.a().d(m0.a.f37787c).f(new m0.d(i0.d.f28339c, 1)).a();
            f1958c = a10;
            f1959d = new c().g(size).k(1).l(0).j(a10).h(zVar).b();
        }

        public f1 a() {
            return f1959d;
        }
    }

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public @interface e {
    }

    f(f1 f1Var) {
        super(f1Var);
        this.f1950q = new Object();
        if (((f1) j()).W(0) == 1) {
            this.f1949p = new j();
        } else {
            this.f1949p = new k(f1Var.S(c0.a.b()));
        }
        this.f1949p.r(h0());
        this.f1949p.s(j0());
    }

    public static /* synthetic */ void Y(f fVar, i2 i2Var, i2.g gVar) {
        List a10;
        if (fVar.g() == null) {
            return;
        }
        fVar.c0();
        fVar.f1949p.g();
        i2.b d02 = fVar.d0(fVar.i(), (f1) fVar.j(), (m2) b2.e.g(fVar.e()));
        fVar.f1952s = d02;
        a10 = d0.a(new Object[]{d02.o()});
        fVar.V(a10);
        fVar.G();
    }

    public static /* synthetic */ void Z(q qVar, q qVar2) {
        qVar.j();
        if (qVar2 != null) {
            qVar2.j();
        }
    }

    public static /* synthetic */ List b0(Size size, List list, int i10) {
        ArrayList arrayList = new ArrayList(list);
        if (arrayList.contains(size)) {
            arrayList.remove(size);
            arrayList.add(0, size);
        }
        return arrayList;
    }

    private boolean i0(e0 e0Var) {
        if (!j0() || q(e0Var) % 180 == 0) {
            return false;
        }
        return true;
    }

    private void l0() {
        e0 g10 = g();
        if (g10 != null) {
            this.f1949p.u(q(g10));
        }
    }

    @Override // x.x1
    public void I() {
        this.f1949p.f();
    }

    @Override // x.x1
    protected x2 K(a0.d0 d0Var, x2.a aVar) {
        final Size size;
        c.a b10;
        Boolean g02 = g0();
        boolean a10 = d0Var.e().a(OnePixelShiftQuirk.class);
        i iVar = this.f1949p;
        if (g02 != null) {
            a10 = g02.booleanValue();
        }
        iVar.q(a10);
        synchronized (this.f1950q) {
            try {
                a aVar2 = this.f1951r;
                if (aVar2 != null) {
                    size = aVar2.d();
                } else {
                    size = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (size == null) {
            return aVar.b();
        }
        if (d0Var.j(((Integer) aVar.a().e(i1.f85k, 0)).intValue()) % 180 == 90) {
            size = new Size(size.getHeight(), size.getWidth());
        }
        x2 b11 = aVar.b();
        r0.a aVar3 = i1.f88n;
        if (!b11.h(aVar3)) {
            aVar.a().V(aVar3, size);
        }
        x2 b12 = aVar.b();
        r0.a aVar4 = i1.f92r;
        if (b12.h(aVar4)) {
            m0.c cVar = (m0.c) c().e(aVar4, null);
            if (cVar == null) {
                b10 = new c.a();
            } else {
                b10 = c.a.b(cVar);
            }
            if (cVar == null || cVar.d() == null) {
                b10.f(new m0.d(size, 1));
            }
            if (cVar == null) {
                b10.e(new m0.b() { // from class: x.g0
                    @Override // m0.b
                    public final List a(List list, int i10) {
                        return androidx.camera.core.f.b0(size, list, i10);
                    }
                });
            }
            aVar.a().V(aVar4, b10.a());
        }
        return aVar.b();
    }

    @Override // x.x1
    protected m2 N(r0 r0Var) {
        List a10;
        this.f1952s.g(r0Var);
        a10 = d0.a(new Object[]{this.f1952s.o()});
        V(a10);
        return e().g().d(r0Var).a();
    }

    @Override // x.x1
    protected m2 O(m2 m2Var, m2 m2Var2) {
        List a10;
        i2.b d02 = d0(i(), (f1) j(), m2Var);
        this.f1952s = d02;
        a10 = d0.a(new Object[]{d02.o()});
        V(a10);
        return m2Var;
    }

    @Override // x.x1
    public void P() {
        c0();
        this.f1949p.j();
    }

    @Override // x.x1
    public void S(Matrix matrix) {
        super.S(matrix);
        this.f1949p.v(matrix);
    }

    @Override // x.x1
    public void T(Rect rect) {
        super.T(rect);
        this.f1949p.w(rect);
    }

    void c0() {
        b0.p.a();
        i2.c cVar = this.f1954u;
        if (cVar != null) {
            cVar.b();
            this.f1954u = null;
        }
        w0 w0Var = this.f1953t;
        if (w0Var != null) {
            w0Var.d();
            this.f1953t = null;
        }
    }

    i2.b d0(String str, f1 f1Var, m2 m2Var) {
        int i10;
        boolean z10;
        int width;
        int height;
        int i11;
        boolean z11;
        final q qVar;
        b0.p.a();
        Size e10 = m2Var.e();
        Executor executor = (Executor) b2.e.g(f1Var.S(c0.a.b()));
        boolean z12 = true;
        if (e0() == 1) {
            i10 = f0();
        } else {
            i10 = 4;
        }
        f1Var.Y();
        final q qVar2 = new q(o.a(e10.getWidth(), e10.getHeight(), m(), i10));
        if (g() != null) {
            z10 = i0(g());
        } else {
            z10 = false;
        }
        if (z10) {
            width = e10.getHeight();
        } else {
            width = e10.getWidth();
        }
        if (z10) {
            height = e10.getWidth();
        } else {
            height = e10.getHeight();
        }
        if (h0() == 2) {
            i11 = 1;
        } else {
            i11 = 35;
        }
        if (m() == 35 && h0() == 2) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (m() != 35 || ((g() == null || q(g()) == 0) && !Boolean.TRUE.equals(g0()))) {
            z12 = false;
        }
        if (!z11 && !z12) {
            qVar = null;
        } else {
            qVar = new q(o.a(width, height, i11, qVar2.f()));
        }
        if (qVar != null) {
            this.f1949p.t(qVar);
        }
        l0();
        qVar2.e(this.f1949p, executor);
        i2.b p10 = i2.b.p(f1Var, m2Var.e());
        if (m2Var.d() != null) {
            p10.g(m2Var.d());
        }
        w0 w0Var = this.f1953t;
        if (w0Var != null) {
            w0Var.d();
        }
        k1 k1Var = new k1(qVar2.getSurface(), e10, m());
        this.f1953t = k1Var;
        k1Var.k().a(new Runnable() { // from class: x.h0
            @Override // java.lang.Runnable
            public final void run() {
                androidx.camera.core.f.Z(androidx.camera.core.q.this, qVar);
            }
        }, c0.a.d());
        p10.s(m2Var.c());
        p10.m(this.f1953t, m2Var.b(), null, -1);
        i2.c cVar = this.f1954u;
        if (cVar != null) {
            cVar.b();
        }
        i2.c cVar2 = new i2.c(new i2.d() { // from class: x.i0
            @Override // a0.i2.d
            public final void a(i2 i2Var, i2.g gVar) {
                androidx.camera.core.f.Y(androidx.camera.core.f.this, i2Var, gVar);
            }
        });
        this.f1954u = cVar2;
        p10.r(cVar2);
        return p10;
    }

    public int e0() {
        return ((f1) j()).W(0);
    }

    public int f0() {
        return ((f1) j()).X(6);
    }

    public Boolean g0() {
        return ((f1) j()).Z(f1948w);
    }

    public int h0() {
        return ((f1) j()).a0(1);
    }

    public boolean j0() {
        return ((f1) j()).b0(Boolean.FALSE).booleanValue();
    }

    @Override // x.x1
    public x2 k(boolean z10, y2 y2Var) {
        d dVar = f1947v;
        r0 a10 = y2Var.a(dVar.a().L(), 1);
        if (z10) {
            a10 = r0.E(a10, dVar.a());
        }
        if (a10 == null) {
            return null;
        }
        return z(a10).b();
    }

    public void k0(Executor executor, final a aVar) {
        synchronized (this.f1950q) {
            try {
                this.f1949p.p(executor, new a() { // from class: x.f0
                    @Override // androidx.camera.core.f.a
                    public final void g(androidx.camera.core.n nVar) {
                        f.a.this.g(nVar);
                    }
                });
                if (this.f1951r == null) {
                    E();
                }
                this.f1951r = aVar;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public String toString() {
        return "ImageAnalysis:" + o();
    }

    @Override // x.x1
    public x2.a z(r0 r0Var) {
        return c.d(r0Var);
    }
}
