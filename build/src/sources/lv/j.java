package lv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f37741a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37742b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37743c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f37741a = replaceCandidate;
        this.f37742b = oldString;
        this.f37743c = newString;
    }

    public final String a() {
        return this.f37743c;
    }

    public final String b() {
        return this.f37742b;
    }

    public final String c() {
        return this.f37741a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f37741a, jVar.f37741a) && Intrinsics.areEqual(this.f37742b, jVar.f37742b) && Intrinsics.areEqual(this.f37743c, jVar.f37743c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37741a.hashCode() * 31) + this.f37742b.hashCode()) * 31) + this.f37743c.hashCode();
    }

    public String toString() {
        String str = this.f37741a;
        String str2 = this.f37742b;
        String str3 = this.f37743c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
