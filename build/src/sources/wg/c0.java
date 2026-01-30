package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52603a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52604b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f52605c;

    public c0(Executor executor, f fVar) {
        this.f52603a = executor;
        this.f52605c = fVar;
    }

    @Override // wg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f52604b) {
                try {
                    if (this.f52605c == null) {
                        return;
                    }
                    this.f52603a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
