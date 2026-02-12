package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f24896d;

    /* renamed from: e  reason: collision with root package name */
    private final h f24897e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f24898i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f24899o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f24900p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f24896d = hVar;
        this.f24897e = hVar2;
        this.f24898i = dVar;
        this.f24899o = lifecycle;
        this.f24900p = job;
    }

    public void a() {
        Job.a.a(this.f24900p, null, 1, null);
        i5.d dVar = this.f24898i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f24899o.d((androidx.lifecycle.o) dVar);
        }
        this.f24899o.d(this);
    }

    public final void b() {
        this.f24896d.a(this.f24897e);
    }

    @Override // g5.o
    public void m() {
        if (this.f24898i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f24898i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f24898i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f24899o.a(this);
        i5.d dVar = this.f24898i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f24899o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f24898i.getView()).c(this);
    }
}
