package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52629a;

    /* renamed from: b  reason: collision with root package name */
    private final c f52630b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52631c;

    public u(Executor executor, c cVar, m0 m0Var) {
        this.f52629a = executor;
        this.f52630b = cVar;
        this.f52631c = m0Var;
    }

    @Override // wg.h0
    public final void b(Task task) {
        this.f52629a.execute(new t(this, task));
    }
}
