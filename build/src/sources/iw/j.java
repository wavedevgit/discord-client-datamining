package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f31026a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31027b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31028c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f31026a = replaceCandidate;
        this.f31027b = oldString;
        this.f31028c = newString;
    }

    public final String a() {
        return this.f31028c;
    }

    public final String b() {
        return this.f31027b;
    }

    public final String c() {
        return this.f31026a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f31026a, jVar.f31026a) && Intrinsics.areEqual(this.f31027b, jVar.f31027b) && Intrinsics.areEqual(this.f31028c, jVar.f31028c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f31026a.hashCode() * 31) + this.f31027b.hashCode()) * 31) + this.f31028c.hashCode();
    }

    public String toString() {
        String str = this.f31026a;
        String str2 = this.f31027b;
        String str3 = this.f31028c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
