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
    private final u f52435c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f52436d;

    /* renamed from: g  reason: collision with root package name */
    c.a f52439g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f52433a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52434b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f52437e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0564a f52438f = new a.C0564a();

    public g(u uVar, Executor executor) {
        this.f52435c = uVar;
        this.f52436d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f52436d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f52436d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f52437e) {
            this.f52438f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f52437e) {
            this.f52438f = new a.C0564a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f52439g;
        if (aVar != null) {
            aVar.c(null);
            this.f52439g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f52439g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f52439g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f52433a != z10) {
            this.f52433a = z10;
            if (z10) {
                if (this.f52434b) {
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
        this.f52434b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f52439g = aVar;
        if (this.f52433a) {
            r();
        }
    }

    private void r() {
        this.f52435c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f52436d);
        this.f52434b = false;
    }

    public ListenableFuture g(j jVar) {
        h(jVar);
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: w.a
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return g.a(g.this, aVar);
            }
        }));
    }

    public void i(a.C0564a c0564a) {
        synchronized (this.f52437e) {
            c0564a.e(this.f52438f.a(), r0.c.ALWAYS_OVERRIDE);
        }
    }

    public ListenableFuture j() {
        k();
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: w.c
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return g.b(g.this, aVar);
            }
        }));
    }

    public p.a n() {
        p.a c10;
        synchronized (this.f52437e) {
            c10 = this.f52438f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f52436d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
