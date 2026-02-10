package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f23595d;

    /* renamed from: e  reason: collision with root package name */
    private final h f23596e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f23597i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f23598o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f23599p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f23595d = hVar;
        this.f23596e = hVar2;
        this.f23597i = dVar;
        this.f23598o = lifecycle;
        this.f23599p = job;
    }

    public void a() {
        Job.a.a(this.f23599p, null, 1, null);
        i5.d dVar = this.f23597i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f23598o.d((androidx.lifecycle.o) dVar);
        }
        this.f23598o.d(this);
    }

    public final void b() {
        this.f23595d.a(this.f23596e);
    }

    @Override // g5.o
    public void n() {
        if (this.f23597i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f23597i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f23597i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f23598o.a(this);
        i5.d dVar = this.f23597i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f23598o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f23597i.getView()).c(this);
    }
}
