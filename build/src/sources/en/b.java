package en;

import en.r;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f22956c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22957d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f22958e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f22956c = worker;
        this.f22957d = renderKey;
        this.f22958e = obj;
    }

    @Override // en.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f22958e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f22956c + ", key=\"" + this.f22957d + "\")";
    }
}
