package jv;

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
        final /* synthetic */ jv.d f32477d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(jv.d dVar) {
            super(1);
            this.f32477d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33074a;
        }

        public final void invoke(Throwable th2) {
            this.f32477d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements jv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f32478a;

        b(CancellableContinuation cancellableContinuation) {
            this.f32478a = cancellableContinuation;
        }

        @Override // jv.f
        public void a(jv.d call, z response) {
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
                    jr.i iVar = new jr.i("Response from " + b10.getName() + '.' + a11.getName() + " was null but response body type was declared as non-null");
                    CancellableContinuation cancellableContinuation = this.f32478a;
                    Result.a aVar = Result.f33071e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iVar)));
                    return;
                }
                this.f32478a.resumeWith(Result.b(a10));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f32478a;
            Result.a aVar2 = Result.f33071e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }

        @Override // jv.f
        public void b(jv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f32478a;
            Result.a aVar = Result.f33071e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ jv.d f32479d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(jv.d dVar) {
            super(1);
            this.f32479d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33074a;
        }

        public final void invoke(Throwable th2) {
            this.f32479d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements jv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f32480a;

        d(CancellableContinuation cancellableContinuation) {
            this.f32480a = cancellableContinuation;
        }

        @Override // jv.f
        public void a(jv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                CancellableContinuation cancellableContinuation = this.f32480a;
                Result.a aVar = Result.f33071e;
                cancellableContinuation.resumeWith(Result.b(response.a()));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f32480a;
            Result.a aVar2 = Result.f33071e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }

        @Override // jv.f
        public void b(jv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f32480a;
            Result.a aVar = Result.f33071e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ jv.d f32481d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(jv.d dVar) {
            super(1);
            this.f32481d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33074a;
        }

        public final void invoke(Throwable th2) {
            this.f32481d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements jv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f32482a;

        f(CancellableContinuation cancellableContinuation) {
            this.f32482a = cancellableContinuation;
        }

        @Override // jv.f
        public void a(jv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f32482a.resumeWith(Result.b(response));
        }

        @Override // jv.f
        public void b(jv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f32482a;
            Result.a aVar = Result.f33071e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f32483d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f32484e;

        /* renamed from: i  reason: collision with root package name */
        int f32485i;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f32484e = obj;
            this.f32485i |= Integer.MIN_VALUE;
            return r.e(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f32486d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f32487e;

        h(Continuation continuation, Throwable th2) {
            this.f32486d = continuation;
            this.f32487e = th2;
        }

        @Override // java.lang.Runnable
        public final void run() {
            Continuation c10 = pr.b.c(this.f32486d);
            Result.a aVar = Result.f33071e;
            c10.resumeWith(Result.b(kotlin.c.a(this.f32487e)));
        }
    }

    public static final Object a(jv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new a(dVar));
        dVar.E0(new b(eVar));
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object b(jv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new c(dVar));
        dVar.E0(new d(eVar));
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object c(jv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new e(dVar));
        dVar.E0(new f(eVar));
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object d(jv.d dVar, Continuation continuation) {
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
            boolean r0 = r5 instanceof jv.r.g
            if (r0 == 0) goto L13
            r0 = r5
            jv.r$g r0 = (jv.r.g) r0
            int r1 = r0.f32485i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f32485i = r1
            goto L18
        L13:
            jv.r$g r0 = new jv.r$g
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f32484e
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f32485i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f32483d
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            kotlin.c.b(r5)
            goto L5c
        L35:
            kotlin.c.b(r5)
            r0.f32483d = r4
            r0.f32485i = r3
            kotlinx.coroutines.CoroutineDispatcher r5 = hs.m0.a()
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            jv.r$h r3 = new jv.r$h
            r3.<init>(r0, r4)
            r5.E1(r2, r3)
            java.lang.Object r4 = pr.b.f()
            java.lang.Object r5 = pr.b.f()
            if (r4 != r5) goto L59
            kotlin.coroutines.jvm.internal.g.c(r0)
        L59:
            if (r4 != r1) goto L5c
            return r1
        L5c:
            jr.h r4 = new jr.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: jv.r.e(java.lang.Throwable, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
