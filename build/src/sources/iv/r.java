package iv;

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
        final /* synthetic */ iv.d f31380d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(iv.d dVar) {
            super(1);
            this.f31380d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            this.f31380d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements iv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f31381a;

        b(CancellableContinuation cancellableContinuation) {
            this.f31381a = cancellableContinuation;
        }

        @Override // iv.f
        public void a(iv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f31381a;
            Result.a aVar = Result.f33295e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // iv.f
        public void b(iv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                Object a10 = response.a();
                if (a10 == null) {
                    Object m10 = call.h().m(q.class);
                    Intrinsics.checkNotNull(m10);
                    q qVar = (q) m10;
                    Class b10 = qVar.b();
                    Method a11 = qVar.a();
                    ir.i iVar = new ir.i("Response from " + b10.getName() + '.' + a11.getName() + " was null but response body type was declared as non-null");
                    CancellableContinuation cancellableContinuation = this.f31381a;
                    Result.a aVar = Result.f33295e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iVar)));
                    return;
                }
                this.f31381a.resumeWith(Result.b(a10));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f31381a;
            Result.a aVar2 = Result.f33295e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ iv.d f31382d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(iv.d dVar) {
            super(1);
            this.f31382d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            this.f31382d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements iv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f31383a;

        d(CancellableContinuation cancellableContinuation) {
            this.f31383a = cancellableContinuation;
        }

        @Override // iv.f
        public void a(iv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f31383a;
            Result.a aVar = Result.f33295e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // iv.f
        public void b(iv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                CancellableContinuation cancellableContinuation = this.f31383a;
                Result.a aVar = Result.f33295e;
                cancellableContinuation.resumeWith(Result.b(response.a()));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f31383a;
            Result.a aVar2 = Result.f33295e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ iv.d f31384d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(iv.d dVar) {
            super(1);
            this.f31384d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            this.f31384d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements iv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f31385a;

        f(CancellableContinuation cancellableContinuation) {
            this.f31385a = cancellableContinuation;
        }

        @Override // iv.f
        public void a(iv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f31385a;
            Result.a aVar = Result.f33295e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // iv.f
        public void b(iv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f31385a.resumeWith(Result.b(response));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f31386d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f31387e;

        /* renamed from: i  reason: collision with root package name */
        int f31388i;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f31387e = obj;
            this.f31388i |= Integer.MIN_VALUE;
            return r.e(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f31389d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f31390e;

        h(Continuation continuation, Throwable th2) {
            this.f31389d = continuation;
            this.f31390e = th2;
        }

        @Override // java.lang.Runnable
        public final void run() {
            Continuation c10 = or.b.c(this.f31389d);
            Result.a aVar = Result.f33295e;
            c10.resumeWith(Result.b(kotlin.c.a(this.f31390e)));
        }
    }

    public static final Object a(iv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        eVar.c(new a(dVar));
        dVar.M0(new b(eVar));
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object b(iv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        eVar.c(new c(dVar));
        dVar.M0(new d(eVar));
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object c(iv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        eVar.c(new e(dVar));
        dVar.M0(new f(eVar));
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object d(iv.d dVar, Continuation continuation) {
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
            boolean r0 = r5 instanceof iv.r.g
            if (r0 == 0) goto L13
            r0 = r5
            iv.r$g r0 = (iv.r.g) r0
            int r1 = r0.f31388i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f31388i = r1
            goto L18
        L13:
            iv.r$g r0 = new iv.r$g
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f31387e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f31388i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f31386d
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            kotlin.c.b(r5)
            goto L5c
        L35:
            kotlin.c.b(r5)
            r0.f31386d = r4
            r0.f31388i = r3
            kotlinx.coroutines.CoroutineDispatcher r5 = gs.m0.a()
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            iv.r$h r3 = new iv.r$h
            r3.<init>(r0, r4)
            r5.E1(r2, r3)
            java.lang.Object r4 = or.b.f()
            java.lang.Object r5 = or.b.f()
            if (r4 != r5) goto L59
            kotlin.coroutines.jvm.internal.g.c(r0)
        L59:
            if (r4 != r1) goto L5c
            return r1
        L5c:
            ir.h r4 = new ir.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: iv.r.e(java.lang.Throwable, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
