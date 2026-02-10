package zg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56443a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f56444b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56445c;

    public final void a(h0 h0Var) {
        synchronized (this.f56443a) {
            try {
                if (this.f56444b == null) {
                    this.f56444b = new ArrayDeque();
                }
                this.f56444b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f56443a) {
            if (this.f56444b != null && !this.f56445c) {
                this.f56445c = true;
                while (true) {
                    synchronized (this.f56443a) {
                        try {
                            h0Var = (h0) this.f56444b.poll();
                            if (h0Var == null) {
                                this.f56445c = false;
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
