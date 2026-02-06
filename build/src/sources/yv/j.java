package yv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f55647a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55648b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55649c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f55647a = replaceCandidate;
        this.f55648b = oldString;
        this.f55649c = newString;
    }

    public final String a() {
        return this.f55649c;
    }

    public final String b() {
        return this.f55648b;
    }

    public final String c() {
        return this.f55647a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f55647a, jVar.f55647a) && Intrinsics.areEqual(this.f55648b, jVar.f55648b) && Intrinsics.areEqual(this.f55649c, jVar.f55649c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55647a.hashCode() * 31) + this.f55648b.hashCode()) * 31) + this.f55649c.hashCode();
    }

    public String toString() {
        String str = this.f55647a;
        String str2 = this.f55648b;
        String str3 = this.f55649c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
