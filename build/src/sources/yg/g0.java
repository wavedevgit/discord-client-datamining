package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55328a;

    /* renamed from: b  reason: collision with root package name */
    private final j f55329b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f55330c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f55328a = executor;
        this.f55329b = jVar;
        this.f55330c = m0Var;
    }

    @Override // yg.e
    public final void a() {
        this.f55330c.u();
    }

    @Override // yg.h0
    public final void b(Task task) {
        this.f55328a.execute(new f0(this, task));
    }

    @Override // yg.f
    public final void onFailure(Exception exc) {
        this.f55330c.s(exc);
    }

    @Override // yg.g
    public final void onSuccess(Object obj) {
        this.f55330c.t(obj);
    }
}
