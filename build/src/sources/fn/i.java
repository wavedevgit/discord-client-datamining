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
    private final q f23902a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f23903b;

    /* renamed from: c  reason: collision with root package name */
    private final j f23904c;

    /* renamed from: d  reason: collision with root package name */
    private i f23905d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f23902a = workflow;
        this.f23903b = handler;
        this.f23904c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f23903b.invoke(obj);
    }

    public final k d() {
        return this.f23904c.g();
    }

    @Override // fn.e.a
    /* renamed from: e */
    public i a() {
        return this.f23905d;
    }

    public final q f() {
        return this.f23902a;
    }

    public final j g() {
        return this.f23904c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(en.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f23904c.m(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f23903b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // fn.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f23905d = iVar;
    }
}
