package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53824a;

    /* renamed from: b  reason: collision with root package name */
    private final j f53825b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f53826c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f53824a = executor;
        this.f53825b = jVar;
        this.f53826c = m0Var;
    }

    @Override // xg.e
    public final void a() {
        this.f53826c.u();
    }

    @Override // xg.h0
    public final void b(Task task) {
        this.f53824a.execute(new f0(this, task));
    }

    @Override // xg.f
    public final void onFailure(Exception exc) {
        this.f53826c.s(exc);
    }

    @Override // xg.g
    public final void onSuccess(Object obj) {
        this.f53826c.t(obj);
    }
}
