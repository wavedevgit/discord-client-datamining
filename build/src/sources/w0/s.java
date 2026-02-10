package w0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final String f52081a;

    public s(String str) {
        this.f52081a = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof s) && Intrinsics.areEqual(this.f52081a, ((s) obj).f52081a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f52081a.hashCode();
    }

    public String toString() {
        return "OpaqueKey(key=" + this.f52081a + ')';
    }
}
