package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56430a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56431b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f56432c;

    public c0(Executor executor, f fVar) {
        this.f56430a = executor;
        this.f56432c = fVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f56431b) {
                try {
                    if (this.f56432c == null) {
                        return;
                    }
                    this.f56430a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
