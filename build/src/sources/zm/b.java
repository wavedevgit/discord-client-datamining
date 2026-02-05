package zm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f56044c;

    /* renamed from: d  reason: collision with root package name */
    private final String f56045d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f56046e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f56044c = worker;
        this.f56045d = renderKey;
        this.f56046e = obj;
    }

    @Override // zm.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f56046e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f56044c + ", key=\"" + this.f56045d + "\")";
    }
}
