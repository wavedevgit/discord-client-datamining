package yq;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f55274a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f55275b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f55274a = standardOperations;
        this.f55275b = functionalOperations;
    }

    public final Map a() {
        return this.f55275b;
    }

    public final Map b() {
        return this.f55274a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f55274a, bVar.f55274a) && Intrinsics.areEqual(this.f55275b, bVar.f55275b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55274a.hashCode() * 31) + this.f55275b.hashCode();
    }

    public String toString() {
        Map map = this.f55274a;
        Map map2 = this.f55275b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
