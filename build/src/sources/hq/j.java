package hq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final String f26493a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26494b;

    public j(String countryCode, String localPhoneNumber) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(localPhoneNumber, "localPhoneNumber");
        this.f26493a = countryCode;
        this.f26494b = localPhoneNumber;
    }

    public final String a() {
        return this.f26493a;
    }

    public final String b() {
        return this.f26494b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f26493a, jVar.f26493a) && Intrinsics.areEqual(this.f26494b, jVar.f26494b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26493a.hashCode() * 31) + this.f26494b.hashCode();
    }

    public String toString() {
        String str = this.f26493a;
        String str2 = this.f26494b;
        return "PhoneNumberInfo(countryCode=" + str + ", localPhoneNumber=" + str2 + ")";
    }
}
