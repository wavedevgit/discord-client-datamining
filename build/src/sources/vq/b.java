package vq;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f51909a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f51910b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f51909a = standardOperations;
        this.f51910b = functionalOperations;
    }

    public final Map a() {
        return this.f51910b;
    }

    public final Map b() {
        return this.f51909a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f51909a, bVar.f51909a) && Intrinsics.areEqual(this.f51910b, bVar.f51910b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51909a.hashCode() * 31) + this.f51910b.hashCode();
    }

    public String toString() {
        Map map = this.f51909a;
        Map map2 = this.f51910b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
