package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f23817d;

    /* renamed from: e  reason: collision with root package name */
    private final h f23818e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f23819i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f23820o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f23821p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f23817d = hVar;
        this.f23818e = hVar2;
        this.f23819i = dVar;
        this.f23820o = lifecycle;
        this.f23821p = job;
    }

    public void a() {
        Job.a.a(this.f23821p, null, 1, null);
        i5.d dVar = this.f23819i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f23820o.d((androidx.lifecycle.o) dVar);
        }
        this.f23820o.d(this);
    }

    public final void b() {
        this.f23817d.a(this.f23818e);
    }

    @Override // g5.o
    public void o() {
        if (this.f23819i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f23819i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f23819i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f23820o.a(this);
        i5.d dVar = this.f23819i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f23820o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f23819i.getView()).c(this);
    }
}
