package lv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f37757a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37758b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37759c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f37757a = replaceCandidate;
        this.f37758b = oldString;
        this.f37759c = newString;
    }

    public final String a() {
        return this.f37759c;
    }

    public final String b() {
        return this.f37758b;
    }

    public final String c() {
        return this.f37757a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f37757a, jVar.f37757a) && Intrinsics.areEqual(this.f37758b, jVar.f37758b) && Intrinsics.areEqual(this.f37759c, jVar.f37759c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37757a.hashCode() * 31) + this.f37758b.hashCode()) * 31) + this.f37759c.hashCode();
    }

    public String toString() {
        String str = this.f37757a;
        String str2 = this.f37758b;
        String str3 = this.f37759c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
