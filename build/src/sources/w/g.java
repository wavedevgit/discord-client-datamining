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
    private final u f53014c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f53015d;

    /* renamed from: g  reason: collision with root package name */
    c.a f53018g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f53012a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53013b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f53016e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0606a f53017f = new a.C0606a();

    public g(u uVar, Executor executor) {
        this.f53014c = uVar;
        this.f53015d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f53015d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f53015d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f53016e) {
            this.f53017f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f53016e) {
            this.f53017f = new a.C0606a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f53018g;
        if (aVar != null) {
            aVar.c(null);
            this.f53018g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f53018g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f53018g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f53012a != z10) {
            this.f53012a = z10;
            if (z10) {
                if (this.f53013b) {
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
        this.f53013b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f53018g = aVar;
        if (this.f53012a) {
            r();
        }
    }

    private void r() {
        this.f53014c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f53015d);
        this.f53013b = false;
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

    public void i(a.C0606a c0606a) {
        synchronized (this.f53016e) {
            c0606a.e(this.f53017f.a(), r0.c.ALWAYS_OVERRIDE);
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
        synchronized (this.f53016e) {
            c10 = this.f53017f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f53015d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
