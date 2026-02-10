package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f24895d;

    /* renamed from: e  reason: collision with root package name */
    private final h f24896e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f24897i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f24898o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f24899p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f24895d = hVar;
        this.f24896e = hVar2;
        this.f24897i = dVar;
        this.f24898o = lifecycle;
        this.f24899p = job;
    }

    public void a() {
        Job.a.a(this.f24899p, null, 1, null);
        i5.d dVar = this.f24897i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f24898o.d((androidx.lifecycle.o) dVar);
        }
        this.f24898o.d(this);
    }

    public final void b() {
        this.f24895d.a(this.f24896e);
    }

    @Override // g5.o
    public void m() {
        if (this.f24897i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f24897i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f24897i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f24898o.a(this);
        i5.d dVar = this.f24897i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f24898o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f24897i.getView()).c(this);
    }
}
