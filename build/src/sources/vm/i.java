package vm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import um.q;
import um.r;
import vm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f51407a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f51408b;

    /* renamed from: c  reason: collision with root package name */
    private final j f51409c;

    /* renamed from: d  reason: collision with root package name */
    private i f51410d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f51407a = workflow;
        this.f51408b = handler;
        this.f51409c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f51408b.invoke(obj);
    }

    public final k d() {
        return this.f51409c.g();
    }

    @Override // vm.e.a
    /* renamed from: e */
    public i a() {
        return this.f51410d;
    }

    public final q f() {
        return this.f51407a;
    }

    public final j g() {
        return this.f51409c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(um.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f51409c.l(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f51408b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // vm.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f51410d = iVar;
    }
}
