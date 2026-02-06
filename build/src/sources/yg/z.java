package yg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f55372d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a0 f55373e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var, Task task) {
        this.f55373e = a0Var;
        this.f55372d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        OnCompleteListener onCompleteListener;
        OnCompleteListener onCompleteListener2;
        obj = this.f55373e.f55313b;
        synchronized (obj) {
            try {
                a0 a0Var = this.f55373e;
                onCompleteListener = a0Var.f55314c;
                if (onCompleteListener != null) {
                    onCompleteListener2 = a0Var.f55314c;
                    onCompleteListener2.onComplete(this.f55372d);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
