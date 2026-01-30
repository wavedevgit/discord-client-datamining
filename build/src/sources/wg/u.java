package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52645a;

    /* renamed from: b  reason: collision with root package name */
    private final c f52646b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52647c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f52645a = executor;
        this.f52646b = cVar;
        this.f52647c = m0Var;
    }

    @Override // wg.h0
    public final void b(Task task) {
        this.f52645a.execute(new t(this, task));
    }
}
