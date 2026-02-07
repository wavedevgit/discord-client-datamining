package rs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Flow {

    /* renamed from: d  reason: collision with root package name */
    private final Flow f49306d;

    /* renamed from: e  reason: collision with root package name */
    public final Function1 f49307e;

    /* renamed from: i  reason: collision with root package name */
    public final Function2 f49308i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements FlowCollector {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f49310e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f49311i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rs.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0632a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f49312d;

            /* renamed from: i  reason: collision with root package name */
            int f49314i;

            C0632a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f49312d = obj;
                this.f49314i |= Integer.MIN_VALUE;
                return a.this.emit(null, this);
            }
        }

        a(Ref.ObjectRef objectRef, FlowCollector flowCollector) {
            this.f49310e = objectRef;
            this.f49311i = flowCollector;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
        /* JADX WARN: Type inference failed for: r7v4, types: [T, java.lang.Object] */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof rs.f.a.C0632a
                if (r0 == 0) goto L13
                r0 = r7
                rs.f$a$a r0 = (rs.f.a.C0632a) r0
                int r1 = r0.f49314i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f49314i = r1
                goto L18
            L13:
                rs.f$a$a r0 = new rs.f$a$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f49312d
                java.lang.Object r1 = wr.b.f()
                int r2 = r0.f49314i
                r3 = 1
                if (r2 == 0) goto L31
                if (r2 != r3) goto L29
                kotlin.c.b(r7)
                goto L67
            L29:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L31:
                kotlin.c.b(r7)
                rs.f r7 = rs.f.this
                kotlin.jvm.functions.Function1 r7 = r7.f49307e
                java.lang.Object r7 = r7.invoke(r6)
                kotlin.jvm.internal.Ref$ObjectRef r2 = r5.f49310e
                T r2 = r2.element
                ts.e0 r4 = ss.t.f50147a
                if (r2 == r4) goto L58
                rs.f r4 = rs.f.this
                kotlin.jvm.functions.Function2 r4 = r4.f49308i
                java.lang.Object r2 = r4.invoke(r2, r7)
                java.lang.Boolean r2 = (java.lang.Boolean) r2
                boolean r2 = r2.booleanValue()
                if (r2 != 0) goto L55
                goto L58
            L55:
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            L58:
                kotlin.jvm.internal.Ref$ObjectRef r2 = r5.f49310e
                r2.element = r7
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f49311i
                r0.f49314i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L67
                return r1
            L67:
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: rs.f.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    public f(Flow flow, Function1 function1, Function2 function2) {
        this.f49306d = flow;
        this.f49307e = function1;
        this.f49308i = function2;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, ts.e0] */
    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = ss.t.f50147a;
        Object collect = this.f49306d.collect(new a(objectRef, flowCollector), continuation);
        if (collect == wr.b.f()) {
            return collect;
        }
        return Unit.f32056a;
    }
}
