package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56993a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56994b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f56995c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f56993a = executor;
        this.f56995c = onCompleteListener;
    }

    @Override // zg.h0
    public final void b(Task task) {
        synchronized (this.f56994b) {
            try {
                if (this.f56995c == null) {
                    return;
                }
                this.f56993a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
