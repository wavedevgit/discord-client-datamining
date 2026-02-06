package gq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f25534a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25535b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f25534a = countryCode;
        this.f25535b = localPhoneNumber;
    }

    public final String a() {
        return this.f25534a;
    }

    public final String b() {
        return this.f25535b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f25534a, jVar.f25534a) && Intrinsics.areEqual(this.f25535b, jVar.f25535b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25534a.hashCode() * 31) + this.f25535b.hashCode();
    }

    public String toString() {
        String str = this.f25534a;
        String str2 = this.f25535b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
