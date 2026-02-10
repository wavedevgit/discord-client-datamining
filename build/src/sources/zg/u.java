package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56433a;

    /* renamed from: b  reason: collision with root package name */
    private final c f56434b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56435c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f56433a = executor;
        this.f56434b = cVar;
        this.f56435c = m0Var;
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56433a.execute(new t(this, task));
    }
}
