package g5;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements o {

    /* renamed from: d  reason: collision with root package name */
    private final Lifecycle f23684d;

    /* renamed from: e  reason: collision with root package name */
    private final Job f23685e;

    public a(Lifecycle lifecycle, Job job) {
        this.f23684d = lifecycle;
        this.f23685e = job;
    }

    public void a() {
        Job.a.a(this.f23685e, null, 1, null);
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner lifecycleOwner) {
        a();
    }

    @Override // g5.o
    public void start() {
        this.f23684d.a(this);
    }

    @Override // g5.o
    public void y() {
        this.f23684d.d(this);
    }
}
