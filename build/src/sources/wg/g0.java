package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52402a;

    /* renamed from: b  reason: collision with root package name */
    private final j f52403b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52404c;

    public g0(Executor executor, j jVar, m0 m0Var) {
        this.f52402a = executor;
        this.f52403b = jVar;
        this.f52404c = m0Var;
    }

    @Override // wg.e
    public final void a() {
        this.f52404c.u();
    }

    @Override // wg.h0
    public final void b(Task task) {
        this.f52402a.execute(new f0(this, task));
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        this.f52404c.s(exc);
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        this.f52404c.t(obj);
    }
}
