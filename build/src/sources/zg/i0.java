package zg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56444a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f56445b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56446c;

    public final void a(h0 h0Var) {
        synchronized (this.f56444a) {
            try {
                if (this.f56445b == null) {
                    this.f56445b = new ArrayDeque();
                }
                this.f56445b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f56444a) {
            if (this.f56445b != null && !this.f56446c) {
                this.f56446c = true;
                while (true) {
                    synchronized (this.f56444a) {
                        try {
                            h0Var = (h0) this.f56445b.poll();
                            if (h0Var == null) {
                                this.f56446c = false;
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
