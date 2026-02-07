package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f43706a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43707b;

    /* renamed from: c  reason: collision with root package name */
    public final int f43708c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43706a = workSpecId;
        this.f43707b = i10;
        this.f43708c = i11;
    }

    public final int a() {
        return this.f43707b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f43706a, iVar.f43706a) && this.f43707b == iVar.f43707b && this.f43708c == iVar.f43708c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f43706a.hashCode() * 31) + Integer.hashCode(this.f43707b)) * 31) + Integer.hashCode(this.f43708c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f43706a + ", generation=" + this.f43707b + ", systemId=" + this.f43708c + ')';
    }
}
