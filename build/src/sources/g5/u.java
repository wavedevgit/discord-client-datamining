package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f25118d;

    /* renamed from: e  reason: collision with root package name */
    private final h f25119e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f25120i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f25121o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f25122p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f25118d = hVar;
        this.f25119e = hVar2;
        this.f25120i = dVar;
        this.f25121o = lifecycle;
        this.f25122p = job;
    }

    public void a() {
        Job.a.a(this.f25122p, null, 1, null);
        i5.d dVar = this.f25120i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f25121o.d((androidx.lifecycle.o) dVar);
        }
        this.f25121o.d(this);
    }

    public final void b() {
        this.f25118d.a(this.f25119e);
    }

    @Override // g5.o
    public void n() {
        if (this.f25120i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f25120i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f25120i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f25121o.a(this);
        i5.d dVar = this.f25120i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f25121o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f25120i.getView()).c(this);
    }
}
