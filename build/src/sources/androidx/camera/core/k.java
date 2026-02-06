package androidx.camera.core;

import a0.j1;
import androidx.camera.core.e;
import androidx.camera.core.k;
import java.lang.ref.WeakReference;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k extends i {

    /* renamed from: t  reason: collision with root package name */
    final Executor f2458t;

    /* renamed from: u  reason: collision with root package name */
    private final Object f2459u = new Object();

    /* renamed from: v  reason: collision with root package name */
    n f2460v;

    /* renamed from: w  reason: collision with root package name */
    private b f2461w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ b f2462a;

        a(b bVar) {
            this.f2462a = bVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            this.f2462a.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends e {

        /* renamed from: o  reason: collision with root package name */
        final WeakReference f2464o;

        b(n nVar, k kVar) {
            super(nVar);
            this.f2464o = new WeakReference(kVar);
            a(new e.a() { // from class: androidx.camera.core.l
                @Override // androidx.camera.core.e.a
                public final void a(n nVar2) {
                    k.b.k(k.b.this, nVar2);
                }
            });
        }

        public static /* synthetic */ void k(b bVar, n nVar) {
            final k kVar = (k) bVar.f2464o.get();
            if (kVar != null) {
                kVar.f2458t.execute(new Runnable() { // from class: androidx.camera.core.m
                    @Override // java.lang.Runnable
                    public final void run() {
                        k.this.x();
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Executor executor) {
        this.f2458t = executor;
    }

    @Override // androidx.camera.core.i
    n d(j1 j1Var) {
        return j1Var.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.camera.core.i
    public void g() {
        synchronized (this.f2459u) {
            try {
                n nVar = this.f2460v;
                if (nVar != null) {
                    nVar.close();
                    this.f2460v = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // androidx.camera.core.i
    void m(n nVar) {
        synchronized (this.f2459u) {
            try {
                if (!this.f2446s) {
                    nVar.close();
                } else if (this.f2461w != null) {
                    if (nVar.E().a() <= this.f2461w.E().a()) {
                        nVar.close();
                    } else {
                        n nVar2 = this.f2460v;
                        if (nVar2 != null) {
                            nVar2.close();
                        }
                        this.f2460v = nVar;
                    }
                } else {
                    b bVar = new b(nVar, this);
                    this.f2461w = bVar;
                    d0.n.j(e(bVar), new a(bVar), c0.a.a());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x() {
        synchronized (this.f2459u) {
            try {
                this.f2461w = null;
                n nVar = this.f2460v;
                if (nVar != null) {
                    this.f2460v = null;
                    m(nVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
