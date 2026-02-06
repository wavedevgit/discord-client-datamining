package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55369a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55370b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f55371c;

    public y(Executor executor, e eVar) {
        this.f55369a = executor;
        this.f55371c = eVar;
    }

    @Override // yg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f55370b) {
                try {
                    if (this.f55371c == null) {
                        return;
                    }
                    this.f55369a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
