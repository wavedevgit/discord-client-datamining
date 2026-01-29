package nu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f42203a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42204b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f42205c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f42203a = operationData;
        this.f42204b = mappingOperation;
        this.f42205c = obj;
    }

    public final Map a() {
        return this.f42204b;
    }

    public final List b() {
        return this.f42203a;
    }

    public final Object c() {
        return this.f42205c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f42203a, cVar.f42203a) && Intrinsics.areEqual(this.f42204b, cVar.f42204b) && Intrinsics.areEqual(this.f42205c, cVar.f42205c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f42203a.hashCode() * 31) + this.f42204b.hashCode()) * 31;
        Object obj = this.f42205c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f42203a;
        Map map = this.f42204b;
        Object obj = this.f42205c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
