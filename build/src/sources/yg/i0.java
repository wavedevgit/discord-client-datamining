package yg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55331a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f55332b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55333c;

    public final void a(h0 h0Var) {
        synchronized (this.f55331a) {
            try {
                if (this.f55332b == null) {
                    this.f55332b = new ArrayDeque();
                }
                this.f55332b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f55331a) {
            if (this.f55332b != null && !this.f55333c) {
                this.f55333c = true;
                while (true) {
                    synchronized (this.f55331a) {
                        try {
                            h0Var = (h0) this.f55332b.poll();
                            if (h0Var == null) {
                                this.f55333c = false;
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
