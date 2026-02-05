package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53819a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53820b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private g f53821c;

    public e0(Executor executor, g gVar) {
        this.f53819a = executor;
        this.f53821c = gVar;
    }

    @Override // xg.h0
    public final void b(Task task) {
        if (task.p()) {
            synchronized (this.f53820b) {
                try {
                    if (this.f53821c == null) {
                        return;
                    }
                    this.f53819a.execute(new d0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
