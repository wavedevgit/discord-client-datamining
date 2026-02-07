package gq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f25582a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25583b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f25582a = countryCode;
        this.f25583b = localPhoneNumber;
    }

    public final String a() {
        return this.f25582a;
    }

    public final String b() {
        return this.f25583b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f25582a, jVar.f25582a) && Intrinsics.areEqual(this.f25583b, jVar.f25583b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25582a.hashCode() * 31) + this.f25583b.hashCode();
    }

    public String toString() {
        String str = this.f25582a;
        String str2 = this.f25583b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
