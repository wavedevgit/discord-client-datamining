package br;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7216a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7217b;

    public b(Map standardOperations, Map functionalOperations) {
        Intrinsics.checkNotNullParameter(standardOperations, "standardOperations");
        Intrinsics.checkNotNullParameter(functionalOperations, "functionalOperations");
        this.f7216a = standardOperations;
        this.f7217b = functionalOperations;
    }

    public final Map a() {
        return this.f7217b;
    }

    public final Map b() {
        return this.f7216a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f7216a, bVar.f7216a) && Intrinsics.areEqual(this.f7217b, bVar.f7217b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7216a.hashCode() * 31) + this.f7217b.hashCode();
    }

    public String toString() {
        Map map = this.f7216a;
        Map map2 = this.f7217b;
        return "LogicOperations(standardOperations=" + map + ", functionalOperations=" + map2 + ")";
    }
}
