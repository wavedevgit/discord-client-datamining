package dn;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f20909a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f20910b;

    /* renamed from: c  reason: collision with root package name */
    private final List f20911c;

    public c(Object bottom, List rest) {
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(rest, "rest");
        List L0 = CollectionsKt.L0(CollectionsKt.e(bottom), rest);
        this.f20909a = L0;
        this.f20910b = CollectionsKt.z0(L0);
        this.f20911c = L0.subList(0, L0.size() - 1);
    }

    public final List a() {
        return this.f20911c;
    }

    public final List b() {
        return this.f20909a;
    }

    public final Object c() {
        return this.f20910b;
    }

    public final c d(Function1 transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        List<Object> list = this.f20909a;
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
            list = cVar.f20909a;
        }
        return Intrinsics.areEqual(list, this.f20909a);
    }

    public int hashCode() {
        return this.f20909a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append((Object) c.class.getSimpleName());
        sb2.append('(');
        sb2.append(this.f20909a);
        sb2.append(')');
        return sb2.toString();
    }
}
