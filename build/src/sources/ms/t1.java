package ms;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class t1 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        long f38948d;

        /* renamed from: e  reason: collision with root package name */
        Object f38949e;

        /* renamed from: i  reason: collision with root package name */
        Object f38950i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f38951o;

        /* renamed from: p  reason: collision with root package name */
        int f38952p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f38951o = obj;
            this.f38952p |= Integer.MIN_VALUE;
            return t1.d(0L, null, this);
        }
    }

    public static final r1 a(long j10, kotlinx.coroutines.k kVar, Job job) {
        return new r1("Timed out waiting for " + j10 + " ms", job);
    }

    private static final Object b(s1 s1Var, Function2 function2) {
        kotlinx.coroutines.z.j(s1Var, i0.c(s1Var.f48949o.getContext()).D0(s1Var.f38947p, s1Var, s1Var.getContext()));
        return ss.b.e(s1Var, s1Var, function2);
    }

    public static final Object c(long j10, Function2 function2, Continuation continuation) {
        if (j10 > 0) {
            Object b10 = b(new s1(j10, continuation), function2);
            if (b10 == ur.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            return b10;
        }
        throw new r1("Timed out immediately");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0075 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:34:0x0076  */
    /* JADX WARN: Type inference failed for: r2v1, types: [ms.s1, T] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object d(long r7, kotlin.jvm.functions.Function2 r9, kotlin.coroutines.Continuation r10) {
        /*
            boolean r0 = r10 instanceof ms.t1.a
            if (r0 == 0) goto L13
            r0 = r10
            ms.t1$a r0 = (ms.t1.a) r0
            int r1 = r0.f38952p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f38952p = r1
            goto L18
        L13:
            ms.t1$a r0 = new ms.t1$a
            r0.<init>(r10)
        L18:
            java.lang.Object r10 = r0.f38951o
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f38952p
            r3 = 0
            r4 = 1
            if (r2 == 0) goto L3c
            if (r2 != r4) goto L34
            java.lang.Object r7 = r0.f38950i
            kotlin.jvm.internal.Ref$ObjectRef r7 = (kotlin.jvm.internal.Ref.ObjectRef) r7
            java.lang.Object r8 = r0.f38949e
            kotlin.jvm.functions.Function2 r8 = (kotlin.jvm.functions.Function2) r8
            kotlin.c.b(r10)     // Catch: ms.r1 -> L32
            return r10
        L32:
            r8 = move-exception
            goto L6f
        L34:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r8)
            throw r7
        L3c:
            kotlin.c.b(r10)
            r5 = 0
            int r10 = (r7 > r5 ? 1 : (r7 == r5 ? 0 : -1))
            if (r10 > 0) goto L46
            return r3
        L46:
            kotlin.jvm.internal.Ref$ObjectRef r10 = new kotlin.jvm.internal.Ref$ObjectRef
            r10.<init>()
            r0.f38949e = r9     // Catch: ms.r1 -> L68
            r0.f38950i = r10     // Catch: ms.r1 -> L68
            r0.f38948d = r7     // Catch: ms.r1 -> L68
            r0.f38952p = r4     // Catch: ms.r1 -> L68
            ms.s1 r2 = new ms.s1     // Catch: ms.r1 -> L68
            r2.<init>(r7, r0)     // Catch: ms.r1 -> L68
            r10.element = r2     // Catch: ms.r1 -> L68
            java.lang.Object r7 = b(r2, r9)     // Catch: ms.r1 -> L68
            java.lang.Object r8 = ur.b.f()     // Catch: ms.r1 -> L68
            if (r7 != r8) goto L6b
            kotlin.coroutines.jvm.internal.g.c(r0)     // Catch: ms.r1 -> L68
            goto L6b
        L68:
            r8 = move-exception
            r7 = r10
            goto L6f
        L6b:
            if (r7 != r1) goto L6e
            return r1
        L6e:
            return r7
        L6f:
            kotlinx.coroutines.Job r9 = r8.f38946d
            T r7 = r7.element
            if (r9 != r7) goto L76
            return r3
        L76:
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.t1.d(long, kotlin.jvm.functions.Function2, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
