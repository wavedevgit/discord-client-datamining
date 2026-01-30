package mu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f39591a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f39592b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f39593c;

    public b(List list, Map map, Object obj) {
        this.f39591a = list;
        this.f39592b = map;
        this.f39593c = obj;
    }

    public final Map a() {
        return this.f39592b;
    }

    public final List b() {
        return this.f39591a;
    }

    public final Object c() {
        return this.f39593c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f39591a, bVar.f39591a) && Intrinsics.areEqual(this.f39592b, bVar.f39592b) && Intrinsics.areEqual(this.f39593c, bVar.f39593c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f39591a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f39592b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f39593c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f39591a;
        Map map = this.f39592b;
        Object obj = this.f39593c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
