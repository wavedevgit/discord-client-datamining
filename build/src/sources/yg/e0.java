package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55323a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55324b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private g f55325c;

    public e0(Executor executor, g gVar) {
        this.f55323a = executor;
        this.f55325c = gVar;
    }

    @Override // yg.h0
    public final void b(Task task) {
        if (task.p()) {
            synchronized (this.f55324b) {
                try {
                    if (this.f55325c == null) {
                        return;
                    }
                    this.f55323a.execute(new d0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
