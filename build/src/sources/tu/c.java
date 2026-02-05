package tu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f51064a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f51065b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f51066c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f51064a = operationData;
        this.f51065b = mappingOperation;
        this.f51066c = obj;
    }

    public final Map a() {
        return this.f51065b;
    }

    public final List b() {
        return this.f51064a;
    }

    public final Object c() {
        return this.f51066c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f51064a, cVar.f51064a) && Intrinsics.areEqual(this.f51065b, cVar.f51065b) && Intrinsics.areEqual(this.f51066c, cVar.f51066c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f51064a.hashCode() * 31) + this.f51065b.hashCode()) * 31;
        Object obj = this.f51066c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f51064a;
        Map map = this.f51065b;
        Object obj = this.f51066c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
