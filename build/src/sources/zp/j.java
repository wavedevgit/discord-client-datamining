package zp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f56039a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56040b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f56039a = countryCode;
        this.f56040b = localPhoneNumber;
    }

    public final String a() {
        return this.f56039a;
    }

    public final String b() {
        return this.f56040b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f56039a, jVar.f56039a) && Intrinsics.areEqual(this.f56040b, jVar.f56040b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56039a.hashCode() * 31) + this.f56040b.hashCode();
    }

    public String toString() {
        String str = this.f56039a;
        String str2 = this.f56040b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
