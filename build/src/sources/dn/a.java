package dn;

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

    /* renamed from: dn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0269a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f20844d;

        /* renamed from: dn.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0270a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f20845d;

            /* renamed from: dn.a$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0271a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f20846d;

                /* renamed from: e  reason: collision with root package name */
                int f20847e;

                public C0271a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f20846d = obj;
                    this.f20847e |= Integer.MIN_VALUE;
                    return C0270a.this.emit(null, this);
                }
            }

            public C0270a(FlowCollector flowCollector) {
                this.f20845d = flowCollector;
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
                    boolean r0 = r6 instanceof dn.a.C0269a.C0270a.C0271a
                    if (r0 == 0) goto L13
                    r0 = r6
                    dn.a$a$a$a r0 = (dn.a.C0269a.C0270a.C0271a) r0
                    int r1 = r0.f20847e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f20847e = r1
                    goto L18
                L13:
                    dn.a$a$a$a r0 = new dn.a$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f20846d
                    java.lang.Object r1 = wr.b.f()
                    int r2 = r0.f20847e
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
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f20845d
                    bn.g r5 = (bn.g) r5
                    java.lang.Object r5 = r5.a()
                    r0.f20847e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L45
                    return r1
                L45:
                    kotlin.Unit r5 = kotlin.Unit.f32056a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: dn.a.C0269a.C0270a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public C0269a(Flow flow) {
            this.f20844d = flow;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f20844d.collect(new C0270a(flowCollector), continuation);
            if (collect == wr.b.f()) {
                return collect;
            }
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20849d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20850e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.b0 f20851i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(androidx.lifecycle.b0 b0Var, Continuation continuation) {
            super(2, continuation);
            this.f20851i = b0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f20851i, continuation);
            bVar.f20850e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f20849d == 0) {
                kotlin.c.b(obj);
                bn.g gVar = (bn.g) this.f20850e;
                androidx.lifecycle.b0 b0Var = this.f20851i;
                if (b0Var != null) {
                    b0Var.h("com.squareup.workflow1.ui.renderWorkflowIn-snapshot", new p(gVar.b()));
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(bn.g gVar, Continuation continuation) {
            return ((b) create(gVar, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public static final rs.j0 a(bn.q workflow, CoroutineScope scope, rs.j0 props, androidx.lifecycle.b0 b0Var, List interceptors, Function2 onOutput) {
        p pVar;
        bn.q qVar;
        CoroutineScope coroutineScope;
        rs.j0 j0Var;
        List list;
        Function2 function2;
        bn.m a10;
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
        rs.j0 a11 = bn.f.a(qVar, coroutineScope, j0Var, a10, list, function2);
        return rs.g.F(new C0269a(rs.g.C(a11, new b(b0Var, null))), coroutineScope, rs.g0.f49319a.a(), ((bn.g) a11.getValue()).a());
    }
}
