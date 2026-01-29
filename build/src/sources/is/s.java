package is;

import gs.c0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class s {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d */
        Object f31197d;

        /* renamed from: e */
        Object f31198e;

        /* renamed from: i */
        /* synthetic */ Object f31199i;

        /* renamed from: o */
        int f31200o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f31199i = obj;
            this.f31200o |= Integer.MIN_VALUE;
            return s.a(null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Function1 {

        /* renamed from: d */
        final /* synthetic */ CancellableContinuation f31201d;

        b(CancellableContinuation cancellableContinuation) {
            this.f31201d = cancellableContinuation;
        }

        public final void a(Throwable th2) {
            CancellableContinuation cancellableContinuation = this.f31201d;
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(Unit.f33282a));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Throwable) obj);
            return Unit.f33282a;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:42:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x003c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object a(kotlinx.coroutines.channels.ProducerScope r4, kotlin.jvm.functions.Function0 r5, kotlin.coroutines.Continuation r6) {
        /*
            boolean r0 = r6 instanceof is.s.a
            if (r0 == 0) goto L13
            r0 = r6
            is.s$a r0 = (is.s.a) r0
            int r1 = r0.f31200o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f31200o = r1
            goto L18
        L13:
            is.s$a r0 = new is.s$a
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f31199i
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f31200o
            r3 = 1
            if (r2 == 0) goto L3c
            if (r2 != r3) goto L34
            java.lang.Object r4 = r0.f31198e
            r5 = r4
            kotlin.jvm.functions.Function0 r5 = (kotlin.jvm.functions.Function0) r5
            java.lang.Object r4 = r0.f31197d
            kotlinx.coroutines.channels.ProducerScope r4 = (kotlinx.coroutines.channels.ProducerScope) r4
            kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L32
            goto L75
        L32:
            r4 = move-exception
            goto L7b
        L34:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L3c:
            kotlin.c.b(r6)
            kotlin.coroutines.CoroutineContext r6 = r0.getContext()
            kotlinx.coroutines.Job$b r2 = kotlinx.coroutines.Job.f36291j
            kotlin.coroutines.CoroutineContext$Element r6 = r6.l(r2)
            if (r6 != r4) goto L7f
            r0.f31197d = r4     // Catch: java.lang.Throwable -> L32
            r0.f31198e = r5     // Catch: java.lang.Throwable -> L32
            r0.f31200o = r3     // Catch: java.lang.Throwable -> L32
            kotlinx.coroutines.e r6 = new kotlinx.coroutines.e     // Catch: java.lang.Throwable -> L32
            kotlin.coroutines.Continuation r2 = or.b.c(r0)     // Catch: java.lang.Throwable -> L32
            r6.<init>(r2, r3)     // Catch: java.lang.Throwable -> L32
            r6.H()     // Catch: java.lang.Throwable -> L32
            is.s$b r2 = new is.s$b     // Catch: java.lang.Throwable -> L32
            r2.<init>(r6)     // Catch: java.lang.Throwable -> L32
            r4.b(r2)     // Catch: java.lang.Throwable -> L32
            java.lang.Object r4 = r6.B()     // Catch: java.lang.Throwable -> L32
            java.lang.Object r6 = or.b.f()     // Catch: java.lang.Throwable -> L32
            if (r4 != r6) goto L72
            kotlin.coroutines.jvm.internal.g.c(r0)     // Catch: java.lang.Throwable -> L32
        L72:
            if (r4 != r1) goto L75
            return r1
        L75:
            r5.invoke()
            kotlin.Unit r4 = kotlin.Unit.f33282a
            return r4
        L7b:
            r5.invoke()
            throw r4
        L7f:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "awaitClose() can only be invoked from the producer context"
            r4.<init>(r5)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: is.s.a(kotlinx.coroutines.channels.ProducerScope, kotlin.jvm.functions.Function0, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static final v b(CoroutineScope coroutineScope, CoroutineContext coroutineContext, int i10, is.a aVar, c0 c0Var, Function1 function1, Function2 function2) {
        t tVar = new t(gs.x.k(coroutineScope, coroutineContext), j.b(i10, aVar, null, 4, null));
        if (function1 != null) {
            tVar.C0(function1);
        }
        tVar.V0(c0Var, tVar, function2);
        return tVar;
    }

    public static final v c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, int i10, Function2 function2) {
        return b(coroutineScope, coroutineContext, i10, is.a.f31125d, c0.f27144d, null, function2);
    }

    public static /* synthetic */ v d(CoroutineScope coroutineScope, CoroutineContext coroutineContext, int i10, is.a aVar, c0 c0Var, Function1 function1, Function2 function2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f33356d;
        }
        if ((i11 & 2) != 0) {
            i10 = 0;
        }
        if ((i11 & 4) != 0) {
            aVar = is.a.f31125d;
        }
        if ((i11 & 8) != 0) {
            c0Var = c0.f27144d;
        }
        if ((i11 & 16) != 0) {
            function1 = null;
        }
        Function1 function12 = function1;
        return b(coroutineScope, coroutineContext, i10, aVar, c0Var, function12, function2);
    }

    public static /* synthetic */ v e(CoroutineScope coroutineScope, CoroutineContext coroutineContext, int i10, Function2 function2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f33356d;
        }
        if ((i11 & 2) != 0) {
            i10 = 0;
        }
        return c(coroutineScope, coroutineContext, i10, function2);
    }
}
