package vm;

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

    /* renamed from: vm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0680a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f51214d;

        /* renamed from: vm.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0681a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f51215d;

            /* renamed from: vm.a$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0682a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f51216d;

                /* renamed from: e  reason: collision with root package name */
                int f51217e;

                public C0682a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f51216d = obj;
                    this.f51217e |= Integer.MIN_VALUE;
                    return C0681a.this.emit(null, this);
                }
            }

            public C0681a(FlowCollector flowCollector) {
                this.f51215d = flowCollector;
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
                    boolean r0 = r6 instanceof vm.a.C0680a.C0681a.C0682a
                    if (r0 == 0) goto L13
                    r0 = r6
                    vm.a$a$a$a r0 = (vm.a.C0680a.C0681a.C0682a) r0
                    int r1 = r0.f51217e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f51217e = r1
                    goto L18
                L13:
                    vm.a$a$a$a r0 = new vm.a$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f51216d
                    java.lang.Object r1 = or.b.f()
                    int r2 = r0.f51217e
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
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f51215d
                    tm.g r5 = (tm.g) r5
                    java.lang.Object r5 = r5.a()
                    r0.f51217e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L45
                    return r1
                L45:
                    kotlin.Unit r5 = kotlin.Unit.f33298a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: vm.a.C0680a.C0681a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public C0680a(Flow flow) {
            this.f51214d = flow;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f51214d.collect(new C0681a(flowCollector), continuation);
            if (collect == or.b.f()) {
                return collect;
            }
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51219d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f51220e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.b0 f51221i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(androidx.lifecycle.b0 b0Var, Continuation continuation) {
            super(2, continuation);
            this.f51221i = b0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f51221i, continuation);
            bVar.f51220e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f51219d == 0) {
                kotlin.c.b(obj);
                tm.g gVar = (tm.g) this.f51220e;
                androidx.lifecycle.b0 b0Var = this.f51221i;
                if (b0Var != null) {
                    b0Var.h("com.squareup.workflow1.ui.renderWorkflowIn-snapshot", new p(gVar.b()));
                }
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(tm.g gVar, Continuation continuation) {
            return ((b) create(gVar, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public static final js.j0 a(tm.q workflow, CoroutineScope scope, js.j0 props, androidx.lifecycle.b0 b0Var, List interceptors, Function2 onOutput) {
        p pVar;
        tm.q qVar;
        CoroutineScope coroutineScope;
        js.j0 j0Var;
        List list;
        Function2 function2;
        tm.m a10;
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
        js.j0 a11 = tm.f.a(qVar, coroutineScope, j0Var, a10, list, function2);
        return js.g.F(new C0680a(js.g.C(a11, new b(b0Var, null))), coroutineScope, js.g0.f32527a.a(), ((tm.g) a11.getValue()).a());
    }
}
