package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56472a;

    /* renamed from: b  reason: collision with root package name */
    private final c f56473b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56474c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f56472a = executor;
        this.f56473b = cVar;
        this.f56474c = m0Var;
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56472a.execute(new t(this, task));
    }
}
