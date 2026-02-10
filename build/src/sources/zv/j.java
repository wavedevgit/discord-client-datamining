package zv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f56720a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56721b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56722c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f56720a = replaceCandidate;
        this.f56721b = oldString;
        this.f56722c = newString;
    }

    public final String a() {
        return this.f56722c;
    }

    public final String b() {
        return this.f56721b;
    }

    public final String c() {
        return this.f56720a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f56720a, jVar.f56720a) && Intrinsics.areEqual(this.f56721b, jVar.f56721b) && Intrinsics.areEqual(this.f56722c, jVar.f56722c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f56720a.hashCode() * 31) + this.f56721b.hashCode()) * 31) + this.f56722c.hashCode();
    }

    public String toString() {
        String str = this.f56720a;
        String str2 = this.f56721b;
        String str3 = this.f56722c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
