package ps;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final FlowCollector f46442d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f46443e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46444d;

        /* renamed from: e  reason: collision with root package name */
        Object f46445e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f46446i;

        /* renamed from: p  reason: collision with root package name */
        int f46448p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46446i = obj;
            this.f46448p |= Integer.MIN_VALUE;
            return n0.this.a(this);
        }
    }

    public n0(FlowCollector flowCollector, Function2 function2) {
        this.f46442d = flowCollector;
        this.f46443e = function2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x0076, code lost:
        if (((ps.n0) r7).a(r0) == r1) goto L23;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0042  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0069  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x007c  */
    /* JADX WARN: Type inference failed for: r2v0, types: [int] */
    /* JADX WARN: Type inference failed for: r2v1, types: [qs.v] */
    /* JADX WARN: Type inference failed for: r2v4, types: [boolean] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object a(kotlin.coroutines.Continuation r7) {
        /*
            r6 = this;
            boolean r0 = r7 instanceof ps.n0.a
            if (r0 == 0) goto L13
            r0 = r7
            ps.n0$a r0 = (ps.n0.a) r0
            int r1 = r0.f46448p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46448p = r1
            goto L18
        L13:
            ps.n0$a r0 = new ps.n0$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f46446i
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f46448p
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L42
            if (r2 == r4) goto L34
            if (r2 != r3) goto L2c
            kotlin.c.b(r7)
            goto L79
        L2c:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r0)
            throw r7
        L34:
            java.lang.Object r2 = r0.f46445e
            qs.v r2 = (qs.v) r2
            java.lang.Object r4 = r0.f46444d
            ps.n0 r4 = (ps.n0) r4
            kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L40
            goto L60
        L40:
            r7 = move-exception
            goto L7f
        L42:
            kotlin.c.b(r7)
            qs.v r2 = new qs.v
            kotlinx.coroutines.flow.FlowCollector r7 = r6.f46442d
            kotlin.coroutines.CoroutineContext r5 = r0.getContext()
            r2.<init>(r7, r5)
            kotlin.jvm.functions.Function2 r7 = r6.f46443e     // Catch: java.lang.Throwable -> L40
            r0.f46444d = r6     // Catch: java.lang.Throwable -> L40
            r0.f46445e = r2     // Catch: java.lang.Throwable -> L40
            r0.f46448p = r4     // Catch: java.lang.Throwable -> L40
            java.lang.Object r7 = r7.invoke(r2, r0)     // Catch: java.lang.Throwable -> L40
            if (r7 != r1) goto L5f
            goto L78
        L5f:
            r4 = r6
        L60:
            r2.releaseIntercepted()
            kotlinx.coroutines.flow.FlowCollector r7 = r4.f46442d
            boolean r2 = r7 instanceof ps.n0
            if (r2 == 0) goto L7c
            ps.n0 r7 = (ps.n0) r7
            r2 = 0
            r0.f46444d = r2
            r0.f46445e = r2
            r0.f46448p = r3
            java.lang.Object r7 = r7.a(r0)
            if (r7 != r1) goto L79
        L78:
            return r1
        L79:
            kotlin.Unit r7 = kotlin.Unit.f31988a
            return r7
        L7c:
            kotlin.Unit r7 = kotlin.Unit.f31988a
            return r7
        L7f:
            r2.releaseIntercepted()
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: ps.n0.a(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        return this.f46442d.emit(obj, continuation);
    }
}
