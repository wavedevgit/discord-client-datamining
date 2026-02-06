package vu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final List f52992a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52993b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f52994c;

    public c(List operationData, Map mappingOperation, Object obj) {
        Intrinsics.checkNotNullParameter(operationData, "operationData");
        Intrinsics.checkNotNullParameter(mappingOperation, "mappingOperation");
        this.f52992a = operationData;
        this.f52993b = mappingOperation;
        this.f52994c = obj;
    }

    public final Map a() {
        return this.f52993b;
    }

    public final List b() {
        return this.f52992a;
    }

    public final Object c() {
        return this.f52994c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f52992a, cVar.f52992a) && Intrinsics.areEqual(this.f52993b, cVar.f52993b) && Intrinsics.areEqual(this.f52994c, cVar.f52994c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f52992a.hashCode() * 31) + this.f52993b.hashCode()) * 31;
        Object obj = this.f52994c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        List list = this.f52992a;
        Map map = this.f52993b;
        Object obj = this.f52994c;
        return "OccurrenceCheckInputData(operationData=" + list + ", mappingOperation=" + map + ", operationDefault=" + obj + ")";
    }
}
