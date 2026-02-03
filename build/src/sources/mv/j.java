package mv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f39457a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39458b;

    /* renamed from: c  reason: collision with root package name */
    private final String f39459c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f39457a = replaceCandidate;
        this.f39458b = oldString;
        this.f39459c = newString;
    }

    public final String a() {
        return this.f39459c;
    }

    public final String b() {
        return this.f39458b;
    }

    public final String c() {
        return this.f39457a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f39457a, jVar.f39457a) && Intrinsics.areEqual(this.f39458b, jVar.f39458b) && Intrinsics.areEqual(this.f39459c, jVar.f39459c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f39457a.hashCode() * 31) + this.f39458b.hashCode()) * 31) + this.f39459c.hashCode();
    }

    public String toString() {
        String str = this.f39457a;
        String str2 = this.f39458b;
        String str3 = this.f39459c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
