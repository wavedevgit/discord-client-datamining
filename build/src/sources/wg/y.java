package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52654a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52655b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f52656c;

    public y(Executor executor, e eVar) {
        this.f52654a = executor;
        this.f52656c = eVar;
    }

    @Override // wg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f52655b) {
                try {
                    if (this.f52656c == null) {
                        return;
                    }
                    this.f52654a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
