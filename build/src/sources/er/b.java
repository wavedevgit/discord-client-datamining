package er;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f22080a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f22081b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f22080a = standardOperations;
        this.f22081b = functionalOperations;
    }

    public final Map a() {
        return this.f22081b;
    }

    public final Map b() {
        return this.f22080a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f22080a, bVar.f22080a) && Intrinsics.areEqual(this.f22081b, bVar.f22081b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f22080a.hashCode() * 31) + this.f22081b.hashCode();
    }

    public String toString() {
        Map map = this.f22080a;
        Map map2 = this.f22081b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
