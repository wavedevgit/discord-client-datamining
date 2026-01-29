package mu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f39575a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f39576b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f39577c;

    public b(List list, Map map, Object obj) {
        this.f39575a = list;
        this.f39576b = map;
        this.f39577c = obj;
    }

    public final Map a() {
        return this.f39576b;
    }

    public final List b() {
        return this.f39575a;
    }

    public final Object c() {
        return this.f39577c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f39575a, bVar.f39575a) && Intrinsics.areEqual(this.f39576b, bVar.f39576b) && Intrinsics.areEqual(this.f39577c, bVar.f39577c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f39575a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f39576b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f39577c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f39575a;
        Map map = this.f39576b;
        Object obj = this.f39577c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
