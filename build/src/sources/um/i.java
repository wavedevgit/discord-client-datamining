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
    private final q f50435a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f50436b;

    /* renamed from: c  reason: collision with root package name */
    private final j f50437c;

    /* renamed from: d  reason: collision with root package name */
    private i f50438d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f50435a = workflow;
        this.f50436b = handler;
        this.f50437c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f50436b.invoke(obj);
    }

    public final k d() {
        return this.f50437c.g();
    }

    @Override // um.e.a
    /* renamed from: e */
    public i a() {
        return this.f50438d;
    }

    public final q f() {
        return this.f50435a;
    }

    public final j g() {
        return this.f50437c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(tm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f50437c.l(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f50436b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // um.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f50438d = iVar;
    }
}
