package l4;

import androidx.work.impl.a0;
import androidx.work.impl.n0;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import k4.u;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final u f36967a;

    /* renamed from: b  reason: collision with root package name */
    private final n0 f36968b;

    /* renamed from: c  reason: collision with root package name */
    private final long f36969c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f36970d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36971e;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(u runnableScheduler, n0 launcher) {
        this(runnableScheduler, launcher, 0L, 4, null);
        Intrinsics.checkNotNullParameter(runnableScheduler, "runnableScheduler");
        Intrinsics.checkNotNullParameter(launcher, "launcher");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(d this$0, a0 token) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(token, "$token");
        this$0.f36968b.d(token, 3);
    }

    public final void b(a0 token) {
        Runnable runnable;
        Intrinsics.checkNotNullParameter(token, "token");
        synchronized (this.f36970d) {
            runnable = (Runnable) this.f36971e.remove(token);
        }
        if (runnable != null) {
            this.f36967a.a(runnable);
        }
    }

    public final void c(final a0 token) {
        Intrinsics.checkNotNullParameter(token, "token");
        Runnable runnable = new Runnable() { // from class: l4.c
            @Override // java.lang.Runnable
            public final void run() {
                d.d(d.this, token);
            }
        };
        synchronized (this.f36970d) {
            Runnable runnable2 = (Runnable) this.f36971e.put(token, runnable);
        }
        this.f36967a.b(this.f36969c, runnable);
    }

    public d(u runnableScheduler, n0 launcher, long j10) {
        Intrinsics.checkNotNullParameter(runnableScheduler, "runnableScheduler");
        Intrinsics.checkNotNullParameter(launcher, "launcher");
        this.f36967a = runnableScheduler;
        this.f36968b = launcher;
        this.f36969c = j10;
        this.f36970d = new Object();
        this.f36971e = new LinkedHashMap();
    }

    public /* synthetic */ d(u uVar, n0 n0Var, long j10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(uVar, n0Var, (i10 & 4) != 0 ? TimeUnit.MINUTES.toMillis(90L) : j10);
    }
}
