package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f57004a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f57005b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private g f57006c;

    public e0(Executor executor, g gVar) {
        this.f57004a = executor;
        this.f57006c = gVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (task.p()) {
            synchronized (this.f57005b) {
                try {
                    if (this.f57006c == null) {
                        return;
                    }
                    this.f57004a.execute(new d0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
