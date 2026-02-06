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
    private final u f53214c;

    /* renamed from: d  reason: collision with root package name */
    final Executor f53215d;

    /* renamed from: g  reason: collision with root package name */
    c.a f53218g;

    /* renamed from: a  reason: collision with root package name */
    private boolean f53212a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53213b = false;

    /* renamed from: e  reason: collision with root package name */
    final Object f53216e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private a.C0575a f53217f = new a.C0575a();

    public g(u uVar, Executor executor) {
        this.f53214c = uVar;
        this.f53215d = executor;
    }

    public static /* synthetic */ Object a(final g gVar, final c.a aVar) {
        gVar.f53215d.execute(new Runnable() { // from class: w.f
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "addCaptureRequestOptions";
    }

    public static /* synthetic */ Object b(final g gVar, final c.a aVar) {
        gVar.f53215d.execute(new Runnable() { // from class: w.d
            @Override // java.lang.Runnable
            public final void run() {
                g.this.q(aVar);
            }
        });
        return "clearCaptureRequestOptions";
    }

    private void h(j jVar) {
        synchronized (this.f53216e) {
            this.f53217f.d(jVar);
        }
    }

    private void k() {
        synchronized (this.f53216e) {
            this.f53217f = new a.C0575a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l() {
        c.a aVar = this.f53218g;
        if (aVar != null) {
            aVar.c(null);
            this.f53218g = null;
        }
    }

    private void m(Exception exc) {
        c.a aVar = this.f53218g;
        if (aVar != null) {
            if (exc == null) {
                exc = new Exception("Camera2CameraControl failed with unknown error.");
            }
            aVar.f(exc);
            this.f53218g = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(boolean z10) {
        if (this.f53212a != z10) {
            this.f53212a = z10;
            if (z10) {
                if (this.f53213b) {
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
        this.f53213b = true;
        m(new j.a("Camera2CameraControl was updated with new options."));
        this.f53218g = aVar;
        if (this.f53212a) {
            r();
        }
    }

    private void r() {
        this.f53214c.e0().a(new Runnable() { // from class: w.e
            @Override // java.lang.Runnable
            public final void run() {
                g.this.l();
            }
        }, this.f53215d);
        this.f53213b = false;
    }

    public ListenableFuture g(j jVar) {
        h(jVar);
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: w.a
            @Override // androidx.concurrent.futures.c.InterfaceC0027c
            public final Object a(c.a aVar) {
                return g.a(g.this, aVar);
            }
        }));
    }

    public void i(a.C0575a c0575a) {
        synchronized (this.f53216e) {
            c0575a.e(this.f53217f.a(), r0.c.ALWAYS_OVERRIDE);
        }
    }

    public ListenableFuture j() {
        k();
        return n.s(androidx.concurrent.futures.c.a(new c.InterfaceC0027c() { // from class: w.c
            @Override // androidx.concurrent.futures.c.InterfaceC0027c
            public final Object a(c.a aVar) {
                return g.b(g.this, aVar);
            }
        }));
    }

    public p.a n() {
        p.a c10;
        synchronized (this.f53216e) {
            c10 = this.f53217f.c();
        }
        return c10;
    }

    public void o(final boolean z10) {
        this.f53215d.execute(new Runnable() { // from class: w.b
            @Override // java.lang.Runnable
            public final void run() {
                g.this.p(z10);
            }
        });
    }
}
