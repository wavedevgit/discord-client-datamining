package ev;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f23269a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f23270b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f23271c;

    public b(List list, Map map, Object obj) {
        this.f23269a = list;
        this.f23270b = map;
        this.f23271c = obj;
    }

    public final Map a() {
        return this.f23270b;
    }

    public final List b() {
        return this.f23269a;
    }

    public final Object c() {
        return this.f23271c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f23269a, bVar.f23269a) && Intrinsics.areEqual(this.f23270b, bVar.f23270b) && Intrinsics.areEqual(this.f23271c, bVar.f23271c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f23269a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f23270b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f23271c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f23269a;
        Map map = this.f23270b;
        Object obj = this.f23271c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
