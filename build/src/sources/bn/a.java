package bn;

import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: bn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0102a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f6521d;

        /* renamed from: bn.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0103a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f6522d;

            /* renamed from: bn.a$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0104a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f6523d;

                /* renamed from: e  reason: collision with root package name */
                int f6524e;

                public C0104a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f6523d = obj;
                    this.f6524e |= Integer.MIN_VALUE;
                    return C0103a.this.emit(null, this);
                }
            }

            public C0103a(FlowCollector flowCollector) {
                this.f6522d = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof bn.a.C0102a.C0103a.C0104a
                    if (r0 == 0) goto L13
                    r0 = r6
                    bn.a$a$a$a r0 = (bn.a.C0102a.C0103a.C0104a) r0
                    int r1 = r0.f6524e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f6524e = r1
                    goto L18
                L13:
                    bn.a$a$a$a r0 = new bn.a$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f6523d
                    java.lang.Object r1 = ur.b.f()
                    int r2 = r0.f6524e
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r6)
                    goto L45
                L29:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L31:
                    kotlin.c.b(r6)
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f6522d
                    zm.g r5 = (zm.g) r5
                    java.lang.Object r5 = r5.a()
                    r0.f6524e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L45
                    return r1
                L45:
                    kotlin.Unit r5 = kotlin.Unit.f31988a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: bn.a.C0102a.C0103a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public C0102a(Flow flow) {
            this.f6521d = flow;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f6521d.collect(new C0103a(flowCollector), continuation);
            if (collect == ur.b.f()) {
                return collect;
            }
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6526d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f6527e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.b0 f6528i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(androidx.lifecycle.b0 b0Var, Continuation continuation) {
            super(2, continuation);
            this.f6528i = b0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f6528i, continuation);
            bVar.f6527e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f6526d == 0) {
                kotlin.c.b(obj);
                zm.g gVar = (zm.g) this.f6527e;
                androidx.lifecycle.b0 b0Var = this.f6528i;
                if (b0Var != null) {
                    b0Var.h("com.squareup.workflow1.ui.renderWorkflowIn-snapshot", new p(gVar.b()));
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(zm.g gVar, Continuation continuation) {
            return ((b) create(gVar, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public static final ps.j0 a(zm.q workflow, CoroutineScope scope, ps.j0 props, androidx.lifecycle.b0 b0Var, List interceptors, Function2 onOutput) {
        p pVar;
        zm.q qVar;
        CoroutineScope coroutineScope;
        ps.j0 j0Var;
        List list;
        Function2 function2;
        zm.m a10;
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(onOutput, "onOutput");
        if (b0Var == null || (pVar = (p) b0Var.b("com.squareup.workflow1.ui.renderWorkflowIn-snapshot")) == null) {
            qVar = workflow;
            coroutineScope = scope;
            j0Var = props;
            list = interceptors;
            function2 = onOutput;
            a10 = null;
        } else {
            qVar = workflow;
            coroutineScope = scope;
            j0Var = props;
            list = interceptors;
            function2 = onOutput;
            a10 = pVar.a();
        }
        ps.j0 a11 = zm.f.a(qVar, coroutineScope, j0Var, a10, list, function2);
        return ps.g.F(new C0102a(ps.g.C(a11, new b(b0Var, null))), coroutineScope, ps.g0.f46370a.a(), ((zm.g) a11.getValue()).a());
    }
}
