package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements c {

    /* renamed from: d  reason: collision with root package name */
    private final Flow f36420d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36421d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0462a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f36422d;

            /* renamed from: i  reason: collision with root package name */
            int f36424i;

            C0462a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f36422d = obj;
                this.f36424i |= Integer.MIN_VALUE;
                return a.this.emit(null, this);
            }
        }

        a(FlowCollector flowCollector) {
            this.f36421d = flowCollector;
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
            /*
                r4 = this;
                boolean r0 = r6 instanceof ks.d.a.C0462a
                if (r0 == 0) goto L13
                r0 = r6
                ks.d$a$a r0 = (ks.d.a.C0462a) r0
                int r1 = r0.f36424i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f36424i = r1
                goto L18
            L13:
                ks.d$a$a r0 = new ks.d$a$a
                r0.<init>(r6)
            L18:
                java.lang.Object r6 = r0.f36422d
                java.lang.Object r1 = pr.b.f()
                int r2 = r0.f36424i
                r3 = 1
                if (r2 == 0) goto L31
                if (r2 != r3) goto L29
                kotlin.c.b(r6)
                goto L46
            L29:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r6)
                throw r5
            L31:
                kotlin.c.b(r6)
                kotlin.coroutines.CoroutineContext r6 = r0.getContext()
                kotlinx.coroutines.z.k(r6)
                kotlinx.coroutines.flow.FlowCollector r6 = r4.f36421d
                r0.f36424i = r3
                java.lang.Object r5 = r6.emit(r5, r0)
                if (r5 != r1) goto L46
                return r1
            L46:
                kotlin.Unit r5 = kotlin.Unit.f33074a
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: ks.d.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    public d(Flow flow) {
        this.f36420d = flow;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        Object collect = this.f36420d.collect(new a(flowCollector), continuation);
        if (collect == pr.b.f()) {
            return collect;
        }
        return Unit.f33074a;
    }
}
