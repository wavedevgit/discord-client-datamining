package yp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f54943a;

    /* renamed from: b  reason: collision with root package name */
    private final String f54944b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f54943a = countryCode;
        this.f54944b = localPhoneNumber;
    }

    public final String a() {
        return this.f54943a;
    }

    public final String b() {
        return this.f54944b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f54943a, jVar.f54943a) && Intrinsics.areEqual(this.f54944b, jVar.f54944b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54943a.hashCode() * 31) + this.f54944b.hashCode();
    }

    public String toString() {
        String str = this.f54943a;
        String str2 = this.f54944b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
