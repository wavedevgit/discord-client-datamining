package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f57009a;

    /* renamed from: b  reason: collision with root package name */
    private final j f57010b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f57011c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f57009a = executor;
        this.f57010b = jVar;
        this.f57011c = m0Var;
    }

    @Override // zg.e
    public final void a() {
        this.f57011c.u();
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f57009a.execute(new f0(this, task));
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f57011c.s(exc);
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f57011c.t(obj);
    }
}
