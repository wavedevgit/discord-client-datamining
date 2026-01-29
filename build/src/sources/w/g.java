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
    private final u f51976c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f51977d;

    /* renamed from: g  reason: collision with root package name */
    c.a f51980g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f51974a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51975b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f51978e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0551a f51979f = new a.C0551a();

    public g(u uVar, Executor executor) {
        this.f51976c = uVar;
        this.f51977d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f51977d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f51977d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f51978e) {
            this.f51979f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f51978e) {
            this.f51979f = new a.C0551a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f51980g;
        if (aVar != null) {
            aVar.c(null);
            this.f51980g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f51980g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f51980g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f51974a != z10) {
            this.f51974a = z10;
            if (z10) {
                if (this.f51975b) {
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
        this.f51975b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f51980g = aVar;
        if (this.f51974a) {
            r();
        }
    }

    private void r() {
        this.f51976c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f51977d);
        this.f51975b = false;
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
        synchronized (this.f51978e) {
            c0551a.e(this.f51979f.a(), r0.c.ALWAYS_OVERRIDE);
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
        synchronized (this.f51978e) {
            c10 = this.f51979f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f51977d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
