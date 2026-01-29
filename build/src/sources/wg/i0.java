package wg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52600a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f52601b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f52602c;

    public final void a(h0 h0Var) {
        synchronized (this.f52600a) {
            try {
                if (this.f52601b == null) {
                    this.f52601b = new ArrayDeque();
                }
                this.f52601b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f52600a) {
            if (this.f52601b != null && !this.f52602c) {
                this.f52602c = true;
                while (true) {
                    synchronized (this.f52600a) {
                        try {
                            h0Var = (h0) this.f52601b.poll();
                            if (h0Var == null) {
                                this.f52602c = false;
                                return;
                            }
                        } finally {
                        }
                    }
                    h0Var.b(task);
                }
            }
        }
    }
}
