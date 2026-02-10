package cn;

import cn.r;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f7714c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7715d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f7716e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f7714c = worker;
        this.f7715d = renderKey;
        this.f7716e = obj;
    }

    @Override // cn.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f7716e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f7714c + ", key=\"" + this.f7715d + "\")";
    }
}
