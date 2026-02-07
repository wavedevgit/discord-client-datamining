package androidx.work.impl.workers;

import android.content.Context;
import android.os.Build;
import androidx.work.WorkerParameters;
import androidx.work.c;
import androidx.work.impl.p0;
import androidx.work.impl.workers.ConstraintTrackingWorker;
import com.google.common.util.concurrent.ListenableFuture;
import k4.m;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import m4.b;
import m4.d;
import m4.e;
import m4.f;
import o4.n;
import org.jetbrains.annotations.NotNull;
import p4.u;
import p4.v;
import q4.s;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\n\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002B\u0017\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u000f\u0010\n\u001a\u00020\tH\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\r0\fH\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0010\u001a\u00020\tH\u0016¢\u0006\u0004\b\u0010\u0010\u000bJ\u001f\u0010\u0015\u001a\u00020\t2\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\u001c\u001a\u00020\u00198\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0016\u0010 \u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR8\u0010$\u001a&\u0012\f\u0012\n \"*\u0004\u0018\u00010\r0\r \"*\u0012\u0012\f\u0012\n \"*\u0004\u0018\u00010\r0\r\u0018\u00010!0!8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\n\u0010#R(\u0010*\u001a\u0004\u0018\u00010\u00012\b\u0010%\u001a\u0004\u0018\u00010\u00018G@BX\u0086\u000e¢\u0006\f\n\u0004\b&\u0010'\u001a\u0004\b(\u0010)¨\u0006+"}, d2 = {"Landroidx/work/impl/workers/ConstraintTrackingWorker;", "Landroidx/work/c;", "Lm4/d;", "Landroid/content/Context;", "appContext", "Landroidx/work/WorkerParameters;", "workerParameters", "<init>", "(Landroid/content/Context;Landroidx/work/WorkerParameters;)V", "", "s", "()V", "Lcom/google/common/util/concurrent/ListenableFuture;", "Landroidx/work/c$a;", "n", "()Lcom/google/common/util/concurrent/ListenableFuture;", "l", "Lp4/u;", "workSpec", "Lm4/b;", "state", "a", "(Lp4/u;Lm4/b;)V", "p", "Landroidx/work/WorkerParameters;", "", "q", "Ljava/lang/Object;", "lock", "", "r", "Z", "areConstraintsUnmet", "Landroidx/work/impl/utils/futures/c;", "kotlin.jvm.PlatformType", "Landroidx/work/impl/utils/futures/c;", "future", "<set-?>", "t", "Landroidx/work/c;", "getDelegate", "()Landroidx/work/c;", "delegate", "work-runtime_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nConstraintTrackingWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ConstraintTrackingWorker.kt\nandroidx/work/impl/workers/ConstraintTrackingWorker\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,167:1\n1#2:168\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ConstraintTrackingWorker extends c implements d {

    /* renamed from: p  reason: collision with root package name */
    private final WorkerParameters f6212p;

    /* renamed from: q  reason: collision with root package name */
    private final Object f6213q;

    /* renamed from: r  reason: collision with root package name */
    private volatile boolean f6214r;

    /* renamed from: s  reason: collision with root package name */
    private final androidx.work.impl.utils.futures.c f6215s;

    /* renamed from: t  reason: collision with root package name */
    private c f6216t;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ConstraintTrackingWorker(@NotNull Context appContext, @NotNull WorkerParameters workerParameters) {
        super(appContext, workerParameters);
        Intrinsics.checkNotNullParameter(appContext, "appContext");
        Intrinsics.checkNotNullParameter(workerParameters, "workerParameters");
        this.f6212p = workerParameters;
        this.f6213q = new Object();
        this.f6215s = androidx.work.impl.utils.futures.c.t();
    }

    private final void s() {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        if (this.f6215s.isCancelled()) {
            return;
        }
        String l10 = f().l("androidx.work.impl.workers.ConstraintTrackingWorker.ARGUMENT_CLASS_NAME");
        m e10 = m.e();
        Intrinsics.checkNotNullExpressionValue(e10, "get()");
        if (l10 == null || l10.length() == 0) {
            str = s4.d.f49711a;
            e10.c(str, "No worker to delegate to.");
            androidx.work.impl.utils.futures.c future = this.f6215s;
            Intrinsics.checkNotNullExpressionValue(future, "future");
            s4.d.d(future);
            return;
        }
        c b10 = i().b(b(), l10, this.f6212p);
        this.f6216t = b10;
        if (b10 == null) {
            str6 = s4.d.f49711a;
            e10.a(str6, "No worker to delegate to.");
            androidx.work.impl.utils.futures.c future2 = this.f6215s;
            Intrinsics.checkNotNullExpressionValue(future2, "future");
            s4.d.d(future2);
            return;
        }
        p0 k10 = p0.k(b());
        Intrinsics.checkNotNullExpressionValue(k10, "getInstance(applicationContext)");
        v H = k10.p().H();
        String uuid = e().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
        u i10 = H.i(uuid);
        if (i10 == null) {
            androidx.work.impl.utils.futures.c future3 = this.f6215s;
            Intrinsics.checkNotNullExpressionValue(future3, "future");
            s4.d.d(future3);
            return;
        }
        n o10 = k10.o();
        Intrinsics.checkNotNullExpressionValue(o10, "workManagerImpl.trackers");
        e eVar = new e(o10);
        CoroutineDispatcher b11 = k10.q().b();
        Intrinsics.checkNotNullExpressionValue(b11, "workManagerImpl.workTask…r.taskCoroutineDispatcher");
        final Job b12 = f.b(eVar, i10, b11, this);
        this.f6215s.a(new Runnable() { // from class: s4.b
            @Override // java.lang.Runnable
            public final void run() {
                ConstraintTrackingWorker.t(Job.this);
            }
        }, new s());
        if (eVar.a(i10)) {
            str3 = s4.d.f49711a;
            e10.a(str3, "Constraints met for delegate " + l10);
            try {
                c cVar = this.f6216t;
                Intrinsics.checkNotNull(cVar);
                final ListenableFuture n10 = cVar.n();
                Intrinsics.checkNotNullExpressionValue(n10, "delegate!!.startWork()");
                n10.a(new Runnable() { // from class: s4.c
                    @Override // java.lang.Runnable
                    public final void run() {
                        ConstraintTrackingWorker.u(ConstraintTrackingWorker.this, n10);
                    }
                }, c());
                return;
            } catch (Throwable th2) {
                str4 = s4.d.f49711a;
                e10.b(str4, "Delegated worker " + l10 + " threw exception in startWork.", th2);
                synchronized (this.f6213q) {
                    try {
                        if (this.f6214r) {
                            str5 = s4.d.f49711a;
                            e10.a(str5, "Constraints were unmet, Retrying.");
                            androidx.work.impl.utils.futures.c future4 = this.f6215s;
                            Intrinsics.checkNotNullExpressionValue(future4, "future");
                            s4.d.e(future4);
                            return;
                        }
                        androidx.work.impl.utils.futures.c future5 = this.f6215s;
                        Intrinsics.checkNotNullExpressionValue(future5, "future");
                        s4.d.d(future5);
                        return;
                    } catch (Throwable th3) {
                        throw th3;
                    }
                }
            }
        }
        str2 = s4.d.f49711a;
        e10.a(str2, "Constraints not met for delegate " + l10 + ". Requesting retry.");
        androidx.work.impl.utils.futures.c future6 = this.f6215s;
        Intrinsics.checkNotNullExpressionValue(future6, "future");
        s4.d.e(future6);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(Job job) {
        Intrinsics.checkNotNullParameter(job, "$job");
        job.k(null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void u(ConstraintTrackingWorker this$0, ListenableFuture innerFuture) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(innerFuture, "$innerFuture");
        synchronized (this$0.f6213q) {
            try {
                if (this$0.f6214r) {
                    androidx.work.impl.utils.futures.c future = this$0.f6215s;
                    Intrinsics.checkNotNullExpressionValue(future, "future");
                    s4.d.e(future);
                } else {
                    this$0.f6215s.r(innerFuture);
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(ConstraintTrackingWorker this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        this$0.s();
    }

    @Override // m4.d
    public void a(u workSpec, b state) {
        String str;
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        Intrinsics.checkNotNullParameter(state, "state");
        m e10 = m.e();
        str = s4.d.f49711a;
        e10.a(str, "Constraints changed for " + workSpec);
        if (state instanceof b.C0497b) {
            synchronized (this.f6213q) {
                this.f6214r = true;
                Unit unit = Unit.f32056a;
            }
        }
    }

    @Override // androidx.work.c
    public void l() {
        int i10;
        super.l();
        c cVar = this.f6216t;
        if (cVar != null && !cVar.j()) {
            if (Build.VERSION.SDK_INT >= 31) {
                i10 = g();
            } else {
                i10 = 0;
            }
            cVar.o(i10);
        }
    }

    @Override // androidx.work.c
    public ListenableFuture n() {
        c().execute(new Runnable() { // from class: s4.a
            @Override // java.lang.Runnable
            public final void run() {
                ConstraintTrackingWorker.v(ConstraintTrackingWorker.this);
            }
        });
        androidx.work.impl.utils.futures.c future = this.f6215s;
        Intrinsics.checkNotNullExpressionValue(future, "future");
        return future;
    }
}
