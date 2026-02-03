package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f52518c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52519d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f52520e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f52518c = worker;
        this.f52519d = renderKey;
        this.f52520e = obj;
    }

    @Override // wm.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f52520e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f52518c + ", key=\"" + this.f52519d + "\")";
    }
}
