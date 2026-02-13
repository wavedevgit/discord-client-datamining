package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f57050a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f57051b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f57052c;

    public y(Executor executor, e eVar) {
        this.f57050a = executor;
        this.f57052c = eVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f57051b) {
                try {
                    if (this.f57052c == null) {
                        return;
                    }
                    this.f57050a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
