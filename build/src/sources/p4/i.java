package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f44883a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44884b;

    /* renamed from: c  reason: collision with root package name */
    public final int f44885c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44883a = workSpecId;
        this.f44884b = i10;
        this.f44885c = i11;
    }

    public final int a() {
        return this.f44884b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f44883a, iVar.f44883a) && this.f44884b == iVar.f44884b && this.f44885c == iVar.f44885c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44883a.hashCode() * 31) + Integer.hashCode(this.f44884b)) * 31) + Integer.hashCode(this.f44885c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f44883a + ", generation=" + this.f44884b + ", systemId=" + this.f44885c + ')';
    }
}
