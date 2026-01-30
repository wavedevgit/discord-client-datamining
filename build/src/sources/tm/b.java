package tm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f49698c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49699d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f49700e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f49698c = worker;
        this.f49699d = renderKey;
        this.f49700e = obj;
    }

    @Override // tm.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f49700e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f49698c + ", key=\"" + this.f49699d + "\")";
    }
}
