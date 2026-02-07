package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55408a;

    /* renamed from: b  reason: collision with root package name */
    private final c f55409b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f55410c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f55408a = executor;
        this.f55409b = cVar;
        this.f55410c = m0Var;
    }

    @Override // yg.h0
    public final void b(Task task) {
        this.f55408a.execute(new t(this, task));
    }
}
