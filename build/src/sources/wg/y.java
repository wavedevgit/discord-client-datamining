package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52638a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52639b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private e f52640c;

    public y(Executor executor, e eVar) {
        this.f52638a = executor;
        this.f52640c = eVar;
    }

    @Override // wg.h0
    public final void b(Task task) {
        if (task.n()) {
            synchronized (this.f52639b) {
                try {
                    if (this.f52640c == null) {
                        return;
                    }
                    this.f52638a.execute(new x(this));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
