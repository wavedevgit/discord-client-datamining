package wg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52386a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f52387b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f52388c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f52386a = executor;
        this.f52388c = onCompleteListener;
    }

    @Override // wg.h0
    public final void b(Task task) {
        synchronized (this.f52387b) {
            try {
                if (this.f52388c == null) {
                    return;
                }
                this.f52386a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
