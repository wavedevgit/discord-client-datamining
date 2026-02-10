package zg;

import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56404a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private Queue f56405b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56406c;

    public final void a(h0 h0Var) {
        synchronized (this.f56404a) {
            try {
                if (this.f56405b == null) {
                    this.f56405b = new ArrayDeque();
                }
                this.f56405b.add(h0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Task task) {
        h0 h0Var;
        synchronized (this.f56404a) {
            if (this.f56405b != null && !this.f56406c) {
                this.f56406c = true;
                while (true) {
                    synchronized (this.f56404a) {
                        try {
                            h0Var = (h0) this.f56405b.poll();
                            if (h0Var == null) {
                                this.f56406c = false;
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
