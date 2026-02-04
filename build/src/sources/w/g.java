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
    private final u f51778c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f51779d;

    /* renamed from: g  reason: collision with root package name */
    c.a f51782g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f51776a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51777b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f51780e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0555a f51781f = new a.C0555a();

    public g(u uVar, Executor executor) {
        this.f51778c = uVar;
        this.f51779d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f51779d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f51779d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f51780e) {
            this.f51781f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f51780e) {
            this.f51781f = new a.C0555a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f51782g;
        if (aVar != null) {
            aVar.c(null);
            this.f51782g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f51782g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f51782g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f51776a != z10) {
            this.f51776a = z10;
            if (z10) {
                if (this.f51777b) {
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
        this.f51777b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f51782g = aVar;
        if (this.f51776a) {
            r();
        }
    }

    private void r() {
        this.f51778c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f51779d);
        this.f51777b = false;
    }

    public ListenableFuture g(j jVar) {
        h(jVar);
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0028c() { // from class: w.a
            @Override // androidx.concurrent.futures.c.InterfaceC0028c
            public final Object a(c.a aVar) {
                return g.a(g.this, aVar);
            }
        }));
    }

    public void i(a.C0555a c0555a) {
        synchronized (this.f51780e) {
            c0555a.e(this.f51781f.a(), r0.c.ALWAYS_OVERRIDE);
        }
    }

    public ListenableFuture j() {
        k();
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0028c() { // from class: w.c
            @Override // androidx.concurrent.futures.c.InterfaceC0028c
            public final Object a(c.a aVar) {
                return g.b(g.this, aVar);
            }
        }));
    }

    public p.a n() {
        p.a c10;
        synchronized (this.f51780e) {
            c10 = this.f51781f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f51779d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
