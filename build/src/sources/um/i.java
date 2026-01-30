package um;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import tm.q;
import tm.r;
import um.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f50451a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f50452b;

    /* renamed from: c  reason: collision with root package name */
    private final j f50453c;

    /* renamed from: d  reason: collision with root package name */
    private i f50454d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f50451a = workflow;
        this.f50452b = handler;
        this.f50453c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f50452b.invoke(obj);
    }

    public final k d() {
        return this.f50453c.g();
    }

    @Override // um.e.a
    /* renamed from: e */
    public i a() {
        return this.f50454d;
    }

    public final q f() {
        return this.f50451a;
    }

    public final j g() {
        return this.f50453c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(tm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f50453c.l(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f50452b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // um.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f50454d = iVar;
    }
}
