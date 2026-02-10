package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56401a;

    /* renamed from: b  reason: collision with root package name */
    private final j f56402b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56403c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f56401a = executor;
        this.f56402b = jVar;
        this.f56403c = m0Var;
    }

    @Override // zg.e
    public final void a() {
        this.f56403c.u();
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56401a.execute(new f0(this, task));
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f56403c.s(exc);
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f56403c.t(obj);
    }
}
