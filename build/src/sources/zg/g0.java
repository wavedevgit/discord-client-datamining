package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56440a;

    /* renamed from: b  reason: collision with root package name */
    private final j f56441b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56442c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f56440a = executor;
        this.f56441b = jVar;
        this.f56442c = m0Var;
    }

    @Override // zg.e
    public final void a() {
        this.f56442c.u();
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56440a.execute(new f0(this, task));
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f56442c.s(exc);
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f56442c.t(obj);
    }
}
