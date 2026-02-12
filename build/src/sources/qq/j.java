package qq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f45635a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45636b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f45635a = countryCode;
        this.f45636b = localPhoneNumber;
    }

    public final String a() {
        return this.f45635a;
    }

    public final String b() {
        return this.f45636b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f45635a, jVar.f45635a) && Intrinsics.areEqual(this.f45636b, jVar.f45636b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f45635a.hashCode() * 31) + this.f45636b.hashCode();
    }

    public String toString() {
        String str = this.f45635a;
        String str2 = this.f45636b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
