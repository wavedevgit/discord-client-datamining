package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f30457a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30458b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30459c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f30457a = replaceCandidate;
        this.f30458b = oldString;
        this.f30459c = newString;
    }

    public final String a() {
        return this.f30459c;
    }

    public final String b() {
        return this.f30458b;
    }

    public final String c() {
        return this.f30457a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f30457a, jVar.f30457a) && Intrinsics.areEqual(this.f30458b, jVar.f30458b) && Intrinsics.areEqual(this.f30459c, jVar.f30459c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30457a.hashCode() * 31) + this.f30458b.hashCode()) * 31) + this.f30459c.hashCode();
    }

    public String toString() {
        String str = this.f30457a;
        String str2 = this.f30458b;
        String str3 = this.f30459c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
