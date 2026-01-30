package k4;

import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements ListenableFuture {

    /* renamed from: d  reason: collision with root package name */
    private final Job f32985d;

    /* renamed from: e  reason: collision with root package name */
    private final androidx.work.impl.utils.futures.c f32986e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {
        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            if (th2 == null) {
                if (!l.this.f32986e.isDone()) {
                    throw new IllegalArgumentException("Failed requirement.");
                }
            } else if (th2 instanceof CancellationException) {
                l.this.f32986e.cancel(true);
            } else {
                androidx.work.impl.utils.futures.c cVar = l.this.f32986e;
                Throwable cause = th2.getCause();
                if (cause != null) {
                    th2 = cause;
                }
                cVar.q(th2);
            }
        }
    }

    public l(Job job, androidx.work.impl.utils.futures.c underlying) {
        Intrinsics.checkNotNullParameter(job, "job");
        Intrinsics.checkNotNullParameter(underlying, "underlying");
        this.f32985d = job;
        this.f32986e = underlying;
        job.C0(new a());
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public void a(Runnable runnable, Executor executor) {
        this.f32986e.a(runnable, executor);
    }

    public final void c(Object obj) {
        this.f32986e.p(obj);
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        return this.f32986e.cancel(z10);
    }

    @Override // java.util.concurrent.Future
    public Object get() {
        return this.f32986e.get();
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return this.f32986e.isCancelled();
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        return this.f32986e.isDone();
    }

    @Override // java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        return this.f32986e.get(j10, timeUnit);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ l(kotlinx.coroutines.Job r1, androidx.work.impl.utils.futures.c r2, int r3, kotlin.jvm.internal.DefaultConstructorMarker r4) {
        /*
            r0 = this;
            r3 = r3 & 2
            if (r3 == 0) goto Ld
            androidx.work.impl.utils.futures.c r2 = androidx.work.impl.utils.futures.c.t()
            java.lang.String r3 = "create()"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)
        Ld:
            r0.<init>(r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: k4.l.<init>(kotlinx.coroutines.Job, androidx.work.impl.utils.futures.c, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
