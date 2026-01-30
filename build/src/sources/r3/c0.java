package r3;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private final Executor f47860d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f47861e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f47862i;

    /* renamed from: o  reason: collision with root package name */
    private final Object f47863o;

    public c0(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f47860d = executor;
        this.f47861e = new ArrayDeque();
        this.f47863o = new Object();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(Runnable command, c0 this$0) {
        Intrinsics.checkNotNullParameter(command, "$command");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        try {
            command.run();
        } finally {
            this$0.c();
        }
    }

    public final void c() {
        synchronized (this.f47863o) {
            try {
                Object poll = this.f47861e.poll();
                Runnable runnable = (Runnable) poll;
                this.f47862i = runnable;
                if (poll != null) {
                    this.f47860d.execute(runnable);
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(final Runnable command) {
        Intrinsics.checkNotNullParameter(command, "command");
        synchronized (this.f47863o) {
            try {
                this.f47861e.offer(new Runnable() { // from class: r3.b0
                    @Override // java.lang.Runnable
                    public final void run() {
                        c0.b(command, this);
                    }
                });
                if (this.f47862i == null) {
                    c();
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
