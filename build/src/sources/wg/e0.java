package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52175a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52176b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private g f52177c;

    public e0(Executor executor, g gVar) {
        this.f52175a = executor;
        this.f52177c = gVar;
    }

    @Override // wg.h0
    public final void b(Task task) {
        if (task.p()) {
            synchronized (this.f52176b) {
                try {
                    if (this.f52177c == null) {
                        return;
                    }
                    this.f52175a.execute(new d0(this, task));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }
}
