package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53865a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53866b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f53867c;

    public y(Executor executor, e eVar) {
        this.f53865a = executor;
        this.f53867c = eVar;
    }

    @Override // xg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f53866b) {
                try {
                    if (this.f53867c == null) {
                        return;
                    }
                    this.f53865a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
