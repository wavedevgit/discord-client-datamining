package w;

import a0.r0;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import d0.n;
import java.util.concurrent.Executor;
import p.a;
import q.u;
import x.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: c  reason: collision with root package name */
    private final u f51992c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f51993d;

    /* renamed from: g  reason: collision with root package name */
    c.a f51996g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f51990a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51991b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f51994e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0551a f51995f = new a.C0551a();

    public g(u uVar, Executor executor) {
        this.f51992c = uVar;
        this.f51993d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f51993d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f51993d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f51994e) {
            this.f51995f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f51994e) {
            this.f51995f = new a.C0551a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f51996g;
        if (aVar != null) {
            aVar.c(null);
            this.f51996g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f51996g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f51996g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f51990a != z10) {
            this.f51990a = z10;
            if (z10) {
                if (this.f51991b) {
                    r();
                    return;
                }
                return;
            }
            m(new j.a("The camera control has became inactive."));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void q(c.a aVar) {
        this.f51991b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f51996g = aVar;
        if (this.f51990a) {
            r();
        }
    }

    private void r() {
        this.f51992c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f51993d);
        this.f51991b = false;
    }

    public ListenableFuture g(j jVar) {
        h(jVar);
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: w.a
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return g.a(g.this, aVar);
            }
        }));
    }

    public void i(a.C0551a c0551a) {
        synchronized (this.f51994e) {
            c0551a.e(this.f51995f.a(), r0.c.ALWAYS_OVERRIDE);
        }
    }

    public ListenableFuture j() {
        k();
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: w.c
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return g.b(g.this, aVar);
            }
        }));
    }

    public p.a n() {
        p.a c10;
        synchronized (this.f51994e) {
            c10 = this.f51995f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f51993d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
