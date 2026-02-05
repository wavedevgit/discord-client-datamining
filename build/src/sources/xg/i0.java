package xg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f53827a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f53828b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f53829c;

    public final void a(h0 h0Var) {
        synchronized (this.f53827a) {
            try {
                if (this.f53828b == null) {
                    this.f53828b = new ArrayDeque();
                }
                this.f53828b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f53827a) {
            if (this.f53828b != null && !this.f53829c) {
                this.f53829c = true;
                while (true) {
                    synchronized (this.f53827a) {
                        try {
                            h0Var = (h0) this.f53828b.poll();
                            if (h0Var == null) {
                                this.f53829c = false;
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
