package fv;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f24392a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f24393b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f24394c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f24392a = operationData;
        this.f24393b = mappingOperation;
        this.f24394c = obj;
    }

    public final Map a() {
        return this.f24393b;
    }

    public final List b() {
        return this.f24392a;
    }

    public final Object c() {
        return this.f24394c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f24392a, cVar.f24392a) && Intrinsics.areEqual(this.f24393b, cVar.f24393b) && Intrinsics.areEqual(this.f24394c, cVar.f24394c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f24392a.hashCode() * 31) + this.f24393b.hashCode()) * 31;
        Object obj = this.f24394c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f24392a;
        Map map = this.f24393b;
        Object obj = this.f24394c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
