package xm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import wm.q;
import wm.r;
import xm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f53443a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f53444b;

    /* renamed from: c  reason: collision with root package name */
    private final j f53445c;

    /* renamed from: d  reason: collision with root package name */
    private i f53446d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f53443a = workflow;
        this.f53444b = handler;
        this.f53445c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f53444b.invoke(obj);
    }

    public final k d() {
        return this.f53445c.g();
    }

    @Override // xm.e.a
    /* renamed from: e */
    public i a() {
        return this.f53446d;
    }

    public final q f() {
        return this.f53443a;
    }

    public final j g() {
        return this.f53445c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(wm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f53445c.l(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f53444b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // xm.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f53446d = iVar;
    }
}
