package yv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f55695a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55696b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55697c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f55695a = replaceCandidate;
        this.f55696b = oldString;
        this.f55697c = newString;
    }

    public final String a() {
        return this.f55697c;
    }

    public final String b() {
        return this.f55696b;
    }

    public final String c() {
        return this.f55695a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f55695a, jVar.f55695a) && Intrinsics.areEqual(this.f55696b, jVar.f55696b) && Intrinsics.areEqual(this.f55697c, jVar.f55697c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55695a.hashCode() * 31) + this.f55696b.hashCode()) * 31) + this.f55697c.hashCode();
    }

    public String toString() {
        String str = this.f55695a;
        String str2 = this.f55696b;
        String str3 = this.f55697c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
