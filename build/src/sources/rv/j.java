package rv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f49261a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49262b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49263c;

    public j(String replaceCandidate, String oldString, String newString) {
        Intrinsics.checkNotNullParameter(replaceCandidate, "replaceCandidate");
        Intrinsics.checkNotNullParameter(oldString, "oldString");
        Intrinsics.checkNotNullParameter(newString, "newString");
        this.f49261a = replaceCandidate;
        this.f49262b = oldString;
        this.f49263c = newString;
    }

    public final String a() {
        return this.f49263c;
    }

    public final String b() {
        return this.f49262b;
    }

    public final String c() {
        return this.f49261a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f49261a, jVar.f49261a) && Intrinsics.areEqual(this.f49262b, jVar.f49262b) && Intrinsics.areEqual(this.f49263c, jVar.f49263c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f49261a.hashCode() * 31) + this.f49262b.hashCode()) * 31) + this.f49263c.hashCode();
    }

    public String toString() {
        String str = this.f49261a;
        String str2 = this.f49262b;
        String str3 = this.f49263c;
        return "ReplaceData(replaceCandidate=" + str + ", oldString=" + str2 + ", newString=" + str3 + ")";
    }
}
