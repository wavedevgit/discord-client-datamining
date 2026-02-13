package bt;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements Flow, c {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: bt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0108a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f7517d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f7518e;

        /* renamed from: o  reason: collision with root package name */
        int f7520o;

        C0108a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f7518e = obj;
            this.f7520o |= Integer.MIN_VALUE;
            return a.this.collect(null, this);
        }
    }

    public abstract Object a(FlowCollector flowCollector, Continuation continuation);

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    @Override // kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
        /*
            r5 = this;
            boolean r0 = r7 instanceof bt.a.C0108a
            if (r0 == 0) goto L13
            r0 = r7
            bt.a$a r0 = (bt.a.C0108a) r0
            int r1 = r0.f7520o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f7520o = r1
            goto L18
        L13:
            bt.a$a r0 = new bt.a$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f7518e
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f7520o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r6 = r0.f7517d
            ct.v r6 = (ct.v) r6
            kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L2d
            goto L4f
        L2d:
            r7 = move-exception
            goto L59
        L2f:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L37:
            kotlin.c.b(r7)
            ct.v r7 = new ct.v
            kotlin.coroutines.CoroutineContext r2 = r0.getContext()
            r7.<init>(r6, r2)
            r0.f7517d = r7     // Catch: java.lang.Throwable -> L55
            r0.f7520o = r3     // Catch: java.lang.Throwable -> L55
            java.lang.Object r6 = r5.a(r7, r0)     // Catch: java.lang.Throwable -> L55
            if (r6 != r1) goto L4e
            return r1
        L4e:
            r6 = r7
        L4f:
            r6.releaseIntercepted()
            kotlin.Unit r6 = kotlin.Unit.f32556a
            return r6
        L55:
            r6 = move-exception
            r4 = r7
            r7 = r6
            r6 = r4
        L59:
            r6.releaseIntercepted()
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: bt.a.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
