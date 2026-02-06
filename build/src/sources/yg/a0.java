package yg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55312a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f55313b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f55314c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f55312a = executor;
        this.f55314c = onCompleteListener;
    }

    @Override // yg.h0
    public final void b(Task task) {
        synchronized (this.f55313b) {
            try {
                if (this.f55314c == null) {
                    return;
                }
                this.f55312a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
