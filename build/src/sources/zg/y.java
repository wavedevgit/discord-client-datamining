package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56442a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56443b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f56444c;

    public y(Executor executor, e eVar) {
        this.f56442a = executor;
        this.f56444c = eVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f56443b) {
                try {
                    if (this.f56444c == null) {
                        return;
                    }
                    this.f56442a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
