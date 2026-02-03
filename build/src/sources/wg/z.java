package wg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52224d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a0 f52225e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var, Task task) {
        this.f52225e = a0Var;
        this.f52224d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        OnCompleteListener onCompleteListener;
        OnCompleteListener onCompleteListener2;
        obj = this.f52225e.f52165b;
        synchronized (obj) {
            try {
                a0 a0Var = this.f52225e;
                onCompleteListener = a0Var.f52166c;
                if (onCompleteListener != null) {
                    onCompleteListener2 = a0Var.f52166c;
                    onCompleteListener2.onComplete(this.f52224d);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
