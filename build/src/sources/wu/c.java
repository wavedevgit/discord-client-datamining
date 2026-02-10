package wu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f54067a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f54068b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f54069c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f54067a = operationData;
        this.f54068b = mappingOperation;
        this.f54069c = obj;
    }

    public final Map a() {
        return this.f54068b;
    }

    public final List b() {
        return this.f54067a;
    }

    public final Object c() {
        return this.f54069c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f54067a, cVar.f54067a) && Intrinsics.areEqual(this.f54068b, cVar.f54068b) && Intrinsics.areEqual(this.f54069c, cVar.f54069c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f54067a.hashCode() * 31) + this.f54068b.hashCode()) * 31;
        Object obj = this.f54069c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f54067a;
        Map map = this.f54068b;
        Object obj = this.f54069c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
