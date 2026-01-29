package wg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Task f52641d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a0 f52642e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var, Task task) {
        this.f52642e = a0Var;
        this.f52641d = task;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        OnCompleteListener onCompleteListener;
        OnCompleteListener onCompleteListener2;
        obj = this.f52642e.f52582b;
        synchronized (obj) {
            try {
                a0 a0Var = this.f52642e;
                onCompleteListener = a0Var.f52583c;
                if (onCompleteListener != null) {
                    onCompleteListener2 = a0Var.f52583c;
                    onCompleteListener2.onComplete(this.f52641d);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
