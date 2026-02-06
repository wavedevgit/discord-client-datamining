package rs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class u {

    /* renamed from: a  reason: collision with root package name */
    private static final int f49430a = ts.f0.b("kotlinx.coroutines.flow.defaultConcurrency", 16, 1, Integer.MAX_VALUE);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f49431d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f49432e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f49433i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function2 f49434o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function2 function2, Continuation continuation) {
            super(3, continuation);
            this.f49434o = function2;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0036, code lost:
            if (r6 == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0042, code lost:
            if (r1.emit(r6, r5) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0044, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r5.f49431d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r6)
                goto L45
            L12:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L1a:
                java.lang.Object r1 = r5.f49432e
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                kotlin.c.b(r6)
                goto L39
            L22:
                kotlin.c.b(r6)
                java.lang.Object r6 = r5.f49432e
                r1 = r6
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                java.lang.Object r6 = r5.f49433i
                kotlin.jvm.functions.Function2 r4 = r5.f49434o
                r5.f49432e = r1
                r5.f49431d = r3
                java.lang.Object r6 = r4.invoke(r6, r5)
                if (r6 != r0) goto L39
                goto L44
            L39:
                r3 = 0
                r5.f49432e = r3
                r5.f49431d = r2
                java.lang.Object r6 = r1.emit(r6, r5)
                if (r6 != r0) goto L45
            L44:
                return r0
            L45:
                kotlin.Unit r6 = kotlin.Unit.f32008a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: rs.u.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, Object obj, Continuation continuation) {
            a aVar = new a(this.f49434o, continuation);
            aVar.f49432e = flowCollector;
            aVar.f49433i = obj;
            return aVar.invokeSuspend(Unit.f32008a);
        }
    }

    public static final Flow a(Flow flow, Function2 function2) {
        return g.M(flow, new a(function2, null));
    }

    public static final Flow b(Iterable iterable) {
        return new ss.j(iterable, null, 0, null, 14, null);
    }

    public static final Flow c(Flow... flowArr) {
        return g.A(kotlin.collections.i.H(flowArr));
    }

    public static final Flow d(Flow flow, Function3 function3) {
        return new ss.i(function3, flow, null, 0, null, 28, null);
    }
}
