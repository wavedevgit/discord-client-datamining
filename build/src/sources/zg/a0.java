package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f56424a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f56425b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f56426c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f56424a = executor;
        this.f56426c = onCompleteListener;
    }

    @Override // zg.h0
    public final void b(Task task) {
        synchronized (this.f56425b) {
            try {
                if (this.f56426c == null) {
                    return;
                }
                this.f56424a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
