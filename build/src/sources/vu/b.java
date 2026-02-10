package vu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f52996a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52997b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f52998c;

    public b(List list, Map map, Object obj) {
        this.f52996a = list;
        this.f52997b = map;
        this.f52998c = obj;
    }

    public final Map a() {
        return this.f52997b;
    }

    public final List b() {
        return this.f52996a;
    }

    public final Object c() {
        return this.f52998c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f52996a, bVar.f52996a) && Intrinsics.areEqual(this.f52997b, bVar.f52997b) && Intrinsics.areEqual(this.f52998c, bVar.f52998c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        List list = this.f52996a;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i11 = hashCode * 31;
        Map map = this.f52997b;
        if (map == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = map.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj = this.f52998c;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        List list = this.f52996a;
        Map map = this.f52997b;
        Object obj = this.f52998c;
        return "ArrayOperationInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
