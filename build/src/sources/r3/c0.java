package r3;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private final Executor f48371d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f48372e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f48373i;

    /* renamed from: o  reason: collision with root package name */
    private final Object f48374o;

    public c0(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f48371d = executor;
        this.f48372e = new ArrayDeque();
        this.f48374o = new Object();
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
        synchronized (this.f48374o) {
            try {
                Object poll = this.f48372e.poll();
                Runnable runnable = (Runnable) poll;
                this.f48373i = runnable;
                if (poll != null) {
                    this.f48371d.execute(runnable);
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(final Runnable command) {
        Intrinsics.checkNotNullParameter(command, "command");
        synchronized (this.f48374o) {
            try {
                this.f48372e.offer(new Runnable() { // from class: r3.b0
                    @Override // java.lang.Runnable
                    public final void run() {
                        c0.b(command, this);
                    }
                });
                if (this.f48373i == null) {
                    c();
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
