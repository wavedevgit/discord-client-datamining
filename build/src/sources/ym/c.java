package ym;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f54827a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54828b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54829c;

    public c(Object bottom, List rest) {
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(rest, "rest");
        List L0 = CollectionsKt.L0(CollectionsKt.e(bottom), rest);
        this.f54827a = L0;
        this.f54828b = CollectionsKt.z0(L0);
        this.f54829c = L0.subList(0, L0.size() - 1);
    }

    public final List a() {
        return this.f54829c;
    }

    public final List b() {
        return this.f54827a;
    }

    public final Object c() {
        return this.f54828b;
    }

    public final c d(Function1 transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        List<Object> list = this.f54827a;
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
            list = cVar.f54827a;
        }
        return Intrinsics.areEqual(list, this.f54827a);
    }

    public int hashCode() {
        return this.f54827a.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append((Object) c.class.getSimpleName());
        sb2.append('(');
        sb2.append(this.f54827a);
        sb2.append(')');
        return sb2.toString();
    }
}
