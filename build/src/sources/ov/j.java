package ov;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f44812a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44813b;

    /* renamed from: c  reason: collision with root package name */
    private final String f44814c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f44812a = replaceCandidate;
        this.f44813b = oldString;
        this.f44814c = newString;
    }

    public final String a() {
        return this.f44814c;
    }

    public final String b() {
        return this.f44813b;
    }

    public final String c() {
        return this.f44812a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f44812a, jVar.f44812a) && Intrinsics.areEqual(this.f44813b, jVar.f44813b) && Intrinsics.areEqual(this.f44814c, jVar.f44814c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44812a.hashCode() * 31) + this.f44813b.hashCode()) * 31) + this.f44814c.hashCode();
    }

    public String toString() {
        String str = this.f44812a;
        String str2 = this.f44813b;
        String str3 = this.f44814c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
