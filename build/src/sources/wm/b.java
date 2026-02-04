package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends r {

    /* renamed from: c  reason: collision with root package name */
    private final o f52515c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52516d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f52517e;

    public b(o worker, String renderKey, Object obj) {
        Intrinsics.checkNotNullParameter(worker, "worker");
        Intrinsics.checkNotNullParameter(renderKey, "renderKey");
        this.f52515c = worker;
        this.f52516d = renderKey;
        this.f52517e = obj;
    }

    @Override // wm.r
    public void a(r.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        cVar.d(this.f52517e);
    }

    public String toString() {
        return ((Object) Reflection.getOrCreateKotlinClass(b.class).getQualifiedName()) + "(worker=" + this.f52515c + ", key=\"" + this.f52516d + "\")";
    }
}
