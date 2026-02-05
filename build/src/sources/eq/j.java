package eq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f21779a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21780b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f21779a = countryCode;
        this.f21780b = localPhoneNumber;
    }

    public final String a() {
        return this.f21779a;
    }

    public final String b() {
        return this.f21780b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f21779a, jVar.f21779a) && Intrinsics.areEqual(this.f21780b, jVar.f21780b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f21779a.hashCode() * 31) + this.f21780b.hashCode();
    }

    public String toString() {
        String str = this.f21779a;
        String str2 = this.f21780b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
