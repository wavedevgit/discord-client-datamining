package ps;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f46449d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f46450e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f46451d;

        /* renamed from: i  reason: collision with root package name */
        int f46453i;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46451d = obj;
            this.f46453i |= Integer.MIN_VALUE;
            return o0.this.collect(null, this);
        }
    }

    public o0(a0 a0Var, Function2 function2) {
        this.f46449d = a0Var;
        this.f46450e = function2;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    @Override // ps.a0, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
        /*
            r5 = this;
            boolean r0 = r7 instanceof ps.o0.a
            if (r0 == 0) goto L13
            r0 = r7
            ps.o0$a r0 = (ps.o0.a) r0
            int r1 = r0.f46453i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46453i = r1
            goto L18
        L13:
            ps.o0$a r0 = new ps.o0$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f46451d
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f46453i
            r3 = 1
            if (r2 == 0) goto L31
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L2d:
            kotlin.c.b(r7)
            goto L46
        L31:
            kotlin.c.b(r7)
            ps.a0 r7 = r5.f46449d
            ps.n0 r2 = new ps.n0
            kotlin.jvm.functions.Function2 r4 = r5.f46450e
            r2.<init>(r6, r4)
            r0.f46453i = r3
            java.lang.Object r6 = r7.collect(r2, r0)
            if (r6 != r1) goto L46
            return r1
        L46:
            or.h r6 = new or.h
            r6.<init>()
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: ps.o0.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
