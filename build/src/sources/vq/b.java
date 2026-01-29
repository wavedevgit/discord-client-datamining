package vq;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f51893a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f51894b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f51893a = standardOperations;
        this.f51894b = functionalOperations;
    }

    public final Map a() {
        return this.f51894b;
    }

    public final Map b() {
        return this.f51893a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f51893a, bVar.f51893a) && Intrinsics.areEqual(this.f51894b, bVar.f51894b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51893a.hashCode() * 31) + this.f51894b.hashCode();
    }

    public String toString() {
        Map map = this.f51893a;
        Map map2 = this.f51894b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
