package ss;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f50223d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f50224e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f50225d;

        /* renamed from: i  reason: collision with root package name */
        int f50227i;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50225d = obj;
            this.f50227i |= Integer.MIN_VALUE;
            return o0.this.collect(null, this);
        }
    }

    public o0(a0 a0Var, Function2 function2) {
        this.f50223d = a0Var;
        this.f50224e = function2;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    @Override // ss.a0, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
        /*
            r5 = this;
            boolean r0 = r7 instanceof ss.o0.a
            if (r0 == 0) goto L13
            r0 = r7
            ss.o0$a r0 = (ss.o0.a) r0
            int r1 = r0.f50227i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f50227i = r1
            goto L18
        L13:
            ss.o0$a r0 = new ss.o0$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f50225d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f50227i
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
            ss.a0 r7 = r5.f50223d
            ss.n0 r2 = new ss.n0
            kotlin.jvm.functions.Function2 r4 = r5.f50224e
            r2.<init>(r6, r4)
            r0.f50227i = r3
            java.lang.Object r6 = r7.collect(r2, r0)
            if (r6 != r1) goto L46
            return r1
        L46:
            rr.h r6 = new rr.h
            r6.<init>()
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: ss.o0.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
