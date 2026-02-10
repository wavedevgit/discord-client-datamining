package fw;

import java.lang.reflect.Method;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ fw.d f24468d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(fw.d dVar) {
            super(1);
            this.f24468d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31987a;
        }

        public final void invoke(Throwable th2) {
            this.f24468d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements fw.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f24469a;

        b(CancellableContinuation cancellableContinuation) {
            this.f24469a = cancellableContinuation;
        }

        @Override // fw.f
        public void a(fw.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f24469a;
            Result.a aVar = Result.f31984e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // fw.f
        public void b(fw.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                Object a10 = response.a();
                if (a10 == null) {
                    Object m10 = call.i().m(q.class);
                    Intrinsics.checkNotNull(m10);
                    q qVar = (q) m10;
                    Class b10 = qVar.b();
                    Method a11 = qVar.a();
                    as.i iVar = new as.i("Response from " + b10.getName() + '.' + a11.getName() + " was null but response body type was declared as non-null");
                    CancellableContinuation cancellableContinuation = this.f24469a;
                    Result.a aVar = Result.f31984e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iVar)));
                    return;
                }
                this.f24469a.resumeWith(Result.b(a10));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f24469a;
            Result.a aVar2 = Result.f31984e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ fw.d f24470d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(fw.d dVar) {
            super(1);
            this.f24470d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31987a;
        }

        public final void invoke(Throwable th2) {
            this.f24470d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements fw.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f24471a;

        d(CancellableContinuation cancellableContinuation) {
            this.f24471a = cancellableContinuation;
        }

        @Override // fw.f
        public void a(fw.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f24471a;
            Result.a aVar = Result.f31984e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // fw.f
        public void b(fw.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                CancellableContinuation cancellableContinuation = this.f24471a;
                Result.a aVar = Result.f31984e;
                cancellableContinuation.resumeWith(Result.b(response.a()));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f24471a;
            Result.a aVar2 = Result.f31984e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ fw.d f24472d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(fw.d dVar) {
            super(1);
            this.f24472d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31987a;
        }

        public final void invoke(Throwable th2) {
            this.f24472d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements fw.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f24473a;

        f(CancellableContinuation cancellableContinuation) {
            this.f24473a = cancellableContinuation;
        }

        @Override // fw.f
        public void a(fw.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f24473a;
            Result.a aVar = Result.f31984e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // fw.f
        public void b(fw.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f24473a.resumeWith(Result.b(response));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f24474d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f24475e;

        /* renamed from: i  reason: collision with root package name */
        int f24476i;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f24475e = obj;
            this.f24476i |= Integer.MIN_VALUE;
            return r.e(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f24477d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f24478e;

        h(Continuation continuation, Throwable th2) {
            this.f24477d = continuation;
            this.f24478e = th2;
        }

        @Override // java.lang.Runnable
        public final void run() {
            Continuation c10 = gs.b.c(this.f24477d);
            Result.a aVar = Result.f31984e;
            c10.resumeWith(Result.b(kotlin.c.a(this.f24478e)));
        }
    }

    public static final Object a(fw.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        eVar.c(new a(dVar));
        dVar.P1(new b(eVar));
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object b(fw.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        eVar.c(new c(dVar));
        dVar.P1(new d(eVar));
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object c(fw.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        eVar.c(new e(dVar));
        dVar.P1(new f(eVar));
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object d(fw.d dVar, Continuation continuation) {
        Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type retrofit2.Call<kotlin.Unit?>");
        return b(dVar, continuation);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object e(java.lang.Throwable r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof fw.r.g
            if (r0 == 0) goto L13
            r0 = r5
            fw.r$g r0 = (fw.r.g) r0
            int r1 = r0.f24476i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f24476i = r1
            goto L18
        L13:
            fw.r$g r0 = new fw.r$g
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f24475e
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f24476i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f24474d
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            kotlin.c.b(r5)
            goto L5c
        L35:
            kotlin.c.b(r5)
            r0.f24474d = r4
            r0.f24476i = r3
            kotlinx.coroutines.CoroutineDispatcher r5 = ys.m0.a()
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            fw.r$h r3 = new fw.r$h
            r3.<init>(r0, r4)
            r5.b1(r2, r3)
            java.lang.Object r4 = gs.b.f()
            java.lang.Object r5 = gs.b.f()
            if (r4 != r5) goto L59
            kotlin.coroutines.jvm.internal.g.c(r0)
        L59:
            if (r4 != r1) goto L5c
            return r1
        L5c:
            as.h r4 = new as.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: fw.r.e(java.lang.Throwable, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
