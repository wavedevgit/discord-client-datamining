package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56999a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f57000b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f57001c;

    public c0(Executor executor, f fVar) {
        this.f56999a = executor;
        this.f57001c = fVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f57000b) {
                try {
                    if (this.f57001c == null) {
                        return;
                    }
                    this.f56999a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
