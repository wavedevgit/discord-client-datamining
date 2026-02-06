package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f43658a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43659b;

    /* renamed from: c  reason: collision with root package name */
    public final int f43660c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43658a = workSpecId;
        this.f43659b = i10;
        this.f43660c = i11;
    }

    public final int a() {
        return this.f43659b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f43658a, iVar.f43658a) && this.f43659b == iVar.f43659b && this.f43660c == iVar.f43660c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f43658a.hashCode() * 31) + Integer.hashCode(this.f43659b)) * 31) + Integer.hashCode(this.f43660c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f43658a + ", generation=" + this.f43659b + ", systemId=" + this.f43660c + ')';
    }
}
