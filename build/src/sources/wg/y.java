package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52443a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52444b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f52445c;

    public y(Executor executor, e eVar) {
        this.f52443a = executor;
        this.f52445c = eVar;
    }

    @Override // wg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f52444b) {
                try {
                    if (this.f52445c == null) {
                        return;
                    }
                    this.f52443a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
