package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class i {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f36451d;

        /* renamed from: e  reason: collision with root package name */
        Object f36452e;

        /* renamed from: i  reason: collision with root package name */
        Object f36453i;

        /* renamed from: o  reason: collision with root package name */
        boolean f36454o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f36455p;

        /* renamed from: q  reason: collision with root package name */
        int f36456q;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f36455p = obj;
            this.f36456q |= Integer.MIN_VALUE;
            return i.c(null, null, false, this);
        }
    }

    public static final Object b(FlowCollector flowCollector, js.v vVar, Continuation continuation) {
        Object c10 = c(flowCollector, vVar, true, continuation);
        if (c10 == pr.b.f()) {
            return c10;
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0091, code lost:
        if (r2.emit(r9, r0) == r1) goto L17;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0058  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0072  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0073  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x007f A[Catch: all -> 0x003c, TRY_LEAVE, TryCatch #0 {all -> 0x003c, blocks: (B:13:0x0036, B:24:0x0062, B:28:0x0077, B:30:0x007f, B:20:0x0054, B:23:0x005e), top: B:42:0x0022 }] */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0094  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:31:0x0091 -> B:14:0x0039). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object c(kotlinx.coroutines.flow.FlowCollector r6, js.v r7, boolean r8, kotlin.coroutines.Continuation r9) {
        /*
            boolean r0 = r9 instanceof ks.i.a
            if (r0 == 0) goto L13
            r0 = r9
            ks.i$a r0 = (ks.i.a) r0
            int r1 = r0.f36456q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f36456q = r1
            goto L18
        L13:
            ks.i$a r0 = new ks.i$a
            r0.<init>(r9)
        L18:
            java.lang.Object r9 = r0.f36455p
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f36456q
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L58
            if (r2 == r4) goto L46
            if (r2 != r3) goto L3e
            boolean r8 = r0.f36454o
            java.lang.Object r6 = r0.f36453i
            js.i r6 = (js.i) r6
            java.lang.Object r7 = r0.f36452e
            js.v r7 = (js.v) r7
            java.lang.Object r2 = r0.f36451d
            kotlinx.coroutines.flow.FlowCollector r2 = (kotlinx.coroutines.flow.FlowCollector) r2
            kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L3c
        L39:
            r9 = r6
            r6 = r2
            goto L62
        L3c:
            r6 = move-exception
            goto L9d
        L3e:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L46:
            boolean r8 = r0.f36454o
            java.lang.Object r6 = r0.f36453i
            js.i r6 = (js.i) r6
            java.lang.Object r7 = r0.f36452e
            js.v r7 = (js.v) r7
            java.lang.Object r2 = r0.f36451d
            kotlinx.coroutines.flow.FlowCollector r2 = (kotlinx.coroutines.flow.FlowCollector) r2
            kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L3c
            goto L77
        L58:
            kotlin.c.b(r9)
            ks.g.q(r6)
            js.i r9 = r7.iterator()     // Catch: java.lang.Throwable -> L3c
        L62:
            r0.f36451d = r6     // Catch: java.lang.Throwable -> L3c
            r0.f36452e = r7     // Catch: java.lang.Throwable -> L3c
            r0.f36453i = r9     // Catch: java.lang.Throwable -> L3c
            r0.f36454o = r8     // Catch: java.lang.Throwable -> L3c
            r0.f36456q = r4     // Catch: java.lang.Throwable -> L3c
            java.lang.Object r2 = r9.a(r0)     // Catch: java.lang.Throwable -> L3c
            if (r2 != r1) goto L73
            goto L93
        L73:
            r5 = r2
            r2 = r6
            r6 = r9
            r9 = r5
        L77:
            java.lang.Boolean r9 = (java.lang.Boolean) r9     // Catch: java.lang.Throwable -> L3c
            boolean r9 = r9.booleanValue()     // Catch: java.lang.Throwable -> L3c
            if (r9 == 0) goto L94
            java.lang.Object r9 = r6.next()     // Catch: java.lang.Throwable -> L3c
            r0.f36451d = r2     // Catch: java.lang.Throwable -> L3c
            r0.f36452e = r7     // Catch: java.lang.Throwable -> L3c
            r0.f36453i = r6     // Catch: java.lang.Throwable -> L3c
            r0.f36454o = r8     // Catch: java.lang.Throwable -> L3c
            r0.f36456q = r3     // Catch: java.lang.Throwable -> L3c
            java.lang.Object r9 = r2.emit(r9, r0)     // Catch: java.lang.Throwable -> L3c
            if (r9 != r1) goto L39
        L93:
            return r1
        L94:
            if (r8 == 0) goto L9a
            r6 = 0
            js.n.a(r7, r6)
        L9a:
            kotlin.Unit r6 = kotlin.Unit.f33074a
            return r6
        L9d:
            throw r6     // Catch: java.lang.Throwable -> L9e
        L9e:
            r9 = move-exception
            if (r8 == 0) goto La4
            js.n.a(r7, r6)
        La4:
            throw r9
        */
        throw new UnsupportedOperationException("Method not decompiled: ks.i.c(kotlinx.coroutines.flow.FlowCollector, js.v, boolean, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static final js.v d(Flow flow, CoroutineScope coroutineScope) {
        return ls.f.b(flow).m(coroutineScope);
    }
}
