package zg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f57012a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f57013b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f57014c;

    public final void a(h0 h0Var) {
        synchronized (this.f57012a) {
            try {
                if (this.f57013b == null) {
                    this.f57013b = new ArrayDeque();
                }
                this.f57013b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f57012a) {
            if (this.f57013b != null && !this.f57014c) {
                this.f57014c = true;
                while (true) {
                    synchronized (this.f57012a) {
                        try {
                            h0Var = (h0) this.f57013b.poll();
                            if (h0Var == null) {
                                this.f57014c = false;
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
