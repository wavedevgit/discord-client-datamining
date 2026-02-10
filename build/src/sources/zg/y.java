package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56481a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56482b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f56483c;

    public y(Executor executor, e eVar) {
        this.f56481a = executor;
        this.f56483c = eVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f56482b) {
                try {
                    if (this.f56483c == null) {
                        return;
                    }
                    this.f56481a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
