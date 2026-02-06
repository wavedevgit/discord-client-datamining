package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55318a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55319b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f55320c;

    public c0(Executor executor, f fVar) {
        this.f55318a = executor;
        this.f55320c = fVar;
    }

    @Override // yg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f55319b) {
                try {
                    if (this.f55320c == null) {
                        return;
                    }
                    this.f55318a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
