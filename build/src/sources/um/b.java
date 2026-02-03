package um;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import um.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f50456c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50457d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f50458e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f50456c = worker;
        this.f50457d = renderKey;
        this.f50458e = obj;
    }

    @Override // um.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f50458e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f50456c + ", key=\"" + this.f50457d + "\")";
    }
}
