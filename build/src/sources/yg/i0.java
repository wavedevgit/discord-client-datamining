package yg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55379a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f55380b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55381c;

    public final void a(h0 h0Var) {
        synchronized (this.f55379a) {
            try {
                if (this.f55380b == null) {
                    this.f55380b = new ArrayDeque();
                }
                this.f55380b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f55379a) {
            if (this.f55380b != null && !this.f55381c) {
                this.f55381c = true;
                while (true) {
                    synchronized (this.f55379a) {
                        try {
                            h0Var = (h0) this.f55380b.poll();
                            if (h0Var == null) {
                                this.f55381c = false;
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
