package uu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f52136a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52137b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f52138c;

    public b(List list, Map map, Object obj) {
        this.f52136a = list;
        this.f52137b = map;
        this.f52138c = obj;
    }

    public final Map a() {
        return this.f52137b;
    }

    public final List b() {
        return this.f52136a;
    }

    public final Object c() {
        return this.f52138c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f52136a, bVar.f52136a) && Intrinsics.areEqual(this.f52137b, bVar.f52137b) && Intrinsics.areEqual(this.f52138c, bVar.f52138c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f52136a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f52137b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f52138c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f52136a;
        Map map = this.f52137b;
        Object obj = this.f52138c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
