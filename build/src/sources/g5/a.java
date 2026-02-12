package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements o {

    /* renamed from: d  reason: collision with root package name */
    private final Lifecycle f24763d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f24764e;

    public a(Lifecycle lifecycle, Job job) {
        this.f24763d = lifecycle;
        this.f24764e = job;
    }

    public void a() {
        Job.a.a(this.f24764e, null, 1, null);
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        a();
    }

    @Override // g5.o
    public void p() {
        this.f24763d.d(this);
    }

    @Override // g5.o
    public void start() {
        this.f24763d.a(this);
    }
}
