package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f57041a;

    /* renamed from: b  reason: collision with root package name */
    private final c f57042b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f57043c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f57041a = executor;
        this.f57042b = cVar;
        this.f57043c = m0Var;
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f57041a.execute(new t(this, task));
    }
}
