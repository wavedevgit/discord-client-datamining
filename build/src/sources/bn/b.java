package bn;

import bn.r;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f6873c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6874d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f6875e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f6873c = worker;
        this.f6874d = renderKey;
        this.f6875e = obj;
    }

    @Override // bn.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f6875e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f6873c + ", key=\"" + this.f6874d + "\")";
    }
}
