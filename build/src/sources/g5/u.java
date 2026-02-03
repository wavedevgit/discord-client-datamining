package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u implements o {

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f25921d;

    /* renamed from: e  reason: collision with root package name */
    private final h f25922e;

    /* renamed from: i  reason: collision with root package name */
    private final i5.d f25923i;

    /* renamed from: o  reason: collision with root package name */
    private final Lifecycle f25924o;

    /* renamed from: p  reason: collision with root package name */
    private final Job f25925p;

    public u(v4.h hVar, h hVar2, i5.d dVar, Lifecycle lifecycle, Job job) {
        this.f25921d = hVar;
        this.f25922e = hVar2;
        this.f25923i = dVar;
        this.f25924o = lifecycle;
        this.f25925p = job;
    }

    public void a() {
        Job.a.a(this.f25925p, null, 1, null);
        i5.d dVar = this.f25923i;
        if (dVar instanceof androidx.lifecycle.o) {
            this.f25924o.d((androidx.lifecycle.o) dVar);
        }
        this.f25924o.d(this);
    }

    public final void b() {
        this.f25921d.a(this.f25922e);
    }

    @Override // g5.o
    public void n() {
        if (this.f25923i.getView().isAttachedToWindow()) {
            return;
        }
        k5.k.l(this.f25923i.getView()).c(this);
        throw new CancellationException("'ViewTarget.view' must be attached to a window.");
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        k5.k.l(this.f25923i.getView()).a();
    }

    @Override // g5.o
    public void start() {
        this.f25924o.a(this);
        i5.d dVar = this.f25923i;
        if (dVar instanceof androidx.lifecycle.o) {
            k5.g.b(this.f25924o, (androidx.lifecycle.o) dVar);
        }
        k5.k.l(this.f25923i.getView()).c(this);
    }
}
