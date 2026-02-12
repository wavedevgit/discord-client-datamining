package zg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56431a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56432b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f56433c;

    public c0(Executor executor, f fVar) {
        this.f56431a = executor;
        this.f56433c = fVar;
    }

    @Override // zg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f56432b) {
                try {
                    if (this.f56433c == null) {
                        return;
                    }
                    this.f56431a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
