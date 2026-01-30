package tu;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49957a;

    public b(Object obj) {
        this.f49957a = obj;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof b) && Intrinsics.areEqual(this.f49957a, ((b) obj).f49957a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f49957a;
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }

    public String toString() {
        Object obj = this.f49957a;
        return "SingleNestedValue(value=" + obj + ")";
    }
}
