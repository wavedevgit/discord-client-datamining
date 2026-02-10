package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f42961a;

    /* renamed from: b  reason: collision with root package name */
    private final int f42962b;

    /* renamed from: c  reason: collision with root package name */
    public final int f42963c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f42961a = workSpecId;
        this.f42962b = i10;
        this.f42963c = i11;
    }

    public final int a() {
        return this.f42962b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f42961a, iVar.f42961a) && this.f42962b == iVar.f42962b && this.f42963c == iVar.f42963c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f42961a.hashCode() * 31) + Integer.hashCode(this.f42962b)) * 31) + Integer.hashCode(this.f42963c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f42961a + ", generation=" + this.f42962b + ", systemId=" + this.f42963c + ')';
    }
}
