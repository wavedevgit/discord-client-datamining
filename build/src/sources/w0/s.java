package w0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final String f53252a;

    public s(String str) {
        this.f53252a = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof s) && Intrinsics.areEqual(this.f53252a, ((s) obj).f53252a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f53252a.hashCode();
    }

    public String toString() {
        return "OpaqueKey(key=" + this.f53252a + ')';
    }
}
