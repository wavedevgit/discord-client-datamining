package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class z implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f57053d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a0 f57054e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var, Task task) {
        this.f57054e = a0Var;
        this.f57053d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        OnCompleteListener onCompleteListener;
        OnCompleteListener onCompleteListener2;
        obj = this.f57054e.f56994b;
        synchronized (obj) {
            try {
                a0 a0Var = this.f57054e;
                onCompleteListener = a0Var.f56995c;
                if (onCompleteListener != null) {
                    onCompleteListener2 = a0Var.f56995c;
                    onCompleteListener2.onComplete(this.f57053d);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
