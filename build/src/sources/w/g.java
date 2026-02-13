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
    private final u f52612c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f52613d;

    /* renamed from: g  reason: collision with root package name */
    c.a f52616g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f52610a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52611b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f52614e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0582a f52615f = new a.C0582a();

    public g(u uVar, Executor executor) {
        this.f52612c = uVar;
        this.f52613d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f52613d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f52613d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f52614e) {
            this.f52615f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f52614e) {
            this.f52615f = new a.C0582a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f52616g;
        if (aVar != null) {
            aVar.c(null);
            this.f52616g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f52616g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f52616g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f52610a != z10) {
            this.f52610a = z10;
            if (z10) {
                if (this.f52611b) {
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
        this.f52611b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f52616g = aVar;
        if (this.f52610a) {
            r();
        }
    }

    private void r() {
        this.f52612c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f52613d);
        this.f52611b = false;
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

    public void i(a.C0582a c0582a) {
        synchronized (this.f52614e) {
            c0582a.e(this.f52615f.a(), r0.c.ALWAYS_OVERRIDE);
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
        synchronized (this.f52614e) {
            c10 = this.f52615f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f52613d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
