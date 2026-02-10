package wv;

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
        final /* synthetic */ wv.d f54143d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(wv.d dVar) {
            super(1);
            this.f54143d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31765a;
        }

        public final void invoke(Throwable th2) {
            this.f54143d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements wv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f54144a;

        b(CancellableContinuation cancellableContinuation) {
            this.f54144a = cancellableContinuation;
        }

        @Override // wv.f
        public void a(wv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f54144a;
            Result.a aVar = Result.f31762e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // wv.f
        public void b(wv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                Object a10 = response.a();
                if (a10 == null) {
                    Object m10 = call.g().m(q.class);
                    Intrinsics.checkNotNull(m10);
                    q qVar = (q) m10;
                    Class b10 = qVar.b();
                    Method a11 = qVar.a();
                    rr.i iVar = new rr.i("Response from " + b10.getName() + '.' + a11.getName() + " was null but response body type was declared as non-null");
                    CancellableContinuation cancellableContinuation = this.f54144a;
                    Result.a aVar = Result.f31762e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iVar)));
                    return;
                }
                this.f54144a.resumeWith(Result.b(a10));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f54144a;
            Result.a aVar2 = Result.f31762e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ wv.d f54145d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(wv.d dVar) {
            super(1);
            this.f54145d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31765a;
        }

        public final void invoke(Throwable th2) {
            this.f54145d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements wv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f54146a;

        d(CancellableContinuation cancellableContinuation) {
            this.f54146a = cancellableContinuation;
        }

        @Override // wv.f
        public void a(wv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f54146a;
            Result.a aVar = Result.f31762e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // wv.f
        public void b(wv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            if (response.g()) {
                CancellableContinuation cancellableContinuation = this.f54146a;
                Result.a aVar = Result.f31762e;
                cancellableContinuation.resumeWith(Result.b(response.a()));
                return;
            }
            CancellableContinuation cancellableContinuation2 = this.f54146a;
            Result.a aVar2 = Result.f31762e;
            cancellableContinuation2.resumeWith(Result.b(kotlin.c.a(new o(response))));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ wv.d f54147d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(wv.d dVar) {
            super(1);
            this.f54147d = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31765a;
        }

        public final void invoke(Throwable th2) {
            this.f54147d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements wv.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f54148a;

        f(CancellableContinuation cancellableContinuation) {
            this.f54148a = cancellableContinuation;
        }

        @Override // wv.f
        public void a(wv.d call, Throwable t10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(t10, "t");
            CancellableContinuation cancellableContinuation = this.f54148a;
            Result.a aVar = Result.f31762e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(t10)));
        }

        @Override // wv.f
        public void b(wv.d call, z response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            this.f54148a.resumeWith(Result.b(response));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f54149d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f54150e;

        /* renamed from: i  reason: collision with root package name */
        int f54151i;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f54150e = obj;
            this.f54151i |= Integer.MIN_VALUE;
            return r.e(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f54152d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f54153e;

        h(Continuation continuation, Throwable th2) {
            this.f54152d = continuation;
            this.f54153e = th2;
        }

        @Override // java.lang.Runnable
        public final void run() {
            Continuation c10 = xr.b.c(this.f54152d);
            Result.a aVar = Result.f31762e;
            c10.resumeWith(Result.b(kotlin.c.a(this.f54153e)));
        }
    }

    public static final Object a(wv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new a(dVar));
        dVar.C0(new b(eVar));
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object b(wv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new c(dVar));
        dVar.C0(new d(eVar));
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object c(wv.d dVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        eVar.c(new e(dVar));
        dVar.C0(new f(eVar));
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public static final Object d(wv.d dVar, Continuation continuation) {
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
            boolean r0 = r5 instanceof wv.r.g
            if (r0 == 0) goto L13
            r0 = r5
            wv.r$g r0 = (wv.r.g) r0
            int r1 = r0.f54151i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f54151i = r1
            goto L18
        L13:
            wv.r$g r0 = new wv.r$g
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f54150e
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f54151i
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f54149d
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            kotlin.c.b(r5)
            goto L5c
        L35:
            kotlin.c.b(r5)
            r0.f54149d = r4
            r0.f54151i = r3
            kotlinx.coroutines.CoroutineDispatcher r5 = ps.m0.a()
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            wv.r$h r3 = new wv.r$h
            r3.<init>(r0, r4)
            r5.z1(r2, r3)
            java.lang.Object r4 = xr.b.f()
            java.lang.Object r5 = xr.b.f()
            if (r4 != r5) goto L59
            kotlin.coroutines.jvm.internal.g.c(r0)
        L59:
            if (r4 != r1) goto L5c
            return r1
        L5c:
            rr.h r4 = new rr.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: wv.r.e(java.lang.Throwable, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
