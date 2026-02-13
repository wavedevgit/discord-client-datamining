package qq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f46203a;

    /* renamed from: b  reason: collision with root package name */
    private final String f46204b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f46203a = countryCode;
        this.f46204b = localPhoneNumber;
    }

    public final String a() {
        return this.f46203a;
    }

    public final String b() {
        return this.f46204b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f46203a, jVar.f46203a) && Intrinsics.areEqual(this.f46204b, jVar.f46204b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f46203a.hashCode() * 31) + this.f46204b.hashCode();
    }

    public String toString() {
        String str = this.f46203a;
        String str2 = this.f46204b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
