package su;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f50242a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50243b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f50244c;

    public b(List list, Map map, Object obj) {
        this.f50242a = list;
        this.f50243b = map;
        this.f50244c = obj;
    }

    public final Map a() {
        return this.f50243b;
    }

    public final List b() {
        return this.f50242a;
    }

    public final Object c() {
        return this.f50244c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f50242a, bVar.f50242a) && Intrinsics.areEqual(this.f50243b, bVar.f50243b) && Intrinsics.areEqual(this.f50244c, bVar.f50244c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f50242a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f50243b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f50244c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f50242a;
        Map map = this.f50243b;
        Object obj = this.f50244c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
