package ov;

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
        final /* synthetic */ ov.d f44623d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ov.d dVar) {
            super(1);
            this.f44623d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            this.f44623d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements ov.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f44624a;

        b(CancellableContinuation cancellableContinuation) {
            this.f44624a = cancellableContinuation;
        }

        @Override // ov.f
        public void a(ov.d call, z response) {
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
                    or.i iVar = new or.i("Response from " + b10.getName() + '.' + a11.getName() + " was null but response body type was declared as non-null");
                    CancellableContinuation cancellableContinuation = this.f44624a;
                    Result.a aVar = Result.f31985e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iVar)));
                    return;
                }
                this.f44624a.resumeWith(Result.b(a10));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f44624a;
            Result.a aVar2 = Result.f31985e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }

        @Override // ov.f
        public void b(ov.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f44624a;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ov.d f44625d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(ov.d dVar) {
            super(1);
            this.f44625d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            this.f44625d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements ov.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f44626a;

        d(CancellableContinuation cancellableContinuation) {
            this.f44626a = cancellableContinuation;
        }

        @Override // ov.f
        public void a(ov.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                CancellableContinuation cancellableContinuation = this.f44626a;
                Result.a aVar = Result.f31985e;
                cancellableContinuation.resumeWith(Result.b(response.a()));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f44626a;
            Result.a aVar2 = Result.f31985e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }

        @Override // ov.f
        public void b(ov.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f44626a;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ov.d f44627d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(ov.d dVar) {
            super(1);
            this.f44627d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            this.f44627d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements ov.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f44628a;

        f(CancellableContinuation cancellableContinuation) {
            this.f44628a = cancellableContinuation;
        }

        @Override // ov.f
        public void a(ov.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44628a.resumeWith(Result.b(response));
        }

        @Override // ov.f
        public void b(ov.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f44628a;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f44629d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f44630e;

        /* renamed from: i  reason: collision with root package name */
        int f44631i;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44630e = obj;
            this.f44631i |= Integer.MIN_VALUE;
            return r.e(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f44632d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f44633e;

        h(Continuation continuation, Throwable th2) {
            this.f44632d = continuation;
            this.f44633e = th2;
        }

        @Override // java.lang.Runnable
        public final void run() {
            Continuation c10 = ur.b.c(this.f44632d);
            Result.a aVar = Result.f31985e;
            c10.resumeWith(Result.b(kotlin.c.a(this.f44633e)));
        }
    }

    public static final Object a(ov.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        eVar.c(new a(dVar));
        dVar.C0(new b(eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object b(ov.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        eVar.c(new c(dVar));
        dVar.C0(new d(eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object c(ov.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        eVar.c(new e(dVar));
        dVar.C0(new f(eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object d(ov.d dVar, Continuation continuation) {
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
            boolean r0 = r5 instanceof ov.r.g
            if (r0 == 0) goto L13
            r0 = r5
            ov.r$g r0 = (ov.r.g) r0
            int r1 = r0.f44631i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44631i = r1
            goto L18
        L13:
            ov.r$g r0 = new ov.r$g
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44630e
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f44631i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f44629d
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            kotlin.c.b(r5)
            goto L5c
        L35:
            kotlin.c.b(r5)
            r0.f44629d = r4
            r0.f44631i = r3
            kotlinx.coroutines.CoroutineDispatcher r5 = ms.m0.a()
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            ov.r$h r3 = new ov.r$h
            r3.<init>(r0, r4)
            r5.E1(r2, r3)
            java.lang.Object r4 = ur.b.f()
            java.lang.Object r5 = ur.b.f()
            if (r4 != r5) goto L59
            kotlin.coroutines.jvm.internal.g.c(r0)
        L59:
            if (r4 != r1) goto L5c
            return r1
        L5c:
            or.h r4 = new or.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ov.r.e(java.lang.Throwable, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
