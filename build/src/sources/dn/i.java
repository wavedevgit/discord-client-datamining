package dn;

import cn.q;
import cn.r;
import dn.e;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final q f20885a;

    /* renamed from: b  reason: collision with root package name */
    private Function1 f20886b;

    /* renamed from: c  reason: collision with root package name */
    private final j f20887c;

    /* renamed from: d  reason: collision with root package name */
    private i f20888d;

    public i(q workflow, Function1 handler, j workflowNode) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(workflowNode, "workflowNode");
        this.f20885a = workflow;
        this.f20886b = handler;
        this.f20887c = workflowNode;
    }

    public final r c(Object obj) {
        return (r) this.f20886b.invoke(obj);
    }

    public final k d() {
        return this.f20887c.h();
    }

    @Override // dn.e.a
    /* renamed from: e */
    public i a() {
        return this.f20888d;
    }

    public final q f() {
        return this.f20885a;
    }

    public final j g() {
        return this.f20887c;
    }

    public final boolean h(q otherWorkflow, String key) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        return d().c(otherWorkflow, key);
    }

    public final Object i(cn.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return this.f20887c.m(workflow, obj);
    }

    public final void j(Function1 newHandler) {
        Intrinsics.checkNotNullParameter(newHandler, "newHandler");
        this.f20886b = (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(newHandler, 1);
    }

    @Override // dn.e.a
    /* renamed from: k */
    public void b(i iVar) {
        this.f20888d = iVar;
    }
}
