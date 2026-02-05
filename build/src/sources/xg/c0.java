package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53814a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53815b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private f f53816c;

    public c0(Executor executor, f fVar) {
        this.f53814a = executor;
        this.f53816c = fVar;
    }

    @Override // xg.h0
    public final void b(Task task) {
        if (!task.p() && !task.n()) {
            synchronized (this.f53815b) {
                try {
                    if (this.f53816c == null) {
                        return;
                    }
                    this.f53814a.execute(new b0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
