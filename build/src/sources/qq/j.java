package qq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f45634a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45635b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f45634a = countryCode;
        this.f45635b = localPhoneNumber;
    }

    public final String a() {
        return this.f45634a;
    }

    public final String b() {
        return this.f45635b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f45634a, jVar.f45634a) && Intrinsics.areEqual(this.f45635b, jVar.f45635b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f45634a.hashCode() * 31) + this.f45635b.hashCode();
    }

    public String toString() {
        String str = this.f45634a;
        String str2 = this.f45635b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
