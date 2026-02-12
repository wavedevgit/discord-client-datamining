package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56436a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56437b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private g f56438c;

    public e0(Executor executor, g gVar) {
        this.f56436a = executor;
        this.f56438c = gVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (task.p()) {
            synchronized (this.f56437b) {
                try {
                    if (this.f56438c == null) {
                        return;
                    }
                    this.f56436a.execute(new d0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
