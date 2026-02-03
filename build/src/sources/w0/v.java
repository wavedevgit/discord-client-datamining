package w0;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class v implements u, q {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ q f51821d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f51822e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f51823d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f51824e;

        /* renamed from: o  reason: collision with root package name */
        int f51826o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51824e = obj;
            this.f51826o |= Integer.MIN_VALUE;
            return v.this.f2(null, this);
        }
    }

    public v(q qVar, CoroutineContext coroutineContext) {
        this.f51821d = qVar;
        this.f51822e = coroutineContext;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    @Override // w0.u
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object f2(kotlin.jvm.functions.Function0 r5, kotlin.coroutines.Continuation r6) {
        /*
            r4 = this;
            boolean r0 = r6 instanceof w0.v.a
            if (r0 == 0) goto L13
            r0 = r6
            w0.v$a r0 = (w0.v.a) r0
            int r1 = r0.f51826o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51826o = r1
            goto L18
        L13:
            w0.v$a r0 = new w0.v$a
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f51824e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f51826o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L2d:
            java.lang.Object r5 = r0.f51823d
            kotlin.jvm.functions.Function0 r5 = (kotlin.jvm.functions.Function0) r5
            kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L35
            goto L5a
        L35:
            r6 = move-exception
            goto L60
        L37:
            kotlin.c.b(r6)
            r0.f51823d = r5     // Catch: java.lang.Throwable -> L35
            r0.f51826o = r3     // Catch: java.lang.Throwable -> L35
            kotlinx.coroutines.e r6 = new kotlinx.coroutines.e     // Catch: java.lang.Throwable -> L35
            kotlin.coroutines.Continuation r2 = rr.b.c(r0)     // Catch: java.lang.Throwable -> L35
            r6.<init>(r2, r3)     // Catch: java.lang.Throwable -> L35
            r6.H()     // Catch: java.lang.Throwable -> L35
            java.lang.Object r6 = r6.B()     // Catch: java.lang.Throwable -> L35
            java.lang.Object r2 = rr.b.f()     // Catch: java.lang.Throwable -> L35
            if (r6 != r2) goto L57
            kotlin.coroutines.jvm.internal.g.c(r0)     // Catch: java.lang.Throwable -> L35
        L57:
            if (r6 != r1) goto L5a
            return r1
        L5a:
            lr.h r6 = new lr.h     // Catch: java.lang.Throwable -> L35
            r6.<init>()     // Catch: java.lang.Throwable -> L35
            throw r6     // Catch: java.lang.Throwable -> L35
        L60:
            r5.invoke()
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: w0.v.f2(kotlin.jvm.functions.Function0, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f51822e;
    }

    @Override // w0.q, w0.g0
    public Object getValue() {
        return this.f51821d.getValue();
    }

    @Override // w0.q
    public void setValue(Object obj) {
        this.f51821d.setValue(obj);
    }
}
