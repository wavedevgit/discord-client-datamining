package ms;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 implements a0 {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f39252d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f39253e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f39254d;

        /* renamed from: i  reason: collision with root package name */
        int f39256i;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39254d = obj;
            this.f39256i |= Integer.MIN_VALUE;
            return o0.this.collect(null, this);
        }
    }

    public o0(a0 a0Var, Function2 function2) {
        this.f39252d = a0Var;
        this.f39253e = function2;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
        /*
            r5 = this;
            boolean r0 = r7 instanceof ms.o0.a
            if (r0 == 0) goto L13
            r0 = r7
            ms.o0$a r0 = (ms.o0.a) r0
            int r1 = r0.f39256i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f39256i = r1
            goto L18
        L13:
            ms.o0$a r0 = new ms.o0$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f39254d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f39256i
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
            ms.a0 r7 = r5.f39252d
            ms.n0 r2 = new ms.n0
            kotlin.jvm.functions.Function2 r4 = r5.f39253e
            r2.<init>(r6, r4)
            r0.f39256i = r3
            java.lang.Object r6 = r7.collect(r2, r0)
            if (r6 != r1) goto L46
            return r1
        L46:
            lr.h r6 = new lr.h
            r6.<init>()
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.o0.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
