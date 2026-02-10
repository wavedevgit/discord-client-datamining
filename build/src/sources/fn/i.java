package fn;

import en.q;
import en.r;
import fn.e;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f23901a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f23902b;

    /* renamed from: c  reason: collision with root package name */
    private final j f23903c;

    /* renamed from: d  reason: collision with root package name */
    private i f23904d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f23901a = workflow;
        this.f23902b = handler;
        this.f23903c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f23902b.invoke(obj);
    }

    public final k d() {
        return this.f23903c.g();
    }

    @Override // fn.e.a
    /* renamed from: e */
    public i a() {
        return this.f23904d;
    }

    public final q f() {
        return this.f23901a;
    }

    public final j g() {
        return this.f23903c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(en.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f23903c.m(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f23902b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // fn.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f23904d = iVar;
    }
}
