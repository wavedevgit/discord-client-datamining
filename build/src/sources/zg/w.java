package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56438a;

    /* renamed from: b  reason: collision with root package name */
    private final c f56439b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56440c;

    public w(Executor executor, c cVar, m0 m0Var) {
        this.f56438a = executor;
        this.f56439b = cVar;
        this.f56440c = m0Var;
    }

    @Override // zg.e
    public final void a() {
        this.f56440c.u();
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56438a.execute(new v(this, task));
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f56440c.s(exc);
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f56440c.t(obj);
    }
}
