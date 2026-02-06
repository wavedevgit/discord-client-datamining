package cn;

import bn.q;
import bn.r;
import cn.e;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f7606a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f7607b;

    /* renamed from: c  reason: collision with root package name */
    private final j f7608c;

    /* renamed from: d  reason: collision with root package name */
    private i f7609d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f7606a = workflow;
        this.f7607b = handler;
        this.f7608c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f7607b.invoke(obj);
    }

    public final k d() {
        return this.f7608c.h();
    }

    @Override // cn.e.a
    /* renamed from: e */
    public i a() {
        return this.f7609d;
    }

    public final q f() {
        return this.f7606a;
    }

    public final j g() {
        return this.f7608c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(bn.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f7608c.m(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f7607b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // cn.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f7609d = iVar;
    }
}
