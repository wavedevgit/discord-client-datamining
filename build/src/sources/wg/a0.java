package wg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52383a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52384b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f52385c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f52383a = executor;
        this.f52385c = onCompleteListener;
    }

    @Override // wg.h0
    public final void b(Task task) {
        synchronized (this.f52384b) {
            try {
                if (this.f52385c == null) {
                    return;
                }
                this.f52383a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
