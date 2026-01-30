package z;

import a0.j1;
import a0.k1;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.e;
import androidx.core.util.Consumer;
import java.util.Objects;
import z.o0;
import z.u;
import z.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u {

    /* renamed from: b  reason: collision with root package name */
    androidx.camera.core.q f55194b;

    /* renamed from: c  reason: collision with root package name */
    androidx.camera.core.q f55195c;

    /* renamed from: d  reason: collision with root package name */
    private o0.a f55196d;

    /* renamed from: e  reason: collision with root package name */
    private c f55197e;

    /* renamed from: a  reason: collision with root package name */
    p0 f55193a = null;

    /* renamed from: f  reason: collision with root package name */
    private e0 f55198f = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends a0.k {
        a() {
        }

        public static /* synthetic */ void e(a aVar) {
            p0 p0Var = u.this.f55193a;
            if (p0Var != null) {
                p0Var.n();
            }
        }

        @Override // a0.k
        public void d(int i10) {
            c0.a.d().execute(new Runnable() { // from class: z.t
                @Override // java.lang.Runnable
                public final void run() {
                    u.a.e(u.a.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: b  reason: collision with root package name */
        private a0.w0 f55203b;

        /* renamed from: a  reason: collision with root package name */
        private a0.k f55202a = new a();

        /* renamed from: c  reason: collision with root package name */
        private a0.w0 f55204c = null;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a extends a0.k {
            a() {
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static c m(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12) {
            return new z.b(size, i10, i11, z10, u0Var, size2, i12, new j0.u(), new j0.u());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a0.k a() {
            return this.f55202a;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.u b();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract x.u0 c();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int d();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int e();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int f();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract Size g();

        /* JADX INFO: Access modifiers changed from: package-private */
        public a0.w0 h() {
            return this.f55204c;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.u i();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract Size j();

        /* JADX INFO: Access modifiers changed from: package-private */
        public a0.w0 k() {
            a0.w0 w0Var = this.f55203b;
            Objects.requireNonNull(w0Var);
            return w0Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract boolean l();

        void n(a0.k kVar) {
            this.f55202a = kVar;
        }

        void o(Surface surface, Size size, int i10) {
            this.f55204c = new k1(surface, size, i10);
        }

        void p(Surface surface) {
            boolean z10;
            if (this.f55203b == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The surface is already set.");
            this.f55203b = new k1(surface, j(), d());
        }
    }

    public static /* synthetic */ void a(u uVar, p0 p0Var) {
        uVar.k(p0Var);
        uVar.f55198f.h(p0Var);
    }

    public static /* synthetic */ void b(u uVar, j1 j1Var) {
        uVar.getClass();
        try {
            androidx.camera.core.n b10 = j1Var.b();
            if (b10 != null) {
                uVar.l(b10);
            }
        } catch (IllegalStateException e10) {
            x.y0.d("CaptureNode", "Failed to acquire latest image of postview", e10);
        }
    }

    public static /* synthetic */ void d(u uVar, j1 j1Var) {
        uVar.getClass();
        try {
            androidx.camera.core.n b10 = j1Var.b();
            if (b10 != null) {
                uVar.j(b10);
                return;
            }
            p0 p0Var = uVar.f55193a;
            if (p0Var != null) {
                uVar.o(y0.b.c(p0Var.e(), new x.o0(2, "Failed to acquire latest image", null)));
            }
        } catch (IllegalStateException e10) {
            p0 p0Var2 = uVar.f55193a;
            if (p0Var2 != null) {
                uVar.o(y0.b.c(p0Var2.e(), new x.o0(2, "Failed to acquire latest image", e10)));
            }
        }
    }

    public static /* synthetic */ void e(androidx.camera.core.q qVar) {
        if (qVar != null) {
            qVar.j();
        }
    }

    private static j1 g(x.u0 u0Var, int i10, int i11, int i12) {
        if (u0Var != null) {
            return u0Var.a(i10, i11, i12, 4, 0L);
        }
        return androidx.camera.core.o.a(i10, i11, i12, 4);
    }

    private void i(androidx.camera.core.n nVar) {
        b0.p.a();
        o0.a aVar = this.f55196d;
        Objects.requireNonNull(aVar);
        aVar.a().accept(o0.b.c(this.f55193a, nVar));
        p0 p0Var = this.f55193a;
        this.f55193a = null;
        p0Var.q();
    }

    private void l(androidx.camera.core.n nVar) {
        if (this.f55193a == null) {
            x.y0.l("CaptureNode", "Postview image is closed due to request completed or aborted");
            nVar.close();
            return;
        }
        o0.a aVar = this.f55196d;
        Objects.requireNonNull(aVar);
        aVar.d().accept(o0.b.c(this.f55193a, nVar));
    }

    private void n(c cVar, final androidx.camera.core.q qVar, final androidx.camera.core.q qVar2) {
        cVar.k().d();
        cVar.k().k().a(new Runnable() { // from class: z.r
            @Override // java.lang.Runnable
            public final void run() {
                androidx.camera.core.q.this.j();
            }
        }, c0.a.d());
        if (cVar.h() != null) {
            cVar.h().d();
            cVar.h().k().a(new Runnable() { // from class: z.s
                @Override // java.lang.Runnable
                public final void run() {
                    u.e(androidx.camera.core.q.this);
                }
            }, c0.a.d());
        }
    }

    public int h() {
        boolean z10;
        b0.p.a();
        if (this.f55194b != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "The ImageReader is not initialized.");
        return this.f55194b.i();
    }

    void j(androidx.camera.core.n nVar) {
        b0.p.a();
        if (this.f55193a == null) {
            x.y0.l("CaptureNode", "Discarding ImageProxy which was inadvertently acquired: " + nVar);
            nVar.close();
        } else if (((Integer) nVar.z().c().d(this.f55193a.i())) == null) {
            x.y0.l("CaptureNode", "Discarding ImageProxy which was acquired for aborted request");
            nVar.close();
        } else {
            i(nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(p0 p0Var) {
        boolean z10;
        b0.p.a();
        boolean z11 = false;
        if (p0Var.h().size() == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "only one capture stage is supported.");
        if (h() > 0) {
            z11 = true;
        }
        b2.e.j(z11, "Too many acquire images. Close image to be able to process next.");
        this.f55193a = p0Var;
        d0.n.j(p0Var.a(), new b(p0Var), c0.a.a());
    }

    public void m() {
        b0.p.a();
        c cVar = this.f55197e;
        Objects.requireNonNull(cVar);
        androidx.camera.core.q qVar = this.f55194b;
        Objects.requireNonNull(qVar);
        n(cVar, qVar, this.f55195c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(y0.b bVar) {
        b0.p.a();
        p0 p0Var = this.f55193a;
        if (p0Var != null && p0Var.e() == bVar.b()) {
            this.f55193a.l(bVar.a());
        }
    }

    public void p(e.a aVar) {
        boolean z10;
        b0.p.a();
        if (this.f55194b != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "The ImageReader is not initialized.");
        this.f55194b.k(aVar);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public o0.a q(c cVar) {
        boolean z10;
        Consumer consumer;
        e0 e0Var;
        if (this.f55197e == null && this.f55194b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "CaptureNode does not support recreation yet.");
        this.f55197e = cVar;
        Size j10 = cVar.j();
        int d10 = cVar.d();
        boolean l10 = cVar.l();
        a0.k aVar = new a();
        if (!l10) {
            cVar.c();
            androidx.camera.core.p pVar = new androidx.camera.core.p(j10.getWidth(), j10.getHeight(), d10, 4);
            aVar = a0.l.b(aVar, pVar.m());
            consumer = new Consumer() { // from class: z.m
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    u.this.k((p0) obj);
                }
            };
            e0Var = pVar;
        } else {
            cVar.c();
            e0 e0Var2 = new e0(g(null, j10.getWidth(), j10.getHeight(), d10));
            this.f55198f = e0Var2;
            consumer = new Consumer() { // from class: z.n
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    u.a(u.this, (p0) obj);
                }
            };
            e0Var = e0Var2;
        }
        cVar.n(aVar);
        Surface surface = e0Var.getSurface();
        Objects.requireNonNull(surface);
        cVar.p(surface);
        this.f55194b = new androidx.camera.core.q(e0Var);
        e0Var.e(new j1.a() { // from class: z.o
            @Override // a0.j1.a
            public final void a(j1 j1Var) {
                u.d(u.this, j1Var);
            }
        }, c0.a.d());
        if (cVar.g() != null) {
            cVar.c();
            j1 g10 = g(null, cVar.g().getWidth(), cVar.g().getHeight(), cVar.f());
            g10.e(new j1.a() { // from class: z.p
                @Override // a0.j1.a
                public final void a(j1 j1Var) {
                    u.b(u.this, j1Var);
                }
            }, c0.a.d());
            this.f55195c = new androidx.camera.core.q(g10);
            cVar.o(g10.getSurface(), cVar.g(), cVar.f());
        }
        cVar.i().a(consumer);
        cVar.b().a(new Consumer() { // from class: z.q
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                u.this.o((y0.b) obj);
            }
        });
        o0.a e10 = o0.a.e(cVar.d(), cVar.e());
        this.f55196d = e10;
        return e10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ p0 f55200a;

        b(p0 p0Var) {
            this.f55200a = p0Var;
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            b0.p.a();
            if (this.f55200a == u.this.f55193a) {
                x.y0.l("CaptureNode", "request aborted, id=" + u.this.f55193a.e());
                if (u.this.f55198f != null) {
                    u.this.f55198f.i();
                }
                u.this.f55193a = null;
            }
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
        }
    }
}
