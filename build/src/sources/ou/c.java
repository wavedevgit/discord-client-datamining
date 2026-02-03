package ou;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f44864a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f44865b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f44866c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f44864a = operationData;
        this.f44865b = mappingOperation;
        this.f44866c = obj;
    }

    public final Map a() {
        return this.f44865b;
    }

    public final List b() {
        return this.f44864a;
    }

    public final Object c() {
        return this.f44866c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f44864a, cVar.f44864a) && Intrinsics.areEqual(this.f44865b, cVar.f44865b) && Intrinsics.areEqual(this.f44866c, cVar.f44866c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f44864a.hashCode() * 31) + this.f44865b.hashCode()) * 31;
        Object obj = this.f44866c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f44864a;
        Map map = this.f44865b;
        Object obj = this.f44866c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
