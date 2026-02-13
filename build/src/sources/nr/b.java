package nr;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f38925a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f38926b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f38925a = standardOperations;
        this.f38926b = functionalOperations;
    }

    public final Map a() {
        return this.f38926b;
    }

    public final Map b() {
        return this.f38925a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f38925a, bVar.f38925a) && Intrinsics.areEqual(this.f38926b, bVar.f38926b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f38925a.hashCode() * 31) + this.f38926b.hashCode();
    }

    public String toString() {
        Map map = this.f38925a;
        Map map2 = this.f38926b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
