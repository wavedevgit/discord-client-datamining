package pu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f46626a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f46627b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f46628c;

    public b(List list, Map map, Object obj) {
        this.f46626a = list;
        this.f46627b = map;
        this.f46628c = obj;
    }

    public final Map a() {
        return this.f46627b;
    }

    public final List b() {
        return this.f46626a;
    }

    public final Object c() {
        return this.f46628c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f46626a, bVar.f46626a) && Intrinsics.areEqual(this.f46627b, bVar.f46627b) && Intrinsics.areEqual(this.f46628c, bVar.f46628c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f46626a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f46627b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f46628c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f46626a;
        Map map = this.f46627b;
        Object obj = this.f46628c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
