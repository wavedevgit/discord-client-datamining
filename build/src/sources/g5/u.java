package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f24070d;

    /* renamed from: e  reason: collision with root package name */
    private final h f24071e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f24072i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f24073o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f24074p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f24070d = hVar;
        this.f24071e = hVar2;
        this.f24072i = dVar;
        this.f24073o = lifecycle;
        this.f24074p = job;
    }

    public void a() {
        Job.a.a(this.f24074p, null, 1, null);
        i5.d dVar = this.f24072i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f24073o.d((androidx.lifecycle.o) dVar);
        }
        this.f24073o.d(this);
    }

    public final void b() {
        this.f24070d.a(this.f24071e);
    }

    @Override // g5.o
    public void n() {
        if (this.f24072i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f24072i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f24072i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f24073o.a(this);
        i5.d dVar = this.f24072i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f24073o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f24072i.getView()).c(this);
    }
}
