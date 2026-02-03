package qu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f48200a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f48201b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f48202c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f48200a = operationData;
        this.f48201b = mappingOperation;
        this.f48202c = obj;
    }

    public final Map a() {
        return this.f48201b;
    }

    public final List b() {
        return this.f48200a;
    }

    public final Object c() {
        return this.f48202c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f48200a, cVar.f48200a) && Intrinsics.areEqual(this.f48201b, cVar.f48201b) && Intrinsics.areEqual(this.f48202c, cVar.f48202c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f48200a.hashCode() * 31) + this.f48201b.hashCode()) * 31;
        Object obj = this.f48202c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f48200a;
        Map map = this.f48201b;
        Object obj = this.f48202c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
