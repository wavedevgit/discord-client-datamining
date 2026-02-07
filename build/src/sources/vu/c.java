package vu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f53040a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f53041b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f53042c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f53040a = operationData;
        this.f53041b = mappingOperation;
        this.f53042c = obj;
    }

    public final Map a() {
        return this.f53041b;
    }

    public final List b() {
        return this.f53040a;
    }

    public final Object c() {
        return this.f53042c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f53040a, cVar.f53040a) && Intrinsics.areEqual(this.f53041b, cVar.f53041b) && Intrinsics.areEqual(this.f53042c, cVar.f53042c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f53040a.hashCode() * 31) + this.f53041b.hashCode()) * 31;
        Object obj = this.f53042c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f53040a;
        Map map = this.f53041b;
        Object obj = this.f53042c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
