package wg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52405a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f52406b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f52407c;

    public final void a(h0 h0Var) {
        synchronized (this.f52405a) {
            try {
                if (this.f52406b == null) {
                    this.f52406b = new ArrayDeque();
                }
                this.f52406b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f52405a) {
            if (this.f52406b != null && !this.f52407c) {
                this.f52407c = true;
                while (true) {
                    synchronized (this.f52405a) {
                        try {
                            h0Var = (h0) this.f52406b.poll();
                            if (h0Var == null) {
                                this.f52407c = false;
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
