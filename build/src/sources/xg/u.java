package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53856a;

    /* renamed from: b  reason: collision with root package name */
    private final c f53857b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f53858c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f53856a = executor;
        this.f53857b = cVar;
        this.f53858c = m0Var;
    }

    @Override // xg.h0
    public final void b(Task task) {
        this.f53856a.execute(new t(this, task));
    }
}
