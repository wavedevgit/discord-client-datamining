package wq;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f52985a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52986b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f52985a = standardOperations;
        this.f52986b = functionalOperations;
    }

    public final Map a() {
        return this.f52986b;
    }

    public final Map b() {
        return this.f52985a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f52985a, bVar.f52985a) && Intrinsics.areEqual(this.f52986b, bVar.f52986b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52985a.hashCode() * 31) + this.f52986b.hashCode();
    }

    public String toString() {
        Map map = this.f52985a;
        Map map2 = this.f52986b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
