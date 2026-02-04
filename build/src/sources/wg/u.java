package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52431a;

    /* renamed from: b  reason: collision with root package name */
    private final c f52432b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52433c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f52431a = executor;
        this.f52432b = cVar;
        this.f52433c = m0Var;
    }

    @Override // wg.h0
    public final void b(Task task) {
        this.f52431a.execute(new t(this, task));
    }
}
