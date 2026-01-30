package nu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f42219a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42220b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f42221c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f42219a = operationData;
        this.f42220b = mappingOperation;
        this.f42221c = obj;
    }

    public final Map a() {
        return this.f42220b;
    }

    public final List b() {
        return this.f42219a;
    }

    public final Object c() {
        return this.f42221c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f42219a, cVar.f42219a) && Intrinsics.areEqual(this.f42220b, cVar.f42220b) && Intrinsics.areEqual(this.f42221c, cVar.f42221c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f42219a.hashCode() * 31) + this.f42220b.hashCode()) * 31;
        Object obj = this.f42221c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f42219a;
        Map map = this.f42220b;
        Object obj = this.f42221c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
