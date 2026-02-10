package in;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f28012a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f28013b;

    /* renamed from: c  reason: collision with root package name */
    private final List f28014c;

    public c(Object bottom, List rest) {
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(rest, "rest");
        List L0 = CollectionsKt.L0(CollectionsKt.e(bottom), rest);
        this.f28012a = L0;
        this.f28013b = CollectionsKt.z0(L0);
        this.f28014c = L0.subList(0, L0.size() - 1);
    }

    public final List a() {
        return this.f28014c;
    }

    public final List b() {
        return this.f28012a;
    }

    public final Object c() {
        return this.f28013b;
    }

    public final c d(Function1 transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        List<Object> list = this.f28012a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Object obj : list) {
            arrayList.add(transform.invoke(obj));
        }
        return d.a(arrayList);
    }

    public boolean equals(Object obj) {
        c cVar;
        List list = null;
        if (obj instanceof c) {
            cVar = (c) obj;
        } else {
            cVar = null;
        }
        if (cVar != null) {
            list = cVar.f28012a;
        }
        return Intrinsics.areEqual(list, this.f28012a);
    }

    public int hashCode() {
        return this.f28012a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append((Object) c.class.getSimpleName());
        sb2.append('(');
        sb2.append(this.f28012a);
        sb2.append(')');
        return sb2.toString();
    }
}
