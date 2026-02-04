package qu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f48197a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f48198b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f48199c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f48197a = operationData;
        this.f48198b = mappingOperation;
        this.f48199c = obj;
    }

    public final Map a() {
        return this.f48198b;
    }

    public final List b() {
        return this.f48197a;
    }

    public final Object c() {
        return this.f48199c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f48197a, cVar.f48197a) && Intrinsics.areEqual(this.f48198b, cVar.f48198b) && Intrinsics.areEqual(this.f48199c, cVar.f48199c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f48197a.hashCode() * 31) + this.f48198b.hashCode()) * 31;
        Object obj = this.f48199c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f48197a;
        Map map = this.f48198b;
        Object obj = this.f48199c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
