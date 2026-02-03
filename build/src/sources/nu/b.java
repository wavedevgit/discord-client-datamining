package nu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f42334a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42335b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f42336c;

    public b(List list, Map map, Object obj) {
        this.f42334a = list;
        this.f42335b = map;
        this.f42336c = obj;
    }

    public final Map a() {
        return this.f42335b;
    }

    public final List b() {
        return this.f42334a;
    }

    public final Object c() {
        return this.f42336c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f42334a, bVar.f42334a) && Intrinsics.areEqual(this.f42335b, bVar.f42335b) && Intrinsics.areEqual(this.f42336c, bVar.f42336c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f42334a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f42335b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f42336c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f42334a;
        Map map = this.f42335b;
        Object obj = this.f42336c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
