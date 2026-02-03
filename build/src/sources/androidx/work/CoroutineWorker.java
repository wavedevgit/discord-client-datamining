package androidx.work;

import android.content.Context;
import androidx.work.CoroutineWorker;
import androidx.work.c;
import com.google.common.util.concurrent.ListenableFuture;
import hs.m0;
import k4.l;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.a0;
import kotlinx.coroutines.i;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\b&\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0013\u0010\n\u001a\b\u0012\u0004\u0012\u00020\t0\b¢\u0006\u0004\b\n\u0010\u000bJ\u0013\u0010\f\u001a\u00020\tH¦@ø\u0001\u0000¢\u0006\u0004\b\f\u0010\rJ\u0013\u0010\u000f\u001a\u00020\u000eH\u0096@ø\u0001\u0000¢\u0006\u0004\b\u000f\u0010\rJ\u0013\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000e0\b¢\u0006\u0004\b\u0010\u0010\u000bJ\r\u0010\u0012\u001a\u00020\u0011¢\u0006\u0004\b\u0012\u0010\u0013R\u001a\u0010\u0019\u001a\u00020\u00148\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018R \u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\t0\u001a8\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u001b\u0010\u001c\u001a\u0004\b\u001d\u0010\u001eR \u0010%\u001a\u00020 8\u0016X\u0097\u0004¢\u0006\u0012\n\u0004\b\f\u0010!\u0012\u0004\b$\u0010\u0013\u001a\u0004\b\"\u0010#\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006&"}, d2 = {"Landroidx/work/CoroutineWorker;", "Landroidx/work/c;", "Landroid/content/Context;", "appContext", "Landroidx/work/WorkerParameters;", "params", "<init>", "(Landroid/content/Context;Landroidx/work/WorkerParameters;)V", "Lcom/google/common/util/concurrent/ListenableFuture;", "Landroidx/work/c$a;", "n", "()Lcom/google/common/util/concurrent/ListenableFuture;", "r", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lk4/g;", "t", "d", "", "l", "()V", "Lkotlinx/coroutines/CompletableJob;", "p", "Lkotlinx/coroutines/CompletableJob;", "getJob$work_runtime_release", "()Lkotlinx/coroutines/CompletableJob;", "job", "Landroidx/work/impl/utils/futures/c;", "q", "Landroidx/work/impl/utils/futures/c;", "v", "()Landroidx/work/impl/utils/futures/c;", "future", "Lkotlinx/coroutines/CoroutineDispatcher;", "Lkotlinx/coroutines/CoroutineDispatcher;", "s", "()Lkotlinx/coroutines/CoroutineDispatcher;", "getCoroutineContext$annotations", "coroutineContext", "work-runtime_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCoroutineWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CoroutineWorker.kt\nandroidx/work/CoroutineWorker\n+ 2 ListenableFuture.kt\nandroidx/work/ListenableFutureKt\n+ 3 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n*L\n1#1,144:1\n40#2,8:145\n48#2:162\n60#2,7:163\n40#2,8:172\n48#2:189\n60#2,7:190\n314#3,9:153\n323#3,2:170\n314#3,9:180\n323#3,2:197\n*S KotlinDebug\n*F\n+ 1 CoroutineWorker.kt\nandroidx/work/CoroutineWorker\n*L\n110#1:145,8\n110#1:162\n110#1:163,7\n125#1:172,8\n125#1:189\n125#1:190,7\n110#1:153,9\n110#1:170,2\n125#1:180,9\n125#1:197,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class CoroutineWorker extends c {

    /* renamed from: p  reason: collision with root package name */
    private final CompletableJob f5483p;

    /* renamed from: q  reason: collision with root package name */
    private final androidx.work.impl.utils.futures.c f5484q;

    /* renamed from: r  reason: collision with root package name */
    private final CoroutineDispatcher f5485r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f5486d;

        /* renamed from: e  reason: collision with root package name */
        int f5487e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f5488i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ CoroutineWorker f5489o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(l lVar, CoroutineWorker coroutineWorker, Continuation continuation) {
            super(2, continuation);
            this.f5488i = lVar;
            this.f5489o = coroutineWorker;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f5488i, this.f5489o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            l lVar;
            Object f10 = pr.b.f();
            int i10 = this.f5487e;
            if (i10 != 0) {
                if (i10 == 1) {
                    lVar = (l) this.f5486d;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                l lVar2 = this.f5488i;
                CoroutineWorker coroutineWorker = this.f5489o;
                this.f5486d = lVar2;
                this.f5487e = 1;
                Object t10 = coroutineWorker.t(this);
                if (t10 == f10) {
                    return f10;
                }
                lVar = lVar2;
                obj = t10;
            }
            lVar.c(obj);
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f5490d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f5490d;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    CoroutineWorker coroutineWorker = CoroutineWorker.this;
                    this.f5490d = 1;
                    obj = coroutineWorker.r(this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                CoroutineWorker.this.v().p((c.a) obj);
            } catch (Throwable th2) {
                CoroutineWorker.this.v().q(th2);
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CoroutineWorker(@NotNull Context appContext, @NotNull WorkerParameters params) {
        super(appContext, params);
        CompletableJob b10;
        Intrinsics.checkNotNullParameter(appContext, "appContext");
        Intrinsics.checkNotNullParameter(params, "params");
        b10 = a0.b(null, 1, null);
        this.f5483p = b10;
        androidx.work.impl.utils.futures.c t10 = androidx.work.impl.utils.futures.c.t();
        Intrinsics.checkNotNullExpressionValue(t10, "create()");
        this.f5484q = t10;
        t10.a(new Runnable() { // from class: k4.e
            @Override // java.lang.Runnable
            public final void run() {
                CoroutineWorker.q(CoroutineWorker.this);
            }
        }, h().c());
        this.f5485r = m0.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(CoroutineWorker this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (this$0.f5484q.isCancelled()) {
            Job.a.a(this$0.f5483p, null, 1, null);
        }
    }

    static /* synthetic */ Object u(CoroutineWorker coroutineWorker, Continuation continuation) {
        throw new IllegalStateException("Not implemented");
    }

    @Override // androidx.work.c
    public final ListenableFuture d() {
        CompletableJob b10;
        b10 = a0.b(null, 1, null);
        CoroutineScope a10 = i.a(s().Z0(b10));
        l lVar = new l(b10, null, 2, null);
        hs.i.d(a10, null, null, new a(lVar, this, null), 3, null);
        return lVar;
    }

    @Override // androidx.work.c
    public final void l() {
        super.l();
        this.f5484q.cancel(false);
    }

    @Override // androidx.work.c
    public final ListenableFuture n() {
        hs.i.d(i.a(s().Z0(this.f5483p)), null, null, new b(null), 3, null);
        return this.f5484q;
    }

    public abstract Object r(Continuation continuation);

    public CoroutineDispatcher s() {
        return this.f5485r;
    }

    public Object t(Continuation continuation) {
        return u(this, continuation);
    }

    public final androidx.work.impl.utils.futures.c v() {
        return this.f5484q;
    }
}
