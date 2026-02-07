package w0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final String f53300a;

    public s(String str) {
        this.f53300a = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof s) && Intrinsics.areEqual(this.f53300a, ((s) obj).f53300a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f53300a.hashCode();
    }

    public String toString() {
        return "OpaqueKey(key=" + this.f53300a + ')';
    }
}
