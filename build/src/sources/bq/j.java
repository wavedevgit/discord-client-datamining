package bq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f6753a;

    /* renamed from: b  reason: collision with root package name */
    private final String f6754b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f6753a = countryCode;
        this.f6754b = localPhoneNumber;
    }

    public final String a() {
        return this.f6753a;
    }

    public final String b() {
        return this.f6754b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f6753a, jVar.f6753a) && Intrinsics.areEqual(this.f6754b, jVar.f6754b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f6753a.hashCode() * 31) + this.f6754b.hashCode();
    }

    public String toString() {
        String str = this.f6753a;
        String str2 = this.f6754b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
