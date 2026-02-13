package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class w implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f57046a;

    /* renamed from: b  reason: collision with root package name */
    private final c f57047b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f57048c;

    public w(Executor executor, c cVar, m0 m0Var) {
        this.f57046a = executor;
        this.f57047b = cVar;
        this.f57048c = m0Var;
    }

    @Override // zg.e
    public final void a() {
        this.f57048c.u();
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f57046a.execute(new v(this, task));
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f57048c.s(exc);
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f57048c.t(obj);
    }
}
