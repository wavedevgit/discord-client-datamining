package ks;

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
    private final Flow f36433d;

    /* renamed from: e  reason: collision with root package name */
    public final Function1 f36434e;

    /* renamed from: i  reason: collision with root package name */
    public final Function2 f36435i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements FlowCollector {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36437e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36438i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0463a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f36439d;

            /* renamed from: i  reason: collision with root package name */
            int f36441i;

            C0463a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f36439d = obj;
                this.f36441i |= Integer.MIN_VALUE;
                return a.this.emit(null, this);
            }
        }

        a(Ref.ObjectRef objectRef, FlowCollector flowCollector) {
            this.f36437e = objectRef;
            this.f36438i = flowCollector;
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
                boolean r0 = r7 instanceof ks.f.a.C0463a
                if (r0 == 0) goto L13
                r0 = r7
                ks.f$a$a r0 = (ks.f.a.C0463a) r0
                int r1 = r0.f36441i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f36441i = r1
                goto L18
            L13:
                ks.f$a$a r0 = new ks.f$a$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f36439d
                java.lang.Object r1 = pr.b.f()
                int r2 = r0.f36441i
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
                ks.f r7 = ks.f.this
                kotlin.jvm.functions.Function1 r7 = r7.f36434e
                java.lang.Object r7 = r7.invoke(r6)
                kotlin.jvm.internal.Ref$ObjectRef r2 = r5.f36437e
                T r2 = r2.element
                ms.e0 r4 = ls.t.f37615a
                if (r2 == r4) goto L58
                ks.f r4 = ks.f.this
                kotlin.jvm.functions.Function2 r4 = r4.f36435i
                java.lang.Object r2 = r4.invoke(r2, r7)
                java.lang.Boolean r2 = (java.lang.Boolean) r2
                boolean r2 = r2.booleanValue()
                if (r2 != 0) goto L55
                goto L58
            L55:
                kotlin.Unit r6 = kotlin.Unit.f33074a
                return r6
            L58:
                kotlin.jvm.internal.Ref$ObjectRef r2 = r5.f36437e
                r2.element = r7
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f36438i
                r0.f36441i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L67
                return r1
            L67:
                kotlin.Unit r6 = kotlin.Unit.f33074a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ks.f.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    public f(Flow flow, Function1 function1, Function2 function2) {
        this.f36433d = flow;
        this.f36434e = function1;
        this.f36435i = function2;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, ms.e0] */
    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = ls.t.f37615a;
        Object collect = this.f36433d.collect(new a(objectRef, flowCollector), continuation);
        if (collect == pr.b.f()) {
            return collect;
        }
        return Unit.f33074a;
    }
}
