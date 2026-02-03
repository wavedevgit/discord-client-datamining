package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements o {

    /* renamed from: d  reason: collision with root package name */
    private final Lifecycle f24985d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f24986e;

    public a(Lifecycle lifecycle, Job job) {
        this.f24985d = lifecycle;
        this.f24986e = job;
    }

    @Override // g5.o
    public void B() {
        this.f24985d.d(this);
    }

    public void a() {
        Job.a.a(this.f24986e, null, 1, null);
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        a();
    }

    @Override // g5.o
    public void start() {
        this.f24985d.a(this);
    }
}
