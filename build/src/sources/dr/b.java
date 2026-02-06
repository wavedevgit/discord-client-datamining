package dr;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f21132a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f21133b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f21132a = standardOperations;
        this.f21133b = functionalOperations;
    }

    public final Map a() {
        return this.f21133b;
    }

    public final Map b() {
        return this.f21132a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f21132a, bVar.f21132a) && Intrinsics.areEqual(this.f21133b, bVar.f21133b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f21132a.hashCode() * 31) + this.f21133b.hashCode();
    }

    public String toString() {
        Map map = this.f21132a;
        Map map2 = this.f21133b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
