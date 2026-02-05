package an;

import an.e;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import zm.q;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f810a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f811b;

    /* renamed from: c  reason: collision with root package name */
    private final j f812c;

    /* renamed from: d  reason: collision with root package name */
    private i f813d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f810a = workflow;
        this.f811b = handler;
        this.f812c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f811b.invoke(obj);
    }

    public final k d() {
        return this.f812c.g();
    }

    @Override // an.e.a
    /* renamed from: e */
    public i a() {
        return this.f813d;
    }

    public final q f() {
        return this.f810a;
    }

    public final j g() {
        return this.f812c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(zm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f812c.l(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f811b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // an.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f813d = iVar;
    }
}
