package xg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53808a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53809b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private OnCompleteListener f53810c;

    public a0(Executor executor, OnCompleteListener onCompleteListener) {
        this.f53808a = executor;
        this.f53810c = onCompleteListener;
    }

    @Override // xg.h0
    public final void b(Task task) {
        synchronized (this.f53809b) {
            try {
                if (this.f53810c == null) {
                    return;
                }
                this.f53808a.execute(new z(this, task));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
