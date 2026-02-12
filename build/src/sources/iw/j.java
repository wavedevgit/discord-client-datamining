package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f30458a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30459b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30460c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f30458a = replaceCandidate;
        this.f30459b = oldString;
        this.f30460c = newString;
    }

    public final String a() {
        return this.f30460c;
    }

    public final String b() {
        return this.f30459b;
    }

    public final String c() {
        return this.f30458a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f30458a, jVar.f30458a) && Intrinsics.areEqual(this.f30459b, jVar.f30459b) && Intrinsics.areEqual(this.f30460c, jVar.f30460c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30458a.hashCode() * 31) + this.f30459b.hashCode()) * 31) + this.f30460c.hashCode();
    }

    public String toString() {
        String str = this.f30458a;
        String str2 = this.f30459b;
        String str3 = this.f30460c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
