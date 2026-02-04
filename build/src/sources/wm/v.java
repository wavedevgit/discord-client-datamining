package wm;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52590a;

    public v(Object obj) {
        this.f52590a = obj;
    }

    public final Object a() {
        return this.f52590a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof v)) {
            return false;
        }
        return Intrinsics.areEqual(this.f52590a, ((v) obj).f52590a);
    }

    public int hashCode() {
        Object obj = this.f52590a;
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }

    public String toString() {
        return "WorkflowOutput(" + this.f52590a + ')';
    }
}
