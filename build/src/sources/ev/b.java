package ev;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f23268a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f23269b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f23270c;

    public b(List list, Map map, Object obj) {
        this.f23268a = list;
        this.f23269b = map;
        this.f23270c = obj;
    }

    public final Map a() {
        return this.f23269b;
    }

    public final List b() {
        return this.f23268a;
    }

    public final Object c() {
        return this.f23270c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f23268a, bVar.f23268a) && Intrinsics.areEqual(this.f23269b, bVar.f23269b) && Intrinsics.areEqual(this.f23270c, bVar.f23270c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f23268a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f23269b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f23270c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f23268a;
        Map map = this.f23269b;
        Object obj = this.f23270c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
