package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56473a;

    /* renamed from: b  reason: collision with root package name */
    private final c f56474b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56475c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f56473a = executor;
        this.f56474b = cVar;
        this.f56475c = m0Var;
    }

    @Override // zg.h0
    public final void b(Task task) {
        this.f56473a.execute(new t(this, task));
    }
}
