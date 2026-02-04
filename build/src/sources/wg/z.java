package wg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52443d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a0 f52444e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var, Task task) {
        this.f52444e = a0Var;
        this.f52443d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        OnCompleteListener onCompleteListener;
        OnCompleteListener onCompleteListener2;
        obj = this.f52444e.f52384b;
        synchronized (obj) {
            try {
                a0 a0Var = this.f52444e;
                onCompleteListener = a0Var.f52385c;
                if (onCompleteListener != null) {
                    onCompleteListener2 = a0Var.f52385c;
                    onCompleteListener2.onComplete(this.f52443d);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
